import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from '../../client/src/reducers/index';
import { LIST_ACTIONS } from '../../client/src/consts/action_types';
import App from '../../client/src/app';
import multer from 'multer';
const path = require('path');

const router = express.Router();

const storage  = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now()+".jpg");
  },
});

const upload = multer({
  storage: storage,
});
router.post('/', upload.single('imgFile'), (req, res, next) => {
  try {
    console.log("req", req.file);
    // res.redirect('/');  
    res.redirect('/view/imageCNN')
  } catch (error) {
    console.log(error);
  }
})

router.get('/', (req, res) => {
  /*
    http://redux.js.org/docs/recipes/ServerRendering.html
  */
  const store = createStore(reducers);

  /*
      We can dispatch actions from server side as well. This can be very useful if you want
      to inject some initial data into the app. For example, if you have some articles that
      you have fetched from database and you want to load immediately after the user has loaded
      the webpage, you can do so in here.

      Here we are inject an list item into our app. Normally once the user has loaded the webpage
      we would make a request to the server and get the latest item list. But in the server we have
      instant connection to a database (for example, if you have a mongoDB or MySQL database
      installed in the server which contains all you items).
      So you can quickly fetch and inject it into the webpage.

      This will help SEO as well. If you load the webpage and make a request to the server to get
      all the latest items/articles, by the time Google Search Engine may not see all the updated
      items/articles.

      But if you inject the latest items/articles before it reaches the user, the Search Engine
      will see the item/article immediately.
       */
  store.dispatch({
    type: LIST_ACTIONS.ITEM_ADD,
    item: {
      name: 'middleware',
      description: `Redux middleware solves different problems than Express or Koa middleware, but in a conceptually similar way.
      It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.`,
    },
  });

  const context = {};
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );

  const finalState = store.getState();

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
      'Access-Control-Allow-Origin': '*'
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(finalState),
      'Access-Control-Allow-Origin': '*'
    });
  }
});


export default router;

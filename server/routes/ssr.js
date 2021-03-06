// https://velopert.com/3425
import express, { query } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from '../../client/src/reducers/index';
import { LIST_ACTIONS } from '../../client/src/consts/action_types';
import App from '../../client/src/app';

const path = require('path');

const router = express.Router();

  // Render a React element to its initial HTML. This should only be used on the server. React will return an HTML string. You can use this method to generate HTML on the server and send the markup down on the initial request for faster page loads and to allow search engines to crawl your pages for SEO purposes.
router.get('/', (req, res) => {  
  const store = createStore(reducers);
  const context = {};
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      {/* StaticRouter: https://reactrouter.com/web/guides/server-rendering, localhost:5001/#/eachUrl */}
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
    // error 301: page permently moved
    res.writeHead(301, {
      Location: context.url,
      'Access-Control-Allow-Origin': '*',
    });
    // end response process
    res.end();
  } else {
    // success
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(finalState),
      'Access-Control-Allow-Origin': '*',
    });
  }
});


export default router;

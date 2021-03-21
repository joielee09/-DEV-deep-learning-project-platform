import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import reducers from '../../client/src/reducers/index';
import { LIST_ACTIONS } from '../../client/src/consts/action_types';
import App from '../../client/src/app';
import dbs from '../../dbs';

const router = express.Router();
const store = createStore(reducers); 

console.log("ssr rendered")


router.post('/', async (req, res) => {
  console.log("ssr post rendered")
  const context = {};
  const finalState = {'title': 'happy kitten'}

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

  // Create: try catch로 바꾸기
  const id = req.body.id_number;
  // console.log('id in ssr: ', id);
  // console.log('req.body in ssr: ', req.body);
  const { category } = req.body;
  const { title } = req.body;
  const { author } = req.body;
  const { password } = req.body;
  const { view_count } = req.body || 47;
  const { like_count } = req.body || 23;
  const { description } = req.body;
  const image = 'https://cdn.aitimes.kr/news/photo/202002/15296_16544_4827.jpg';
  // const component = 'imageClassification';

  const insertSql = `INSERT INTO PROJECT(CATEGORY, TITLE, AUTHOR, PASSWORD, VIEW_COUNT, LIKE_COUNT, DESCRIPTION, IMAGE) VALUES ('${category}','${title}', '${author}', '${password}', '${view_count}', '${like_count}', '${description}','${image}');`;
  if (title !== null && id === undefined) dbs.makeProjects(insertSql);

  // Delete
  // const selectedID = '5';
  // const { title } = req.body;
  // const { description } = req.body;
  // const { writer } = req.body;
  // const like_count = '16';
  // const deleteSql = `DELETE FROM PROJECT WHERE id=${6}`;
  // if (req.body) dbs.deleteProject(deleteSql);

  // Update: id가 있어야 하므로 req.body.id_number가 있으면 update
  // const selectedID = '5';
  // const updateSql = ``

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
      'Access-Control-Allow-Origin': '*',
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(finalState),
      'Access-Control-Allow-Origin': '*',
    });
  }
});

router.get('/*', async (req, res) => {
  console.log("ssr get rendered")

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

  const address = JSON.parse(JSON.stringify(req.headers)).referer;
  // console.log("address: ", address, typeof (address));

  // Read Project from DB
  const category = address ? address.slice(22, 26) : '';
  const projectId = address ? address.slice(30, 33) : '';
  // console.log('category: ', category, 'projectId: ', projectId);

  // const finalState = { 'title': 'cat' };
  // const finalState = await dbs.getAllProjects()
  //   .then((results) => {
  //     let result;
  //     results.map((cur) => {
  //       if (cur.ID === parseInt(Math.random() * 6) + 1) {
  //         result = JSON.stringify(cur);
  //         // console.log('result: ', result);
  //       }
  //     });
  //     return result;
  //   })
  //   .catch((error) => {
  //     console.log('error: ', error);
  //   });

  const finalState = {'title': 'happy puppy'}
  // const finalState = store.getState();
  // console.log('finalState: ', finalState);
  // const tmpState = JSON.parse(finalState);
  // store.dispatch({
  //   type: LIST_ACTIONS.ITEM_RENDER,
  //   item: {
  //     id: tmpState.ID,
  //     category: tmpState.CATEGORY,
  //     title: tmpState.TITLE,
  //     author: tmpState.AUTHOR,
  //     passowrd: tmpState.PASSWORD,
  //     view_count: 14,
  //     like_count: 3,
  //     description: tmpState.DESCRIPTION,
  //     image: tmpState.IMAGE,
  //   },
  // });



  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
      'Access-Control-Allow-Origin': '*',
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(finalState),
      'Access-Control-Allow-Origin': '*',
    });
  }
});

export default router;

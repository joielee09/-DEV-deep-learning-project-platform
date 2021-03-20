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

const path = require('path');

const router = express.Router();

router.post('/', async (req, res) => {
  const store = createStore(reducers);
  const context = {};
  const result2 = {};

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

  // Create
  // req.body에 insert 기능인지 check하는 flag, 또는 그런 비슷한 기능
  // const id = req.body.id_number;
  // const { title } = req.body;
  // const { description } = req.body;
  // const { writer } = req.body;
  // const like_count = '16';
  // const insertSql = `INSERT INTO PROJECTS VALUES (${id}, "${title}", "${description}", "${writer}", ${like_count})`;
  // if(req.body)  dbs.makeProjects(insertSql);

  // Delete
  // const selectedID = '5';
  // const { title } = req.body;
  // const { description } = req.body;
  // const { writer } = req.body;
  // const like_count = '16';
  // const deleteSql = `DELETE FROM PROJECTS WHERE id=${6}`;
  // if (req.body) dbs.deleteProject(deleteSql);

  // Update
  const selectedID = '5';
  const updateSql = ``

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
      'Access-Control-Allow-Origin': '*',
    });
    res.end();
  } else {
    res.status(200).render('../views/index.ejs', {
      html,
      script: JSON.stringify(result2),
      'Access-Control-Allow-Origin': '*',
    });
  }
});

router.get('/', async (req, res) => {
  const store = createStore(reducers);
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
  
  const address = JSON.parse(JSON.stringify(req.headers)).referer ;
  // console.log("address: ", address, typeof (address));
  
  
  const category = address? address.slice(22, 26) : '';
  const projectId = address ? address.slice(30, 33) : '';
  
  // const finalState = { 'title': 'cat' };
  const finalState = await dbs.getAllProjects()
    .then((results) => {
      let result;
      results.map((cur) => {
        if (cur.id === parseInt('1') && cur.title === 'cat or dog') {
        // if (true) {
          result = JSON.stringify(cur);
          // console.log("result: ", result);
        }
      })
      return result;
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  // console.log("finalState: ", finalState);

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

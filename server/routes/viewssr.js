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
const store = createStore(reducers);

console.log("ssr rendered")

router.get('/CV', (req, res) => {

  const context = {};
  const finalState = { 'title': 'VIEW CV PAGE!' }
  console.log("VIEW CV PAGE")

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

  res.status(200).render('../views/index.ejs', {
    html,
    script: JSON.stringify(finalState),
    'Access-Control-Allow-Origin': '*',
  });
});

router.get('/NLP', (req, res) => {
  
  const context = {};
  const finalState = { 'title': 'VIEW NLP PAGE!' }
  console.log("VIEW NLP PAGE")

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

  res.status(200).render('../views/index.ejs', {
    html,
    script: JSON.stringify(finalState),
    'Access-Control-Allow-Origin': '*',
  });
});

router.get('/RecSys', (req, res) => {
  
  const context = {};
  const finalState = { 'title': 'VIEW RecSys PAGE!' }
  console.log("VIEW RecSys PAGE")

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

  res.status(200).render('../views/index.ejs', {
    html,
    script: JSON.stringify(finalState),
    'Access-Control-Allow-Origin': '*',
  });
});

export default router;

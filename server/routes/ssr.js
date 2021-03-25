import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { store } from '../../client/src/reducers/list';
import { LIST_ACTIONS } from '../../client/src/consts/action_types';
import App from '../../client/src/app';
import dbs from '../../dbs';
import { DataUsageSharp } from '@material-ui/icons';

const router = express.Router();

console.log("ssr rendered")


router.post('/*', async (req, res) => {

  console.log("ssr post rendered", req.body)
  const context = {};
  let finalState = { 'title': 'happy kitten' }
  const store_ = store;

  // READ CATEGORY
  if (req.body['flag'] === 'getCategory') {
    console.log('read category');
    finalState = await dbs.getCategory(req.body['cat_name'])
      .then((res) => {
        console.log("read category: ", res);
        return res;
      })
      .catch((error) => {
        console.log("error in read category", error);
      })
  }

  // READ PROJECT
  if (req.body['flag'] === 'getData') {
    console.log("read project");
    finalState = await dbs.getOneProjects(req.body['id'])
      .then((res) => {
        console.log("getOneProjectRes res: ", res);
        return res;
      })
      .catch((error) => {
        console.log(error);
    })
  }


  // Create: try catch로 바꾸기
  if (req.body['flag'] === 'create') {
    const { CATEGORY } = req.body.CATEGORY? req.body : 'EMTPY';
    const { TITLE } = req.body.TITLE? req.body : 'EMTPY';
    const { AUTHOR } = req.body.AUTHOR? req.body : 'EMTPY';
    const { PASSWORD } = req.body.PASSWORD? req.body : 'EMTPY';
    // const VIEW_COUNT = parseInt(req.body) || 1;
    // const LIKE_COUNT = parseInt(req.body) || 1;
    const { DESCRIPTION } = req.body.DESCRIPTION? req.body : 'EMTPY';
    const IMAGE = req.body.IMAGE? req.body.IMAGE : 'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg';
    const COMPONENT = req.body.COMPONENT? req.body.COMPONENT : 'EMTPY';
    const NEEDFE = req.body.NEEDFE ? (req.body.NEEDFE==='on'? 1 : 0) : false;
    console.log("create value: ", req.body.NEEDFE);
    const insertSql = `INSERT INTO PROJECT (CATEGORY, TITLE, AUTHOR, PASSWORD, DESCRIPTION, IMAGE, COMPONENT, NEEDFE) VALUES ('${CATEGORY}','${TITLE}', '${AUTHOR}', '${PASSWORD}', '${DESCRIPTION}','${IMAGE}', '${COMPONENT}', '${NEEDFE}');`;
    dbs.makeProjects(insertSql);
  };

  // Delete
  if (req.body.flag === 'delete') {
    console.log("delete project");
    const deleteID = req.body.id;
    const deleteSql = `DELETE FROM PROJECT WHERE id=${deleteID}`;
    dbs.deleteProject(deleteSql);
  }


  // Update: id가 있어야 하므로 req.body.id_number가 있으면 update
  if (req.body['flag'] === 'update') {
    console.log("update project");
    const updateID = req.body.ID || '1';
    const { CATEGORY } = req.body || 'EMTPY';
    const { TITLE } = req.body || 'EMTPY' ;
    const { AUTHOR } = req.body || 'EMTPY';
    // const { PASSWORD } = req.body || 'EMTPY';
    // const { VIEW_COUNT } = req.body || '-1';
    // const { LIKE_COUNT } = req.body || '-1';
    const { DESCRIPTION } = req.body || 'EMTPY';
    const IMAGE = req.body.IMAGE? req.body.IMAGE : 'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg';
    const COMPONENT = req.body.COMPONENT? req.body.COMPONENT : 'EMTPY';
    const NEEDFE = req.body.NEEDFE ? (req.body.NEEDFE==='on'? 1 : 0) : false;
    // const updateSql = `UPDATE PROJECT SET CATEGORY='${CATEGORY}', TITLE='${TITLE}', AUTHOR='${AUTHOR}', PASSWORD='${PASSWORD}', VIEW_COUNT='${VIEW_COUNT}', LIKE_COUNT='${LIKE_COUNT}', DESCRIPTION='${DESCRIPTION}', IMAGE='${IMAGE}' , COMPONENT='${COMPONENT}', NEEDFE='${NEEDFE}' WHERE ID='${updateID}';`
    const updateSql = `UPDATE PROJECT SET CATEGORY='${CATEGORY}', TITLE='${TITLE}', AUTHOR='${AUTHOR}', DESCRIPTION='${DESCRIPTION}', IMAGE='${IMAGE}' , COMPONENT='${COMPONENT}', NEEDFE='${NEEDFE}' WHERE ID='${updateID}';`
    console.log(`UPDATE PROJECT SET CATEGORY='${CATEGORY}', TITLE='${TITLE}', AUTHOR='${AUTHOR}', DESCRIPTION='${DESCRIPTION}', IMAGE='${IMAGE}' , COMPONENT='${COMPONENT}', NEEDFE='${NEEDFE}' WHERE ID='${updateID}';`);
    dbs.updateProject(updateSql);
    // finalState = await dbs.updateProject(updateSql)
    //   .then((res) => {
    //     console.log("update Project res: ", res);
    //     return res;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    // })
  }



  const html = ReactDOMServer.renderToString(
    <Provider store={store_}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );

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
  // const store = createStore(reducers);
  const store_ = store;
  const context = {};

  const address = JSON.parse(JSON.stringify(req.headers)).referer;
  // Read Project from DB
  const category = address ? address.slice(22, 26) : '';
  const projectId = address ? address.slice(30, 33) : '';
  // console.log('category: ', category, 'projectId: ', projectId);

  const finalState = {'title': 'deep learning project platform'}
  // const finalState = await dbs.getAllProjects()
  //   .then((results) => {
  //     let result;
  //     results.map((cur) => {
  //       if (cur.ID === parseInt(Math.random() * 4) + 1) {
  //         result = JSON.stringify(cur);
  //         // console.log('result: ', result);
  //       }
  //     });
  //     return result;
  //   })
  //   .catch((error) => {
  //     console.log('error: ', error);
  //   });

  const html = ReactDOMServer.renderToString(
    <Provider store={store_}>
      <StaticRouter
        location={req.originalUrl}
        context={context}
      >
        <App />
      </StaticRouter>
    </Provider>,
  );

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

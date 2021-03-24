import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Upload from './project/computerVision/imageClassification';
import ListItemView from './containers/list_item_view';
import detailedPage from './components/detailedPage';
import CreateProject from './components/createProject';
import UpdateProject from './components/updateProject';

const App = () => {
  console.log(" app routing");
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/upload_page" component={Upload} />
      <Route exact path="/view/:name" component={ListItemView} />
      <Route exact path="/view/:name/:id" component={detailedPage} />
      <Route exact path="/createProject" component={CreateProject} />
      <Route exact path="/view/:name/:id/updateProject" component={UpdateProject} />
    </div>
  )
};

export default App;

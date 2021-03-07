import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Upload from './project/computerVision/imageClassification';
import ListItemView from './containers/list_item_view';
import detailedPage from './components/detailedPage';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/upload_page" component={Upload} />
    <Route exact path="/view/:name" component={ListItemView} />
    <Route exact path="/view/:name/:id" component={detailedPage} />
  </div>
);

export default App;

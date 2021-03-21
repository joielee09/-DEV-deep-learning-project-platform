import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItemPreview from './list_item_preview';
import { projects } from '../../../db.js';
import { Link } from 'react-router-dom';
import store from '../reducers/list';

import ImageProject from '../project/computerVision/imageClassification';
import ContentBasedMoiveRecommend from '../project/RecSys/contentBased';
import CollaborativeMoiveRecommend from '../project/RecSys/collaborative';
import StyleTransfer from '../project/computerVision/styletransfer';

// data from databse
// let res;
// const mapStateToProps = (state) => {
//   res = state.list;
//   return state.list;
// }
  
const DetailedPage = (params) => {
  console.log("detailed page rendered")
  // console.log("states from ssr in detailed Page: ", res);
  // console.log("getState: ", store.getState());

  const category = params.match.params.name;
  const cat_id = params.match.params.id;
  const project_ = projects[category].filter(cur => parseInt(cur.id) === parseInt(cat_id));
  const project = project_[0];

  // dynamic importing
  const handleComponent = (param) => {
    if (param === 'imageClassification') return <ImageProject />;
    if (param === 'contentBasedMovie') return <ContentBasedMoiveRecommend />;
    if (param === 'collaborativeMovie') return <CollaborativeMoiveRecommend />;
    if (param === 'styleTransfer') return <StyleTransfer />;
    return <img src="https://cdn.aitimes.kr/news/photo/202002/15296_16544_4827.jpg" width="700px" />;
  };

  const postDelete = (id) => {

  }

  const postUpdate = (id) => {

  }

  const onClickHandler = (e) => {
    // alert to make sure delete
    // e.preventDefault();
    // postDelete(current_project_id);
  }

  return (
    <div className="detailed" style={{ padding: '100px', paddingTop: '20px' }}>
      {/* Project Title */}
      {/* <h2>{`Project Name: ${project.title}`}</h2> */}
      {/* <h2>{`Project Name: ${res.title}`}</h2> */}

      {/* 비밀번호로 접근권한 제어 */}
      <div className="update delete component" style={{
        display: "flex", flexDirection: "row", flexWrap: 
    "wrap" }} >
      <Link to="/updateProject">
        <button
          type="button"
          className="btn btn-primary"
          style={{ marginBottom:"20px", marginRight:"20px" }}
        >UPDATE</button>
      </Link>
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded" >
        <button type="submit" onClick={e=>onClickHandler(e)} >DELETE</button>
      </form>

      {/* Project: get the component path */}
      <div className="projectContainer" style={{ padding: '70px' }}>
        {handleComponent(project.component)}
        </div>
        </div>

      {/* Summary */}

      {/* Description */}
      <h3>ABOUT THIS PROJECT</h3>
      <span>{project.description}</span>

      {/* Skillset */}
      <h3>SKILLSET</h3>
      <ul>
        <li>Basic Model: Convolutional Neural Networ</li>
        <li>Optimizer: Adam Optimizer</li>
        <li>Loss: MSE</li>
      </ul>
      <button
        type="button"
        onClick={() => params.history.goBack()}
      >Back</button>
    </div>
  );
};

const stateToProps = (state) => {
  return {
    id: state.id,
    category: state.category,
    title: state.title,
    author: state.author,
    passowrd: state.password,
    view_count: 14,
    like_count: 3,
    description: state.description,
    image: state.image
  }
}

// export default DetailedPage;
export default connect(stateToProps)(DetailedPage);
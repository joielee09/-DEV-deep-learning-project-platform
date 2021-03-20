import React, { useState } from 'react';
import { connect } from 'react-redux';
import ListItemPreview from './list_item_preview';
import { projects } from '../../../db.js';
import { Link } from 'react-router-dom';

import ImageProject from '../project/computerVision/imageClassification';
import ContentBasedMoiveRecommend from '../project/RecSys/contentBased';
import StyleTransfer from '../project/computerVision/styletransfer';

// data from databse
let res;
const mapStateToProps = (state) => {
  res = state.list;
  return {
    item: state.list,
  };
}
  
const DetailedPage = (params) => {
  
  const category = params.match.params.name;
  const cat_id = params.match.params.id;
  const project_ = projects[category].filter(cur => parseInt(cur.id) === parseInt(cat_id));
  const project = project_[0];

  // dynamic importing
  const handleComponent = (param) => {
    if (param === 'imageClassification') return <ImageProject />;
    if (param === 'contentBasedMovie') return <ContentBasedMoiveRecommend />;
    if (param === 'styleTransfer') return <StyleTransfer />;
    return <img src="https://cdn.aitimes.kr/news/photo/202002/15296_16544_4827.jpg" width="700px" />;
  };

  const postDelete = (id) => {

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
      <h2>{`Project Name: ${res.title}`}</h2>
      
      {/* 비밀번호로 접근권한 제어 */}
      <Link to="/updateProject">
        <button
          type="button"
          className="btn btn-primary"
          style={{ position:"absolute", right:"10px", top:"10px", width:"100px", height:"50px" }}
        >UPDATE</button>
      </Link>
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded" >
        <button type="submit" onClick={e=>onClickHandler(e)} >DELETE</button>
      </form>
      
      {/* Project: get the component path */}
      <div className="projectContainer" style={{ padding: '70px' }}>
        {handleComponent(project.component)}
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

// export default DetailedPage;
export default connect(mapStateToProps)(DetailedPage);
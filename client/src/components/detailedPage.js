import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ListItemPreview from './list_item_preview';
import { projects } from '../../../db.js';
import { Link } from 'react-router-dom';
import { store } from '../reducers/list';


import ImageProject from '../project/computerVision/imageClassification';
import ContentBasedMoiveRecommend from '../project/RecSys/contentBased';
import CollaborativeMoiveRecommend from '../project/RecSys/collaborative';
import StyleTransfer from '../project/computerVision/styletransfer';
import axios from 'axios';
import FormData from 'form-data';

// data from databse
// let res;
// const mapStateToProps = (state) => {
//   res = state.list;
//   return state.list;
// }


const DetailedPage = (params) => {


  const category = params ? params.match.params.name : '';
  const cat_id = params ? params.match.params.id : '';
  const project_ = params ? projects[category].filter(cur => parseInt(cur.id) === parseInt(cat_id)) : '';
  const project = params ? project_[0] : '';
  const [result, setResult] = useState();
  console.log("detailed page rendered")
  
  const getData = () => {
    let axiosRes;
    const data = { id: cat_id };
    axios.post('http://localhost:5001/view/NLP/5',
      data,
      { headers: {  'Content-Type': 'application/json',  }, },
    )
      .then((res) => {
        const len = res.data.length;
        // console.log(JSON.parse( res.data.slice(2997, parseInt(len - 74)) ));
      setResult(JSON.parse( res.data.slice(2997, parseInt(len - 74)) ));
      // console.log("res from axios: ", res.data.slice(2997, parseInt(len - 74)));
    })
      .catch((error) => console.log(error))
    return axiosRes;
  }

  useEffect(() => {
    getData();
  }, [])

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

  const handleSaga = () => {
    // const res = store.getState();
    // console.log("res: ", res);
  }

  return (
    <div className="detailed" style={{ padding: '100px', paddingTop: '20px' }}>
      {/* Project Title */}
      {/* <h2>{`Project Name: ${project.title}`}</h2> */}
      {/* <h2>{`Project Name: ${res.title}`}</h2> */}
      <button onClick={handleSaga} >REDUX SAGA</button>

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

// const mapStateToProps = state => ({
//   listItems: state,
// });

// const mapDispatchToProps = dispatch => ({
//   dispatch: dispatch
// });

export default DetailedPage;
// export default connect(DetailedPage);
// export default connect(mapStateToProps, mapDispatchToProps)(DetailedPage);
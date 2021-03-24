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
  const [password, setPassword] = useState('');
  const [result, setResult] = useState({
    ID: '1',
    CATEGORY: 'CV',
    TITLE: 'cat or dog222',
    AUTHOR: 'jaeyoung',
    PASSWORD: 'asdf',
    VIEW_COUNT: '47',
    LIKE_COUNT: '12',
    DESCRIPTION: 'this is default value from redux!!',
    IMAGE: 'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg',
    CREATED_AT:"2021-03-20T22:43:08.000Z"
});
  console.log("detailed page rendered")
  
  const getData = () => {
    let axiosRes;
    const data = { id: cat_id, flag: 'getData' };
    axios.post(`http://localhost:5001/view/${result.CATEGORY}/${result.ID}`,
      data,
      { headers: {  'Content-Type': 'application/json',  }, },
    )
      .then((res) => {
        const len = res.data.length;
        let tmp;
        for (let i = 0; i < res.data.length; i++){
          if (res.data.slice(i, (i + 6)) === 'window') {
              tmp = JSON.parse(res.data.slice(i+28, parseInt(len - 74)));
              break;
            }
        }
        setResult(tmp);
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

  const postUpdate = (id) => {

  }

  const postDelete = (e) => {
    console.log("item deleted")
  }

  const handleSaga = () => {
    // const res = store.getState();
    // console.log("res: ", res);
  }

  return (
  <div className="detailed" style={{ padding: '100px', paddingTop: '20px' }}>
    {/* Project Title */}
    <h2>Project Name: {result.TITLE}</h2>

    {/* project metaData */}
    <span>작성자: {result.AUTHOR}</span><span>&nbsp;&nbsp;&nbsp;</span><span>작성시간: {result.CREATED_AT.slice(0,10)} {result.CREATED_AT.slice(11,19)}</span><span>&nbsp;&nbsp;&nbsp;</span><span>조회수: {result.VIEW_COUNT}</span><span>&nbsp;&nbsp;&nbsp;</span><span>좋아요:{result.LIKE_COUNT}</span><br/><br />
    
    {/* 비밀번호로 접근권한 제어 */}
    
    <div
      className="update delete component"
      style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }} >
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="비밀번호를 입력하세요"
      ></input>
      <Link
        to={{
            pathname:`/view/${result.CATEGORY}/${result.ID}/updateProject`,
            query: { id: result.ID, category: result.CATEGORY }
        }} 
      >
      {/* <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded" > */}
        <input style={{ display: "none" }} value={"update"} name="flag" ></input>
        <input style={{ display: "none" }} value={result.ID} name="id" ></input>
        <button
          type="button"
          style={{ marginBottom: "20px", marginRight: "20px" }}
          onClick={e => postUpdate(e)}
          style={{ backgroundColor: password === result.PASSWORD ? 'green' : 'gray', margin:"5px" }}
          disabled={password===result.PASSWORD? false:true}
        >UPDATE</button>
      {/* </form> */}
    </Link>
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded" >
        <input style={{ display: "none" }} value={"delete"} name="flag" ></input>
        <input style={{ display: "none" }} value={result.ID} name="id" ></input>
        <button
          type="submit"
          onClick={e => postDelete(e)}
          style={{ backgroundColor: password === result.PASSWORD ? 'red' : 'gray', margin:"5px" }}
          disabled={password===result.PASSWORD? false:true}
        >DELETE</button>
      </form>
    </div>
    
    <div className="project information">
      
      {/* Project: get the component path */}
      <div className="projectContainer" style={{ padding: '70px' }}>
        {handleComponent(project.component)}
      </div>

      {/* Description */}
      <h3>ABOUT THIS PROJECT</h3>
      <span>{result.DESCRIPTION}</span>

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
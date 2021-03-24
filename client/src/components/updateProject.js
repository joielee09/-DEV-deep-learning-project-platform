import React, { useState, useEffect } from 'react';
import axios from 'axios';

const createProject = (params) => {

  const category = params.location.query.category;
  const cat_ID = params.location.query.id;
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [desc, setDesc] = useState('');
  const [frontEnd, setFrontEnd] = useState(false);
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

  const getData = () => {
    let axiosRes;
    const data = { id: cat_ID, flag: 'getData' };
    // console.log("hit get data");
    // axios.post(`http://localhost:5001/view/${category}/${cat_ID}/updateProject`,
      axios.post(`http://localhost:5001/view/NLP/6/updateProject`,
      data,
      { headers: {  'Content-Type': 'application/json',  }, },
    )
      .then((res) => {
        const len = res.data.length;
        let tmp;
        for (let i = 0; i < res.data.length; i++){
          if (res.data.slice(i, (i + 6)) === 'window') {
            // tmp = JSON.parse(res.data.slice(i + 28, parseInt(len - 74)));
            tmp = res.data.slice(i + 28, parseInt(len - 74));
            console.log("tmp from update Project: ", tmp);
              break;
            }
        }
        console.log("tmp from update Project: ", tmp);
        // setResult(tmp);
      // console.log( res.data.slice(2997, parseInt(len - 74)) );
    })
      .catch((error) => console.log(error))
    return axiosRes;
  }

  const onClickhandler = (e) => {
    // e.preventDefault();
    console.log("e.target: ", e.target);
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="updateProject">
      <h1>update project</h1>
      
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded">
      <div className="project information" style={{ height:"80px" }} >
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="프로젝트 제목을 입력하세요"
        /><br />
        
          <input
          type="text"
          name="writer"
          value={writer}
          onChange={e => setWriter(e.target.value)}
          placeholder="작성자 이름(예. 이재영T_1250)"
        /><br />
       
          <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          /><br />
       
          <span>프런트앤드 도움이 필요합니다.</span><input
          type="checkbox"
          name="frontEnd Needed"
          value={frontEnd}
          onChange={e => setFrontEnd(e.target.value)}
          /><br />
       
          <input type="submit" value="올리기" onClick={e => onClickhandler(e)} />
        
        </div>
          <br /><br />
        
        <textarea
          name="description"
          style={{ width:"900px", height:"400px" }}
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        </form>
      {/* <button type="submit">submit</button> */}
      <button
        type="button"
        onClick={() => params.history.goBack()}
      >Back</button>
    </div>
  );
};

export default createProject;

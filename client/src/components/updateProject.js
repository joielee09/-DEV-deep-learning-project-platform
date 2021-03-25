import React, { useState, useEffect } from 'react';
import axios from 'axios';

const createProject = (params) => {

  // console.log("params: ", params);

  const [ID, setID] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [desc, setDesc] = useState('');
  const [needFE, setNeedFE] = useState(false);

  const [result, setResult] = useState({
    CATEGORY: 'CV',
    TITLE: 'cat or dog222',
    AUTHOR: 'jaeyoung',
    PASSWORD: 'asdf',
    VIEW_COUNT: '47',
    LIKE_COUNT: '12',
    DESCRIPTION: 'this is default value from redux!!',
    IMAGE: 'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg',
    COMPONENT: 'EMPTY',
    NEEDFE: 'true'
  });

  const getData = () => {
    let axiosRes;
    const category = params? params.location.query.category : '';
    const cat_ID = params ? params.location.query.id : '';
    const data = { id: cat_ID, flag: 'getData' };
    axios.post(`http://localhost:5001/view/${category}/${cat_ID}/updateProject`,
      data,
      { headers: {  'Content-Type': 'application/json',  }, },
    )
      .then((res) => {
        const len = res.data.length;
        let tmp;
        for (let i = 0; i < res.data.length; i++){
          if (res.data.slice(i, (i + 6)) === 'window') {
            tmp = JSON.parse(res.data.slice(i + 28, parseInt(len - 74)));
            // tmp = res.data.slice(i + 28, parseInt(len - 74));
            console.log("tmp from update Project: ", tmp);
              break;
            }
        }
        setSelectValue(tmp.CATEGORY);
        setTitle(tmp.TITLE);
        setAuthor(tmp.AUTHOR);
        setDesc(tmp.DESCRIPTION);
        setNeedFE(tmp.NEEDFE);
        setID(tmp.ID);
    })
      .catch((error) => console.log(error))
    return axiosRes;
  }

  const onClickhandler = (e) => {
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div className="updateProject">
      <h1>update project</h1>
      
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded">
        <input style={{ display: "none" }} value={"update"} name="flag" ></input>
        <input style={{ display: "none" }} value={ID} name="ID" ></input>
        <div className="project information" style={{ height: "80px" }} >
        
        <select name="CATEGORY" value={selectValue} onChange={e => setSelectValue(e.target.value)} >
          <option value="CV" >Computer Vision</option>
          <option value="NLP" >Natural Language</option>
          <option value="RecSys" >Recommendation System</option>
          <option value="ETC" >ETC</option>
        </select><br />
          
        <input
          type="text"
          name="TITLE"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="프로젝트 제목을 입력하세요"
        /><br />
        
        <input
          type="text"
          name="AUTHOR"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="작성자 이름(예. 이재영T_1250)"
        /><br />

          <span>프런트앤드 도움이 필요합니다.</span><input
            type="checkbox"
            name="NEEDFE"
            value={needFE}
            onChange={e => setNeedFE(e.target.value)}
          /><br />

          <input type="submit" value="올리기" onClick={e => onClickhandler(e)} />

        </div>
          <br /><br />

        <textarea
          name="DESCRIPTION"
          style={{ width:"900px", height:"400px" }}
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        </form>
      <button
        type="button"
        onClick={() => params.history.goBack()}
      >Back</button>
    </div>
  );
};

export default createProject;


import React, { useState } from 'react';
import Dropdown from 'react-dropdown';

const createProject = () => {

  const options = [
  'CV', 'NLP', 'RecSys', 'ETC'
  ];
  const [selectValue, setSelectValue] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg');
  const [component, setComponent] = useState('');
  const [frontEnd, setFrontEnd] = useState(false);

  const onClickhandler = (e) => {
    // e.preventDefault();
    console.log("e.target: ", e.target);
  };

  return (
    <div className="createProject">
      <h1>create project</h1>
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded">
        <input style={{ display: "none" }} value={"create"} name="flag" ></input>
        <div className="project information" style={{ height: "80px" }}>
        <select name="CATEGORY" value={selectValue} onChange={e=>setSelectValue(e.target.value)} >
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
        
          <input
          type="password"
          name="PASSWORD"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
          /><br />
          
          <span>프런트앤드 도움이 필요합니다.</span><input
          type="checkbox"
          name="NEEDFE"
          checked={frontEnd}
          onClick={()=>setFrontEnd(!frontEnd)}
          /><br />

          <br />
        <input type="submit" value="올리기" onClick={e => onClickhandler(e)} />
        <br /><br /><br />
        
        <textarea
            name="DESCRIPTION"
            style={{ width: "900px", height: "500px" }}
          value={desc}
          onChange={e => setDesc(e.target.value)}
          />
          </div>
      </form>
    </div>
  );
};

export default createProject;

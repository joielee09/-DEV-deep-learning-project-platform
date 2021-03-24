
import React, { useState } from 'react';
import Dropdown from 'react-dropdown';

const createProject = () => {

  const options = [
  'CV', 'NLP', 'RecSys', 'ETC'
  ];
  const [Opt, setOpt] = useState(options[0]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [password, setPassword] = useState('');
  const [frontEnd, setFrontEnd] = useState('');
  const [desc, setDesc] = useState('');

  const onClickhandler = (e) => {
    // e.preventDefault();
    console.log("e.target: ", e.target);
  };

  return (
    <div className="createProject">
      <h1>create project</h1>
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded">
        <div className="project information" style={{ height:"80px" }} >
        <Dropdown options={options} onChange={setOpt} name="category" value={Opt} placeholder="Select an option" />
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="프로젝트 제목을 입력하세요"
        /><br />
        
          <input
          type="text"
          name="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
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
          {/* like_count */}
        
          <input type="submit" value="올리기" onClick={e => onClickhandler(e)} />
        
        </div>
        
        <br /><br />
        <textarea
          name="description"
          cols="50px"
          rows="100px"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
      </form>
    </div>
  );
};

export default createProject;

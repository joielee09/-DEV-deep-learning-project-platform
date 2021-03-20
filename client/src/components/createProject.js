
import React, { useState } from 'react';

const createProject = () => {
  const [id_number, setId_number] = useState('');
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [desc, setDesc] = useState('');

  const onClickhandler = (e) => {
    // e.preventDefault();
    console.log("e.target: ", e.target);
  };

  return (
    <div className="createProject">
      <h1>create project</h1>
      <form method="post" action="/" encType="Content-Type: application/x-www-form-urlencoded">
        <input
          type="number"
          name="id_number"
          value={id_number}
          onChange={e => setId_number(e.target.value)}
          placeholder="(dev) 프로젝트"
        />
        <input
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="프로젝트 제목을 입력하세요"
        />
        <input
          type="text"
          name="writer"
          value={writer}
          onChange={e => setWriter(e.target.value)}
          placeholder="작성자 이름(예. 이재영T_1250)"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호를 입력하세요"
        />
        <textarea
          name="description"
          cols="50px"
          rows="100px"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <input type="submit" value="올리기" onClick={e=>onClickhandler(e)} />
      </form>
      {/* <button type="submit">submit</button> */}
    </div>
  );
};

export default createProject;

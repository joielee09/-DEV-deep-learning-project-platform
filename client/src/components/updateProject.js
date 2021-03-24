import React, { useState, useEffect } from 'react';

const createProject = (params) => {

  console.log('params: ', params);
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [desc, setDesc] = useState('');
  const [frontEnd, setFrontEnd] = useState(false);

  const getData = () => {
    let axiosRes;
    const data = { id: cat_id, flag: 'getData' };
    axios.post('http://localhost:5001/view/NLP/5',
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
        console.log("tmp: ", tmp);
        setResult(tmp);
      console.log( res.data.slice(2997, parseInt(len - 74)) );
    })
      .catch((error) => console.log(error))
    return axiosRes;
  }

  const onClickhandler = (e) => {
    // e.preventDefault();
    console.log("e.target: ", e.target);
  };

  // useEffect(() => {
  //   // getData()
  // }, []);

  return (
    //value를 가지고 와서 update finde by id
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
          cols="50px"
            rows="100px"
            style={{ width:"800px", height:"800px" }}
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

import React from 'react';
import { useLocation } from 'react-router';

// query parsing해서 >> axios를 보내서 >> 예측결과를 받아와서 >> 거기에 맞는 image를 render한다.

const useQuery = () => {
  new URLSearchParams(useLocation().upload_page);
}

const handleClick = (e) => {
  const data = e;
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const query = params.get('valid')
  console.log(query);
  
  // axios({
  //   method: 'POST',
  //   baseURL: 'http://275386750a8a.ngrok.io/post',
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   data: data
  // })
  //   .then((result) => {
  //     console.log('Yes! 🙆‍♀️ ', result);
  //   })
  //   .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
};

const Upload = () => (
  <div className="home">
    <h1>Successfully uploaded</h1>
    {/* <img src="/server/uploads/image.jpg" width="100" /> */}
    <button onClick={e => handleClick(e)}>이미지 파일 불러오기</button>
  </div>
);

export default Upload;

import React, { useState } from 'react';
import { PORT } from '../../../utils';
import axios from 'axios';

// query parsing해서 >> axios를 보내서 >> 예측결과를 받아와서 >> 거기에 맞는 image를 render한다.

const useQuery = () => {
  new URLSearchParams(useLocation().upload_page);
}


const Upload = () => {
  const [img, setImg] = useState('https://cdn2.vectorstock.com/i/1000x1000/80/46/crazy-face-with-harlequin-hat-isolated-icon-vector-13778046.jpg')
  
  const renderImage = (res) => {
    if (res === '김종국') setImg('http://www.futurekorea.co.kr/news/photo/202010/140940_144818_2331.jpg')
    else if (res === '마동석') setImg('http://image.kmib.co.kr/online_image/2018/1121/201811210010_13200924035737_1.jpg')
    else setImg('https://ilyo.co.kr/contents/article/images/2020/0120/1579505870009790.jpg')
  }
  
  const handleClick = (e) => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const query = params.get('valid');
  console.log("query: ", query);
  // query:  /uploads/imgFile-1614776067597.jpg
  const imgUrl = `http://localhost:${PORT}${query}`;
  console.log(imgUrl);

  // const imgFile = 

  // other ways to convert image to url?
  // const reader = new FileReader();
  // reader.readAsDataURL()
  
  // const canvas = createCanvas();
  // const imgUrl = canvas.toDataURL(query);
  // console.log("imgUrl: ", imgUrl);
  
  const data = { imageFile: 'https://dispatch.cdnser.be/wp-content/uploads/2016/05/20160502220004_2016050220401879101_1_99_20160502204403.jpg' };
  
  axios({
    method: 'POST',
    baseURL: 'http://075a58887715.ngrok.io/post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    //have to be file!
    data: data
  })
    .then((result) => {
      console.log('Yes! 🙆‍♀️ ', result);
      renderImage(result.data.class_name)
    })
    .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
  };
  
  return(
    <div className="home">
      <h1>Successfully uploaded</h1>
      <img src={img} width="300" />
      <button onClick={e => handleClick(e)}>이미지 파일 불러오기</button>
    </div>
  );
};

export default Upload;

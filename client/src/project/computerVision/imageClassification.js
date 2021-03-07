import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListItemPreview = () => {
  let file = '';
  let blob = '';
  let base_64 = '';
  
  const [img, setImg] = useState('https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-15bzuw4_0f357d00.jpeg?region=0%2C0%2C600%2C600');
  const [resImg, setResImg] = useState('https://www.stch.org.uk/wp-content/uploads/2020/06/question-mark.png')
  const [resFromAxios, setResFromAxios] = useState();

  const handleResult = (res) => {
    if (res === '마동석') setResImg('http://image.kmib.co.kr/online_image/2018/1121/201811210010_13200924035737_1.jpg');
    else if (res === '김종국') setResImg('http://www.futurekorea.co.kr/news/photo/202010/140940_144818_2331.jpg');
    else setResImg('https://ilyo.co.kr/contents/article/images/2020/0120/1579505870009790.jpg');
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    window.open('e:', file);
    const data = { imageFile: base_64 };

    setTimeout(console.log('Wait...'), 12000);
    axios.post(
      'http://cf05802f1978.ngrok.io/post',
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    )
      .then((result) => {
        console.log('Yes! 🙆‍♀️ ', result);
        console.log('result from axios: ', resFromAxios);
        handleResult(result.data.class_name);
      })
      .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
  };

  const onChange = (e) => {
    e.preventDefault();
    file = e.target.files[0];
    blob = URL.createObjectURL(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // file equals blob
    fileReader.onload = function (e) {
      base_64 = e.target.result.slice(23);
      console.log('base 64', e.target.result.slice(23));
    };
    // image rendering
    setImg(URL.createObjectURL(file));
  };

  return (
    <div className="preview">
      <input type="file" id="imageInput" multiple onChange={e => onChange(e)} name="file" accept="image/*" />
      <img src={img} width="500" alt="uploaded image" />
      <button type="submit" onClick={e => onClickHandler(e)}>전송하기</button>
      <img src={resImg} width="500" alt="result image" />

      <form method="POST" action="/" encType="multipart/form-data">
        <input type="file" name="imgFile" id="imgFile" onChange={e => onChange(e)} />
        <input type="submit" value="보내기" onClick={e => onClickHandler(e)} />
      </form>
    </div>
  );
};

ListItemPreview.propTypes = {
};

ListItemPreview.defaultProps = {
};

export default ListItemPreview;

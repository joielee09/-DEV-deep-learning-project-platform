import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const StyleTransfer = () => {
  let file1 = '';
  let file2 = '';
  let blob1 = '';
  let blob2 = '';

  const [img1, setImg1] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [img2, setImg2] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [resImg, setResImg] = useState('https://e7.pngegg.com/pngimages/552/1016/png-clipart-black-and-gray-robot-illustration-robotics-fractal-foreign-exchange-market-artificial-intelligence-tech-robot-material-electronics-computer-wallpaper-thumbnail.png');
  const [resFromAxios, setResFromAxios] = useState();
  const [base_64_1, setBase_64_1] = useState();
  const [base_64_2, setBase_64_2] = useState();
  const [resComment, setResComment] = useState();

  const handleResult = (res) => {
    const data = `data:image/png;base64,${res}`;
    console.log(data);
    setResImg(data);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    const data = { image1: base_64_1, image2: base_64_2 };
    axios.post(
      'http://ec2-3-35-37-166.ap-northeast-2.compute.amazonaws.com/styletransfer',
      data,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    )
      .then((result) => {
        console.log('Yes! 🙆‍♀️ ', result.data, typeof (result.data));
        handleResult(result.data['img_']);
      })
      .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
  };

  const onChange1 = (e) => {
    e.preventDefault();
    file1 = e.target.files[0];
    blob1 = URL.createObjectURL(file1);
    setImg1(URL.createObjectURL(file1));
    setResImg('https://e7.pngegg.com/pngimages/552/1016/png-clipart-black-and-gray-robot-illustration-robotics-fractal-foreign-exchange-market-artificial-intelligence-tech-robot-material-electronics-computer-wallpaper-thumbnail.png');
    setResComment('');
    // setResImg('https://culturacion.com/wp-content/uploads/2018/12/redes-neuronales-1280x720.jpg');
    const fileReader1 = new FileReader();
    fileReader1.readAsDataURL(file1); // file equals blob
    fileReader1.onload = function (e) {
      setBase_64_1(e.target.result.slice(23));
    };
  };
  const onChange2 = (e) => {
    e.preventDefault();
    file2 = e.target.files[0];
    blob2 = URL.createObjectURL(file2);
    setImg2(URL.createObjectURL(file2));
    // setResImg('https://culturacion.com/wp-content/uploads/2018/12/redes-neuronales-1280x720.jpg');
    const fileReader2 = new FileReader();
    fileReader2.readAsDataURL(file2); // file equals blob
    fileReader2.onload = function (e) {
      setBase_64_2(e.target.result.slice(23));
    };
  };

  return (
    <div
      className="preview"
      style={{
        backgroundColor: '#DADBDC', display: 'flex', justifyContent: 'space-evenly', width: '900px', height: '300px', padding: '20px',
      }}
    >
      <img src={img1} width="300px" alt="uploaded image" />
      <img src={img2} width="300px" alt="uploaded image" />

      <form method="POST" action="/" encType="multipart/form-data">
        <input type="file" name="imgFile" id="imgFile" onChange={e => onChange1(e)} />
        <input type="file" name="imgFile" id="imgFile" onChange={e => onChange2(e)} />

        <input type="submit" value="보내기" onClick={e => onClickHandler(e)} />
      </form>

      <img src={resImg} width="300" alt="result image" />
      <span>{resComment}</span>

    </div>
  );
};

export default StyleTransfer;

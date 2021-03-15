import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListItemPreview = () => {
  let file = '';
  let blob = '';
  
  const [img, setImg] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [resImg, setResImg] = useState('https://e7.pngegg.com/pngimages/552/1016/png-clipart-black-and-gray-robot-illustration-robotics-fractal-foreign-exchange-market-artificial-intelligence-tech-robot-material-electronics-computer-wallpaper-thumbnail.png')
  const [resFromAxios, setResFromAxios] = useState();
  const [base_64, setBase_64] = useState();
  const [resComment, setResComment] = useState();

  const handleResult = (res) => {
    if (res === 'dog') {
      setResImg('https://www.rd.com/wp-content/uploads/2019/01/shutterstock_690109897.jpg');
      setResComment('정답은 강아지🐶 입니다.');
    }
    else if (res === 'cat') {
      setResImg('https://www.albugle.com/wp-content/uploads/2019/02/cat.jpg');
      setResComment('정답은 고양이 🐱입니다.');
    }
    else {
      setResImg('https://cdn.mos.cms.futurecdn.net/m33Pou2DHPmjSvVGVX6sRH-1200-80.jpg');
      setResComment('정답은 다람쥐 🐹입니다.');
    }
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    const data = { imageFile: base_64 };
    axios.post(
      'http://5ff4d1c3c5c6.ngrok.io/post',
      data,
      { headers: {  'Content-Type': 'multipart/form-data',  },  },
    )
      .then((result) => {
        console.log('Yes! 🙆‍♀️ ', result);
        handleResult(result.data.class_name);
      })
      .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
  };

  const onChange = (e) => {
    e.preventDefault();
    file = e.target.files[0];
    blob = URL.createObjectURL(file);
    setImg(URL.createObjectURL(file));
    setResImg('https://e7.pngegg.com/pngimages/552/1016/png-clipart-black-and-gray-robot-illustration-robotics-fractal-foreign-exchange-market-artificial-intelligence-tech-robot-material-electronics-computer-wallpaper-thumbnail.png')
    // setResImg('https://culturacion.com/wp-content/uploads/2018/12/redes-neuronales-1280x720.jpg');
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // file equals blob
    fileReader.onload = function (e) {
      setBase_64(e.target.result.slice(23));
    };
  };

  return (
    <div className="preview" style={{ backgroundColor:'#DADBDC', display:'flex', justifyContent:'space-evenly', width:"900px", height:"300px", padding:"20px" }}>
      <img src={img} width="300px" alt="uploaded image" />

      <form method="POST" action="/" encType="multipart/form-data">
        <input type="file" name="imgFile" id="imgFile" onChange={e => onChange(e)} />
        <input type="submit" value="보내기" onClick={e => onClickHandler(e)} />
      </form>

      <img src={resImg} width="300" alt="result image" />
      <span>{resComment}</span>
      
    </div>
  );
};

ListItemPreview.propTypes = {
};

ListItemPreview.defaultProps = {
};

export default ListItemPreview;

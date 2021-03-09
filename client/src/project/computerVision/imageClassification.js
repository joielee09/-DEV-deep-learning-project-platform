import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListItemPreview = () => {
  let file = '';
  let blob = '';
  // let base_64 = '';
  
  const [img, setImg] = useState('https://cdn.univcoop.kr/static/theme/image/no-image.svg');
  const [resImg, setResImg] = useState('https://culturacion.com/wp-content/uploads/2018/12/redes-neuronales-1280x720.jpg')
  const [resFromAxios, setResFromAxios] = useState();
  const [base_64, setBase_64] = useState();

  const handleResult = (res) => {
    if (res === 'dog') setResImg('https://www.rd.com/wp-content/uploads/2019/01/shutterstock_690109897.jpg');
    else if (res === 'cat') setResImg('https://www.albugle.com/wp-content/uploads/2019/02/cat.jpg');
    else setResImg('https://cdn.mos.cms.futurecdn.net/m33Pou2DHPmjSvVGVX6sRH-1200-80.jpg');
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    window.open('e:', file);
    const data = { imageFile: base_64 };
    // console.log("send base64: ", base_64);

    // setTimeout(console.log('Wait...'), 12000);
    axios.post(
      'http://169a1ffed376.ngrok.io/post',
      data,
      { headers: {  'Content-Type': 'multipart/form-data',  },  },
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
    setImg(URL.createObjectURL(file));
    setResImg('https://culturacion.com/wp-content/uploads/2018/12/redes-neuronales-1280x720.jpg');
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // file equals blob
    fileReader.onload = function (e) {
      setBase_64(e.target.result.slice(23));
      // base_64 = e.target.result.slice(23);
      // console.log('base 64', e.target.result.slice(23));
    };
    // image rendering
    
  };

  return (
    <div className="preview" style={{ backgroundColor:'#DADBDC', display:'flex', justifyContent:'space-evenly', width:"900px", height:"300px", padding:"20px" }}>
      {/* <input type="file" id="imageInput" multiple onChange={e => onChange(e)} name="file" accept="image/*" /> */}
      <img src={img} width="300px" alt="uploaded image" />
      {/* <button type="submit" onClick={e => onClickHandler(e)}>전송하기</button> */}

      <form method="POST" action="/" encType="multipart/form-data">
        <input type="file" name="imgFile" id="imgFile" onChange={e => onChange(e)} />
        <input type="submit" value="보내기" onClick={e => onClickHandler(e)} />
      </form>


      <img src={resImg} width="300" alt="result image" />

      
    </div>
  );
};

ListItemPreview.propTypes = {
};

ListItemPreview.defaultProps = {
};

export default ListItemPreview;

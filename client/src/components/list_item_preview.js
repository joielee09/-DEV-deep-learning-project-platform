import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormData from 'form-data';


let file = '';
let blob = '';
let base_64 = '';

const ListItemPreview = ({ item }) => {
  const [img, setImg]=useState('https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-15bzuw4_0f357d00.jpeg?region=0%2C0%2C600%2C600');
  // const [file, setFile] = useState();
  // const [resFromAxios, setResFromAxios] = useState();
  // const [imgInfo, setImfInfo] = useState();

  const onClickHandler = (e) => {
    e.preventDefault();

    window.open('e:', file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file); // file equals blob
    // // fileReader.readAsArrayBuffer(file);
    fileReader.onload = function (e) {
      // setImg(e.target.result.slice(23,)); //blob to something
      base_64 = e.target.result.slice(23,);
      console.log("base 64", e.target.result.slice(23,));
    }

    const data = { imageFile: base_64 };

    setTimeout(console.log('Wait...'), 12000);
    axios.post(
      'http://d7a7b3cfdcdb.ngrok.io/post',
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
      }},
    )
      .then((result) => {
        console.log('Yes! 🙆‍♀️ ', result);
        setResFromAxios(result.data.class_name);
        console.log("resulr from axios: ", resFromAxios);
      })
      .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
  };

  const onChange = (e) => {
    e.preventDefault();
    // get uploaded filename
    // setFile(e.target.files[0]); 
    file = e.target.files[0];
    
    // console.log(URL.createObjectURL(imageFile));
    // setBlob(URL.createObjectURL(file)); //blob:http://localhost:5001/6871cc14-f0b4-4e75-8e81-6107a44014f4
    blob =URL.createObjectURL(file);
    // console.log("imagefile: ", blob);

    //image rendering
    setImg(URL.createObjectURL(file));
  };


  if (!item) {
    return (
      <div className="preview">
        <h3>Select an item</h3>
        <p>Description will appear here</p>
      </div>
    );
  }
  return (
    <div className="preview">
      <h2>
        {' '}
        { item.name }
        {' '}
      </h2>
      <p>{item.description}</p>
      <input type="file" id="imageInput" multiple onChange={e => onChange(e)} name="file" accept="image/*" />
      <img src={img} width="100" alt="uploaded" />
      <button type="submit" onClick={e => onClickHandler(e)}>전송하기</button>
      <Link to={`view/${item.name}`}>
        <button type="button" className="btn btn-primary">Read </button>
      </Link>

      <form method="POST" action="/" encType="multipart/form-data">
        <input type="file" name="imgFile" id="imgFile" onChange={e => onChange(e)} />
        <input type="submit" value="보내기" onClick={e => onClickHandler(e)} />
      </form>
    </div>
  );
};

ListItemPreview.propTypes = {
  item: PropTypes.object,
};

ListItemPreview.defaultProps = {
  item: null,
};

export default ListItemPreview;

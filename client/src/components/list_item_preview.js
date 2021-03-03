import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';


const ListItemPreview = ({ item }) => {
  const [prevUrl, setPrevUrl] = useState('https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-15bzuw4_0f357d00.jpeg?region=0%2C0%2C600%2C600');
  const [file, setFile] = useState();
  const [imgInfo, setImfInfo] = useState();
  const [src, setSrc] = useState();
  

  const onClickHandler = (e) => {
  console.log('submitted');

  // let data = new FormData();
  // data.append('file', file, file.fileName);
  
  // axios({
  //   method: 'POST',
  //   baseURL: 'http://52e091099e49.ngrok.io/post',
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   image: data
  // })
  //   .then((result) => {
  //     console.log('Yes! 🙆‍♀️ ', result);
  //   })
  //   .catch(error => console.log('Oppppsss 🙅‍♀️ ', error));
  };

  const onChange = (e) => {
    e.preventDefault();
    // get uploaded filename
    setFile(e.target.files[0]);
    const imageFile = e.target.files[0];
    setPrevUrl(URL.createObjectURL(imageFile));
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
      <input type="file" id="imageInput" multiple onChange={e => onChange(e)} name="file"  accept="image/*" />
      <img src={prevUrl} width="100" alt="uploaded" />
      <button type="submit" onClick={e => onClickHandler(e)}>전송하기</button>
      <Link to={`view/${item.name}`}>
        <button type="button" className="btn btn-primary">Read </button>
      </Link>

      <form method="POST" action="/" encType="multipart/form-data">
        <input type="file" name='imgFile' id="imgFile" onChange={e=>onChange(e)} />
        <input type="submit" value="보내기" onClick={e=>onClickHandler(e)} />
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

import React from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListItemPreview = ({ item }) => {
  const onClickHandler = () => {
    console.log('submitted!1');
  };

  const onChange = (e) => {
    e.preventDefault();
    // get uploaded filename
    const file = e.target.files[0];
    // axios post
    axios.post('http://13e0d206789b.ngrok.io', { file })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
      <input type="file" multiple onChange={e => onChange(e)} />
      <button type="submit" onClick={onClickHandler}>전송하기</button>
      <Link to={`view/${item.name}`}>
        <button type="button" className="btn btn-primary">Read </button>
      </Link>
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

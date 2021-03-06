import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CV, NLP, RecSys, ETC } from '../../../db.js';

const ListItemView = (params) => {
  const name = params.match.params.name;
  const [data, setData] = useState([]);

  const getData = () => {
    if(name==='CV')  setData(CV);
    else if(name==='NLP')  setData(NLP);
    else if(name==='RecSys')  setData(RecSys);
    else  setData(ETC);
  }

  useEffect(() => { getData(); }, [])

  return (
    <div className="view_item" style={{ display:"flex" }}>
      <h1>{name}</h1>
      <div className="list_item" style={{ display:"flex", flexDirection:"row", flexWrap:"wrap" }} >
      {data?
      data.map(cur=>(
        <div className="item_card" style={{ width:"300px" }} >
        <h3>{cur.title}</h3>
        <img src={cur.image} width="150px" />
        <span>{cur.description>100? cur.description.slice(0,99): cur.description}</span>
        </div>
      ))
      :<h1>There is no item... </h1>
      }
      </div>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}

/*
ListItemView.propTypes = {
  viewItem: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  item: PropTypes.object,
};

ListItemView.defaultProps = {
  item: null,
};
*/

export default ListItemView;

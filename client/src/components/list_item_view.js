import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  projects,
} from '../../../db.js';

const ListItemView = (params) => {
  console.log("list item view rendered")
  const { name } = params.match.params;
  const data = projects[name];

  return (
    <div className="view_item" style={{ display: 'flex' }}>
      <h2>{name}</h2>
      <div
        className="list_item"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '-webkit-fill-available',
        }}
      >
        {data
          ? data.map(cur => (
            <Link
              to={{
                pathname: `/view/${name}/${cur.id}`,
                state: { cur }
              }}>
              <div
                className="item_card"
                style={{
                  width: '300px',
                  marginRight: '40px',
                  marginBottom: '80px',
                }}
                key={cur.id}
              >
                <h3>{cur.title}</h3>
                <img src={cur.image} width="150px" />
                <span>{cur.description > 100 ? cur.description.slice(0, 99) : cur.description}</span>
              </div>
            </Link>
          ))
          : <h1>There is no item... </h1>
      }
      </div>
    </div>
  );
};

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

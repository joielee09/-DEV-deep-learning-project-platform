import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  projects,
} from '../../../db.js';

const ListItemView = (params) => {
  const resultList = [];
  const { name } = params.match.params;
  console.log('list item view rendered', name);
  const [data, setData] = useState();

  const getCatData = (cat_name) => {
    let axiosRes;
    const data_ = { cat_name, flag: 'getCategory' };
    axios.post(`http://localhost:5001/view/${cat_name}`,
      data_,
      { headers: { 'Content-Type': 'application/json' } })
      .then((res) => {
        const len = res.data.length;
        let tmp;
        for (let i = 0; i < res.data.length; i++) {
          if (res.data.slice(i, (i + 6)) === 'window') {
            tmp = res.data.slice(i + 28, parseInt(len - 74));
            for (let j = 0; j < tmp.length; j++) {
              let tmpCur;
              if (tmp[j] === '{') {
                for (let k = j; ; k++) {
                  if (tmp[k] === '}') {
                    // console.log("tmpCur: ", JSON.parse(tmp.slice(j, k + 1)));
                    resultList.push(JSON.parse(tmp.slice(j, k + 1)));
                    j = k + 1;
                    break;
                  }
                }
              }
            }
            break;
          }
        }
        // setResultList(tmp);
        console.log('resultList: ', resultList);
        setData(resultList);
      })
      .catch(error => console.log(error));
    return axiosRes;
  };

  useEffect(() => {
    getCatData(name);
  }, [name]);
  
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
                pathname: `/view/${name}/${cur.ID}`,
                state: { cur },
              }}
            >
              <div
                className="item_card"
                style={{
                  width: '300px',
                  marginRight: '40px',
                  marginBottom: '80px',
                }}
                key={cur.ID}
              >
                <h3>{cur.TITLE}</h3>
                <img src={cur.IMAGE} width="150px" />
                <span>{cur.DESCRIPTION.length > 100 ? cur.DESCRIPTION.slice(0, 200) : cur.DESCRIPTION}</span>
              </div>
            </Link>
          ))
          : <h1>There is no item... </h1>
      }
      </div>
    </div>
  );
};

export default ListItemView;

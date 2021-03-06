import React, { useState } from 'react';
import logo from '../../res/images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const category= [
    "CV", 
    "NLP",
    "RecSys",
    "ETC"
  ]
  const [ value, setValue ] = useState('');

  return(
  <div style={{ marginTop: 20 }} className="header">
    {/* Title */}
    <h1>Deep Learning Applications</h1>
    {/* Search Box */}
    <form className="search-form">
      <input type="text" name="search" placeholder="Search..." defaultValue={value? value:''} />
      {/* <button type="submit" className="search-button null">search</button> */}
    </form>
    {/* Main-nav */}
    <nav className="main-nav" style={{ display:"flex", flexDirection:"row", flexWrap:"wrap" }} >
      {
        category.map(cur=>(
          <div className="category" key='cur' style={{ margin:"20px" }}>
          <Link to={{
            pathname: `/view/${cur}`,
            state: {cur}
          }}>
            <button type="button" className="btn btn-primary">{cur}</button>
          </Link>
          </div>
        ))
      }
    </nav>
  </div>
  );
};

export default Header;

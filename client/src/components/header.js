import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const category = [
    'CV',
    'NLP',
    'RecSys',
    'ETC',
  ];
  const [value, setValue] = useState('');
  return (
    <div style={{ marginTop: 50 }} className="header">
      {/* Title */}
      {/* <Link to={'/'}> */}
      <h1 style={{ textDecoration: 'none' }}>Deep Learning Applications</h1>
      {/* </Link> */}

      {/* Search Box */}
      {/* <form className="search-form"> */}
      {/* <input type="text" name="search" placeholder="Search..." defaultValue={value || ''} /> */}
      {/* <button type="submit" className="search-button null">search</button> */}
      {/* </form> */}

      {/* Main-nav */}
      <nav className="main-nav" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
        category.map(cur => (
          <div className="category" key="cur" style={{ margin: '20px' }}>
            <Link to={{
              pathname: `/view/${cur}`,
              state: { cur },
            }}
            >
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

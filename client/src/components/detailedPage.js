import React from 'react';
import { Link } from 'react-router-dom';

const DetailedPage = () => {
  console.log("detailed page")
  return (
    <div className="detailed">
      <h2>Detailed Project Page</h2>
      <span>{`Project Name:`}</span>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
    </div>
  );
}

export default DetailedPage;
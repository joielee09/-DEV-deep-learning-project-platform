import React from 'react';
import { Link } from 'react-router-dom';

const DetailedPage = (params) => {
  console.log("detailed page")
  return (
    <div className="detailed">
      <h2>Detailed Project Page</h2>
      <span>{`Project Name:`}</span>
      <button
        type="button"
        onClick={()=>params.history.goBack()}
      >Back</button>
    </div>
  );
}

export default DetailedPage;
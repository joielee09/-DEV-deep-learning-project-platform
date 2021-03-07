import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../../db.js';

import ImageProject from '../project/computerVision/imageClassification';
import CatDog from '../project/computerVision/catDog';

const DetailedPage = (params) => {
  const category = params.match.params.name; // 예를 들면 'CV'
  const cat_id = params.match.params.id; // 예를 들면 '101'
  const project = projects[category].filter(cur => parseInt(cur.id) === parseInt(cat_id));

  // dynamic importing
  // let module = await import('../project/computerVision/imageClassification');
  const handleComponent = (param) => {
    if (param === 'imageClassification') return <ImageProject />;
    if (param === 'catDog') return <CatDog />;
  };

  return (
    <div className="detailed">
      {/* Project Title */}
      <h1>{`Project Name: ${project.title}`}</h1>

      {/* Project: get the component path */}
      <div className="projectContainer" width="700px">
        {() => handleComponent()}
      </div>

      {/* Summary */}

      {/* Description */}
      <h3>ABOUT THIS PROJECT</h3>
      <span>{project.description}</span>

      {/* Skillset */}
      <h3>SKILLSET</h3>
      <ul>
        <li>Basic Model: Convolutional Neural Networ</li>
        <li>Optimizer: Adam Optimizer</li>
        <li>Loss: MSE</li>
      </ul>
      <button
        type="button"
        onClick={() => params.history.goBack()}
      >Back
      </button>
    </div>
  );
};

export default DetailedPage;

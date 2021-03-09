import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';

const ListItemPreview = () => {
    return (
      <div className="preview">
        <h3>Select an item</h3>
        <p>Description will appear here</p>
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

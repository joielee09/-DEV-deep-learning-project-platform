import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListView extends Component {
  renderList() {
    const { listItems, previewItem } = this.props;
    return Object.keys(listItems).map((key) => {
      const item = listItems[key];
      return (
        <Link to={`view/${item.name}`}>
        <button type="button" className="btn btn-primary">Read </button>
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="list_items">
        <ul>
          { this.renderList() }
        </ul>
      </div>
    );
  }
}

ListView.propTypes = {
  listItems: PropTypes.object.isRequired,
  previewItem: PropTypes.func.isRequired,
};

export default ListView;

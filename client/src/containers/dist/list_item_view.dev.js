"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _list_actions = require("../actions/list_actions");

var _list_item_view = _interopRequireDefault(require("../components/list_item_view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    item: state.list
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    viewItem: function viewItem(name) {
      dispatch((0, _list_actions.viewItem)(name));
    }
  };
};
/*
 Here we are creating a Higher order component
 https://facebook.github.io/react/docs/higher-order-components.html
 */


var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_list_item_view["default"]);

exports["default"] = _default;
"use strict";

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _sagas = require("../reducers/sagas");

var _list = _interopRequireDefault(require("../reducers/list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// redux-saga
// import projectReducer from '../reducers/list';
var sagaMiddleware = (0, _reduxSaga["default"])();
var store = (0, _redux.createStore)(_list["default"], (0, _redux.applyMiddleware)(sagaMiddleware));
sagaMiddleware.run(_sagas.helloSaga);

var action = function action(type) {
  return store.dispatch({
    type: type
  });
};
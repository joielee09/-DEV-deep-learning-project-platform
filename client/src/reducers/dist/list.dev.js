"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _redux = require("redux");

var initState = {
  id: '1',
  category: 'CV',
  title: 'cat or dog222',
  author: 'jaeyoung',
  password: 'asdf',
  view_count: '47',
  like_count: '12',
  description: 'this is default value from redux!!',
  image: 'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg'
};

var Reducer = function Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ITEM_RENDER':
      // console.log("item rendered in reducer!");
      // console.log("action: ", action);
      // console.log("state: ", state);
      state = action.item; // console.log("dispatch state", state)
      // console.log("after state: ", state);

      return state;

    default:
      return state;
  }
};

var store = (0, _redux.createStore)(Reducer);
exports.store = store;
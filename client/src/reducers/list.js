import { createStore } from "redux";

const initState = {
  ID: '1',
  CATEGORY: 'CV',
  TITLE: 'cat or dog222',
  AUTHOR: 'jaeyoung',
  PASSWORD: 'asdf',
  VIEW_COUNT: '47',
  LIKE_COUNT: '12',
  DESCRIPTION: 'this is default value from redux!!',
  IMAGE:'https://images.mypetlife.co.kr/content/uploads/2019/09/04222847/dog-panting-1024x683.jpg',
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ITEM_RENDER':
      // console.log("item rendered in reducer!");
      // console.log("action: ", action);
      // console.log("state: ", state);
      state = action.item;
      // console.log("dispatch state", state)
      // console.log("after state: ", state);
      return state ;
    default:
      return state;
  }
};

export const store = createStore(Reducer)
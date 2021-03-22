import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
// import { store } from './reducers/list';
import App from './app';

/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
*/
const initialState = window.__INITIAL_STATE__; // eslint-disable-line
console.log("initial State: ", initialState)
export const store = createStore(reducers, initialState);

/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
const render = (Component) => {
  console.log("client index");
  // store.dispatch({
  // type: 'ITEM_RENDER',
  // item: initialState
  // })
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('reactbody'),
  );
};

render(App);
store.subscribe(render);
// store.connect(render);

// const mapDispatchToProps = ( dispatch ) => {
//     return ({ dispatch: dispatch });
// };

// export default connect(mapDispatchToProps)(render);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}





// const mapStateToProps = ( state ) => {
//     return ({ state : state });
// };

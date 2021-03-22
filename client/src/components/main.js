// redux-saga
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from '../reducers/sagas';
// import projectReducer from '../reducers/list';
import reducer from '../reducers/list';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(helloSaga);
const action = type => store.dispatch({ type });

const Main = () => {

  return (
    <div>
      <h1>Main component</h1>
    </div>
  )
}
// create a Saga middleware with a list of Sagas to run (so far we have only one helloSaga)
// connect the Saga middleware to the Redux store
export function* helloSaga() {
  console.log('Hello Sagas!')
}
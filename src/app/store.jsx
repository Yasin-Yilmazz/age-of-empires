import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
// import unitReducer from '../features/unitSlicer';
import unitsReducer from '../features/unitSlicer';
import unitSaga from '../features/unitSaga';

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    units: unitsReducer,
  },
  middleware: [saga],
});
saga.run(unitSaga);
export default store;

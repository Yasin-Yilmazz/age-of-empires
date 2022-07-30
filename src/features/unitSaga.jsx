import { call, put, takeEvery } from 'redux-saga/effects';
// import unitSlicer from './unitSlicer';
import { getUnitsSuccess } from './unitSlicer';

function* workGetUnitsFetch() {
  /* eslint implicit-arrow-linebreak: ["error", "beside"] */
  const units = yield call(() => fetch('http://localhost:3000/db/age-of-empires-units.json'));
  const formattedUnits = yield units.json();
  yield put(getUnitsSuccess(formattedUnits));
}

function* unitSaga() {
  yield takeEvery('units/getUnitsFetch', workGetUnitsFetch);
}

export default unitSaga;

//   const getData = () => {
//     fetch('http://localhost:3000/db/age-of-empires-units.json')
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((myJson) => {
//         console.log(myJson.units);
//       });
//   };

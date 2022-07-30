import { call, put, takeEvery } from 'redux-saga/effects';
import { getUnitsSuccess } from './unitSlicer';

function* workGetUnitsFetch() {
  const units = yield call(() =>
    fetch('https://age-of-empires-3326.netlify.app/db/age-of-empires-units.json'));
  const formattedUnits = yield units.json();
  yield put(getUnitsSuccess(formattedUnits));
}

function* unitSaga() {
  yield takeEvery('units/getUnitsFetch', workGetUnitsFetch);
}

export default unitSaga;

import { all } from 'redux-saga/effects';
import { fetchVacantionsWatcher } from './slices/vacantionsSlice/saga';

export function* rootWatcher() {
  yield all([fetchVacantionsWatcher()]);
}

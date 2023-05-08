import { all } from 'redux-saga/effects';
import { fetchVacantionsWatcher } from '../slices/jobsSlice/jobs-saga';
import { fetchJobWatcher } from '../slices/jobSlice/job-saga';
import { filterWatcher } from '../slices/filterSlice/filter-saga';
import { userWathcer } from '../slices/userSlice/user-saga';

export function* rootWatcher() {
  yield all([fetchVacantionsWatcher(), fetchJobWatcher(), filterWatcher(), userWathcer()]);
}

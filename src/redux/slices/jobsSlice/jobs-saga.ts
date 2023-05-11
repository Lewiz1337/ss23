import { call, put, takeLatest } from 'redux-saga/effects';
import { setJobs, setStatus, setTotal } from './jobs';
import { FETCH_JOBS } from '../../saga/constants';
import { API } from '../../api';

function* fetchVacantionsWorker(): Generator<any, any, any> {
  try {
    yield put(setStatus('loading'));
    let data = yield call(API.fetchJobs);
    yield put(setJobs(data?.objects));
    yield put(setTotal(data.total));
    yield put(setStatus('success'));
  } catch (error) {
    console.error(error);
    yield put(setStatus('error'));
  }
}

export function* fetchVacantionsWatcher() {
  yield takeLatest(FETCH_JOBS, fetchVacantionsWorker);
}

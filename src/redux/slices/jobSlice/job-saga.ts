import { call, takeEvery, put } from 'redux-saga/effects';
import { setJob, setStatus } from './job';
import { FETCH_JOB } from '../../saga/constants';
import { API } from '../../api';

function* fetchJobWorker(action: { type: string; payload: number }): Generator<any, any, any> {
  try {
    yield put(setStatus('loading'));
    let { data } = yield call(API.fetchJobById, action.payload);
    yield put(setJob(data));
    yield put(setStatus('success'));
  } catch (error) {
    console.error(error);
    yield put(setStatus('error'));
  }
}

export function* fetchJobWatcher() {
  yield takeEvery(FETCH_JOB, fetchJobWorker);
}

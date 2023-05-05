import { call, put, takeEvery } from 'redux-saga/effects';
import { setFields, setStatus } from './filter';
import { FETCH_FIELDS } from '../../saga/constants';
import { API } from '../../api';

function* filterWorker(): Generator<any, any, any> {
  try {
    yield put(setStatus('loading'));
    const { data } = yield call(API.fetchFields);
    yield put(setFields(data));
    yield put(setStatus('success'));
  } catch (error) {
    console.error(error);
    yield put(setStatus('error'));
  }
}

export function* filterWatcher() {
  yield takeEvery(FETCH_FIELDS, filterWorker);
}

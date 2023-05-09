import { call, takeLeading, put } from 'redux-saga/effects';
import { FETCH_AUTH } from '../../saga/constants';
import { API } from '../../api';
import { setApiAppId, setStatus } from './user';

function* userWorker() {
  try {
    yield put(setStatus('loading'));
    const { access_token } = yield call(API.fetchAuth);
    yield put(setApiAppId(access_token));
    yield put(setStatus('success'));
  } catch (error) {
    console.error(error);
    yield put(setStatus('error'));
  }
}
export function* userWathcer() {
  yield takeLeading(FETCH_AUTH, userWorker);
}

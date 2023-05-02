import axios, { AxiosResponse } from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { FETCH_JOBS, setJobs } from './jobs';

// const instance = axios.create({
//   headers: {
//     access_token:
//       'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
//   },
// });
const login = 'sergei.stralenia@gmail.com';
const password = 'paralect123';
const client_id = 2356;
const client_secret =
  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
const hr = 0;

// const fetchVacantions = axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/')
const instance = axios.create({
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id':
      'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  },
});
// const url = `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${client_id}&client_secret=${client_secret}`;
// const url = `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/`;
const url = 'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/';

const fetchVacantions = instance.get<Result>(url, {
  params: {
    login,
    password,
    client_id,
    client_secret,
    hr,
  },
});

// 'https://api.superjob.ru/2.0/vacancies/'

type Result = {
  data: any;
};

function* fetchVacantionsWorker(): Generator<any, any, any> {
  try {
    let { data } = yield call(() => fetchVacantions);
    yield put(setJobs(data?.objects));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchVacantionsWatcher() {
  yield takeEvery(FETCH_JOBS, fetchVacantionsWorker);
}

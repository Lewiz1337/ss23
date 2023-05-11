import axios from 'axios';
import { store } from '../store';
import { getUTCTime } from '../../functions/getUTCTime';

enum enumApi {
  xSecretKey = 'GEU4nvd3rej*jeh.eqp',
  login = 'sergei.stralenia@gmail.com',
  password = 'paralect123',
  client_id = 2356,
  client_secret = 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  hr = 0,
}

enum URL {
  host = 'https://startup-summer-2023-proxy.onrender.com/2.0/',
  vacancies = 'vacancies/',
  authUrl = 'oauth2/password/',
  fields = 'catalogues/',
}

let instance = axios.create({
  headers: {
    'x-secret-key': enumApi.xSecretKey,
    'X-Api-App-Id': enumApi.client_secret,
  },
});

type FetchAuthType = {
  access_token: string;
  expires_in: number;
};

function setAccessTokenToHeader(access_token: string) {
  instance = axios.create({
    headers: {
      'x-secret-key': enumApi.xSecretKey,
      'X-Api-App-Id': enumApi.client_secret,
      access_token: access_token,
    },
  });
}

const fetchAuth = async () => {
  const tokenJSON = localStorage.getItem('jobored_access_token');

  if (tokenJSON) {
    const token = JSON.parse(tokenJSON);
    if (token.access_token && token.expired > getUTCTime()) {
      setAccessTokenToHeader(token.access_token);
      return { access_token: token.access_token };
    }
  }

  const { login, password, client_id, client_secret, hr } = enumApi;
  let { data } = await instance.get<FetchAuthType>(URL.host + URL.authUrl, {
    params: {
      login,
      password,
      client_id,
      client_secret,
      hr,
    },
  });

  localStorage.setItem(
    'jobored_access_token',
    JSON.stringify({ access_token: data.access_token, expired: getUTCTime(data.expires_in) }),
  );

  setAccessTokenToHeader(data.access_token);

  return data;
};

type FetchJobsResult = {
  data: { objects: JobType[]; total: number };
  [x: string]: any;
};

const fetchJobs = async () => {
  const { filters, search, page } = store.getState().filter;

  let { data } = await instance.get<FetchJobsResult>(URL.host + URL.vacancies, {
    params: {
      published: '1',
      keyword: search,
      payment_from: String(filters.paymentFrom),
      payment_to: String(filters.paymentTo),
      catalogues: String(filters.field),
      page,
      count: 4,
    },
  });

  return data;
};
type FetchJobResult = {
  data: JobType;
  [x: string]: any;
};

const fetchJobById = async (id: number) => {
  if (!id) console.error('Missing parameter "id"');
  return await instance.get<FetchJobResult>(URL.host + URL.vacancies + `${id}/`);
};

type FetchFieldsResult = {
  data: any;
  [x: string]: any;
};

const fetchFields = async () => {
  return await instance.get<FetchFieldsResult>(URL.host + URL.fields);
};

export const API = {
  fetchJobs,
  fetchJobById,
  fetchFields,
  fetchAuth,
};

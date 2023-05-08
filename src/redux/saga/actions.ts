import { FETCH_AUTH, FETCH_FIELDS, FETCH_JOB, FETCH_JOBS } from './constants';

export const fetchJobById = (id: number) => ({ type: FETCH_JOB, payload: id });
export const fetchJobs = () => ({ type: FETCH_JOBS });
export const fetchFields = () => ({ type: FETCH_FIELDS });
export const fetchAuth = () => ({ type: FETCH_AUTH });

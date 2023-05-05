import { RootState } from './store';

export const jobsState = (state: RootState) => state.jobs;
export const jobState = (state: RootState) => state.job;
export const filterState = (state: RootState) => state.filter;

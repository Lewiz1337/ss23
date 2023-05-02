import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
};

export const FETCH_JOBS = 'FETCH_VACANTIONS';

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});
export default jobsSlice.reducer;
export const { setJobs } = jobsSlice.actions;

export const fetchJobs = () => ({ type: FETCH_JOBS });

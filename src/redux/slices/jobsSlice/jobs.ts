import { createSlice } from '@reduxjs/toolkit';

type JobsSliceType = {
  jobs: JobType[];
  favoriteJobs: JobType[];
  status: StatusType;
  filteredStatus: StatusType;
};

const initialState: JobsSliceType = {
  jobs: [],
  favoriteJobs: [],
  status: null,
  filteredStatus: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: ActionType<JobType[]>) => {
      state.jobs = action.payload;
    },
    setStatus: (state, action: ActionType<StatusType>) => {
      state.status = action.payload;
    },
    setFavoriteJob: (state, action: ActionType<JobType[]>) => {
      state.favoriteJobs = action.payload;
    },
    setFilteredStatus: (state, action: ActionType<StatusType>) => {
      state.filteredStatus = action.payload;
    },
  },
});
export default jobsSlice.reducer;
export const { setJobs, setStatus, setFavoriteJob, setFilteredStatus } = jobsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

type JobsSliceType = {
  jobs: JobType[];
  total: number;
  favoriteJobs: JobType[];
  status: StatusType;
  filteredStatus: StatusType;
};

const initialState: JobsSliceType = {
  jobs: [],
  favoriteJobs: [],
  total: 0,
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
    setTotal: (state, action: ActionType<number>) => {
      if (action.payload > 500) {
        state.total = 500;
      } else {
        state.total = action.payload;
      }
    },
  },
});
export default jobsSlice.reducer;
export const { setJobs, setStatus, setFavoriteJob, setFilteredStatus, setTotal } =
  jobsSlice.actions;

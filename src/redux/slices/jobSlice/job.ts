import { createSlice } from '@reduxjs/toolkit';

export type Item = {
  id: number;
  title: string;
  [x: string]: any;
};

export type JobSliceType = {
  job: JobType | null;
  status: StatusType;
};

const initialState: JobSliceType = {
  job: null,
  status: null,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    setJob: (state, action: ActionType<JobType>) => {
      state.job = action.payload;
    },
    setStatus: (state, action: ActionType<StatusType>) => {
      state.status = action.payload;
    },
  },
});
export default jobSlice.reducer;
export const { setJob, setStatus } = jobSlice.actions;

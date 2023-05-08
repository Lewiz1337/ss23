import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga/root';
import jobsSlice from './slices/jobsSlice/jobs';
import jobSlice from './slices/jobSlice/job';
import filterSlice from './slices/filterSlice/filter';
import userSlice from './slices/userSlice/user';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    jobs: jobsSlice,
    job: jobSlice,
    filter: filterSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

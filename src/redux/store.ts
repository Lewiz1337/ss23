import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './saga';
import jobsSlice from './slices/vacantionsSlice/jobs';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    jobs: jobsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

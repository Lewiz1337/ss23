import { createSlice } from '@reduxjs/toolkit';

type StateType = {
  isAuth: Boolean;
  ApiAppId: string;
  status: StatusType;
};

const initialState: StateType = {
  isAuth: false,
  ApiAppId: '',
  status: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuth: (state, action: ActionType<boolean>) => {
      state.isAuth = action.payload;
    },
    setApiAppId: (state, action: ActionType<string>) => {
      if (action.payload !== '') state.isAuth = true;
      state.ApiAppId = action.payload;
    },
    setStatus: (state, action: ActionType<StatusType>) => {
      state.status = action.payload;
    },
  },
});

export const { setIsAuth, setApiAppId, setStatus } = userSlice.actions;

export default userSlice.reducer;

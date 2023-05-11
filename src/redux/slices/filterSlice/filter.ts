import { createSlice } from '@reduxjs/toolkit';

export type FiltersType = {
  field: string;
  paymentFrom: string;
  paymentTo: string;
};

type PositionType = {
  title_rus: string;
  url_rus: string;
  title: string;
  title_trimmed: string;
  key: number;
  id_parent: number;
};

export type FieldType = {
  title_rus: string;
  url_rus: string;
  title: string;
  title_trimmed: string;
  key: number;
  positions: PositionType[];
};

type FilerStateType = {
  filters: FiltersType;
  search: string;
  page: string;
  status: StatusType;
  fields: FieldType[];
};

const initialState: FilerStateType = {
  filters: {
    field: '',
    paymentFrom: '',
    paymentTo: '',
  },
  page: '1',
  search: '',
  status: null,
  fields: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFields: (state, action: ActionType<FieldType[]>) => {
      state.fields = action.payload;
    },
    setStatus: (state, action: ActionType<StatusType>) => {
      state.status = action.payload;
    },
    setFilters: (state, action: ActionType<FiltersType>) => {
      state.filters = action.payload;
      state.page = '1';
    },
    setSearch: (state, action: ActionType<string>) => {
      state.search = action.payload;
      state.page = '1';
    },
    clearFilter: (state) => {
      state.filters = initialState.filters;
      state.page = '1';
    },
    setPage: (state, action: ActionType<string>) => {
      state.page = action.payload;
    },
  },
});

export const { setFilters, setSearch, clearFilter, setFields, setStatus, setPage } =
  filterSlice.actions;

export default filterSlice.reducer;

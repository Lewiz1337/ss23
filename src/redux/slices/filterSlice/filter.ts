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
  status: StatusType;
  fields: FieldType[];
};

const initialState: FilerStateType = {
  filters: {
    field: '',
    paymentFrom: '',
    paymentTo: '',
  },
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
    },
    setSearch: (state, action: ActionType<string>) => {
      state.search = action.payload;
    },
    clearFilter: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const { setFilters, setSearch, clearFilter, setFields, setStatus } = filterSlice.actions;

export default filterSlice.reducer;

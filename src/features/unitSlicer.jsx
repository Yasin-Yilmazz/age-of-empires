import { createSlice } from '@reduxjs/toolkit/';

const unitsSlice = createSlice({
  name: 'units',
  initialState: {
    units: [],
    isLoading: false,
  },
  reducers: {
    getUnitsFetch: (state) => {
      state.isLoading = true;
    },
    getUnitsSuccess: (state, action) => {
      state.units = action.payload;
      state.isLoading = false;
    },

  },
});

export const { getUnitsFetch, getUnitsSuccess } = unitsSlice.actions;

export default unitsSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  selectedLocationId: number | null;
}

const initialState: LocationState = {
  selectedLocationId: null
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectedLocation: (state, action: PayloadAction<number>) => {
      state.selectedLocationId = action.payload;
    },
    clearSelectedLocation: (state) => {
      state.selectedLocationId = null;
    }
  }
});

export const { setSelectedLocation, clearSelectedLocation } = locationSlice.actions;
export const locationReducer = locationSlice.reducer; 
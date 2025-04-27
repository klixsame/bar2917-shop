import { ILocation } from '@/app/services/location.service';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Location = ILocation;

interface LocationState {
  currentLocation: Location | null;
  locations: Location[];
  selectedLocationId: number | null;
}

const initialState: LocationState = {
  currentLocation: null,
  locations: [],
  selectedLocationId: null
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCurrentLocation: (state, action: PayloadAction<Location | null>) => {
      state.currentLocation = action.payload;
      if (action.payload) {
        state.selectedLocationId = action.payload.id;
        if (typeof window !== 'undefined') {
          localStorage.setItem('selectedLocation', action.payload.id.toString());
        }
      }
    },
    setLocations: (state, action: PayloadAction<Location[]>) => {
      state.locations = action.payload;
      
      // Если нет выбранной локации, устанавливаем дефолтную или первую активную
      if (!state.selectedLocationId) {
        const defaultLocation = action.payload.find(loc => loc.isDefault && loc.isActive);
        const activeLocation = action.payload.find(loc => loc.isActive);
        const locationToSet = defaultLocation || activeLocation;
        
        if (locationToSet) {
          state.selectedLocationId = locationToSet.id;
          state.currentLocation = locationToSet;
          if (typeof window !== 'undefined') {
            localStorage.setItem('selectedLocation', locationToSet.id.toString());
          }
        }
      }
    },
    setSelectedLocation: (state, action: PayloadAction<number>) => {
      state.selectedLocationId = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('selectedLocation', action.payload.toString());
      }
      // Обновляем currentLocation
      const location = state.locations.find(loc => loc.id === action.payload);
      if (location) {
        state.currentLocation = location;
      }
    },
    clearSelectedLocation: (state) => {
      state.selectedLocationId = null;
    }
  }
});

export const { setCurrentLocation, setLocations, setSelectedLocation, clearSelectedLocation } = locationSlice.actions;
export default locationSlice.reducer; 
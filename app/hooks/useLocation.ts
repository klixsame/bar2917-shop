import { LocationService } from '@/app/services/location.service';
import { setSelectedLocation } from '@/app/store/location/location.slice';
import { RootState } from '@/app/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLocation = () => {
  const dispatch = useDispatch();
  const selectedLocationId = useSelector((state: RootState) => state.location.selectedLocationId);

  useEffect(() => {
    const initializeLocation = async () => {
      if (!selectedLocationId) {
        try {
          const locationId = await LocationService.getLocationId();
          dispatch(setSelectedLocation(locationId));
        } catch (error) {
          console.error('Failed to initialize location:', error);
        }
      }
    };

    initializeLocation();
  }, [dispatch, selectedLocationId]);

  const changeLocation = (locationId: number) => {
    dispatch(setSelectedLocation(locationId));
  };

  return {
    selectedLocationId,
    changeLocation
  };
}; 
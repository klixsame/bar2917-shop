'use client'

import { LocationService } from '@/app/services/location.service';
import { setLocations } from '@/app/store/location/location.slice';
import { TypeRootState } from '@/app/store/store';
import MainLayout from '@/components/layouts/MainLayout';
import Hero from '@/components/modules/MainPage/Hero/Hero';
import CatalogMain from '@/components/ui/catalog/CatalogMain';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {
  const dispatch = useDispatch();
  const { locations, selectedLocationId } = useSelector((state: TypeRootState) => state.location);

  // Загружаем локации
  const { data: locationsData} = useQuery({
    queryKey: ['get locations'],
    queryFn: () => LocationService.getAll(),
    staleTime: 1000 * 60 * 5, // 5 минут
  });
  
  // Сохраняем локации в store
  useEffect(() => {
    if (locationsData) {
      console.log('Received locations:', locationsData);
      dispatch(setLocations(locationsData));
    }
  }, [locationsData, dispatch]);

  // Загружаем продукты
  const { data: productsData, isLoading, error } = useQuery({
    queryKey: ['main-products', selectedLocationId],
    queryFn: async () => {
      console.log('Fetching products with state:', { locations: locations.length, selectedLocationId });
      const result = await LocationService.getLocationWithProducts();
      console.log('Products result:', result);
      return result;
    },
    enabled: !!locations.length,
  });

  console.log('Render state:', {
    hasLocations: !!locations.length,
    selectedLocationId,
    productsCount: productsData?.products?.length,
    isLoading,
    error
  });

  return (
    <MainLayout>
      <Hero />
      <CatalogMain 
        title="Популярное" 
        products={productsData?.products || []}
      />
    </MainLayout>
  );
};

export default MainPage;

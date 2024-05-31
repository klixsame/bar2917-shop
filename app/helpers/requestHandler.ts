// src/utils/requestHandler.ts
import axios, { AxiosResponse } from 'axios';

export const handleRequest = async <T>(request: Promise<AxiosResponse<T>>): Promise<T | void> => {
  try {
    const response = await request;
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Обработка ошибок Axios
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      // Обработка других ошибок
      console.error('Unexpected error:', error);
    }
  }
};

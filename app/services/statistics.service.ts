import { instance } from "@/app/api/api.interceptor";
import { handleRequest } from "../helpers/requestHandler";


const STATISTICS = 'statistics';

export type TypeStatisticsResponse = {
  name: string
  value: number
}[]


export const StatisticsService = {
  async getMain() {
    return handleRequest<TypeStatisticsResponse>(instance({
      url: `${STATISTICS}/main`,
      method: 'GET'
    }));
  },

};


import { instance } from "@/app/api/api.interceptor";
import { handleRequest } from "../helpers/requestHandler";
import { IFeedback } from "../types/feedback.interface";


const FEEDBACKS = 'feedbacks'

type TypeData = {
  text: string
}

export const FeedbackService = {
  async getAllFeedbacks() {
    return handleRequest<IFeedback[]>(instance({
      url: FEEDBACKS,
      method: 'GET'
    }));
  },

  async leave(productId: string | number, data: TypeData) {
    return handleRequest<IFeedback[]>(instance({
      url: `${FEEDBACKS}/leave/${productId}`,
      method: 'POST',
      data
    }));
  }
};


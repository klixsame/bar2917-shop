import { instance } from "@/app/api/api.interceptor";
import { IFeedback } from "../types/feedback.interface";


const FEEDBACKS = 'feedbacks'

type TypeData = {
  text: string
}

export const FeedbackService = {
  async getAllFeedbacks() {
    return instance<IFeedback[]>({
      url: FEEDBACKS,
      method: 'GET'
    })
  },

  async leave(productId: string | number, data: TypeData) {
    return instance<IFeedback[]>({
      url: `${FEEDBACKS}/leave/${productId}`,
      method: 'POST',
      data
    })
  }
};


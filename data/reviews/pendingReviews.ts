export type PendingReview = {
  id: string;
  reviewType: "general" | "service";
  serviceTitle?: string;
  client: string;
  rating: number;
  review: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
};

export const pendingReviews: PendingReview[] = [];
import ReviewModerationActions from "@/components/reviews/ReviewModerationActions";
import ReviewAdminLogout from "@/components/reviews/ReviewAdminLogout";
import { sql } from "@/lib/reviewsDb";

export const dynamic = "force-dynamic";

type ReviewRow = {
  id: string;
  review_type: "general" | "service";
  service_title: string;
  client: string;
  rating: number | string;
  review: string;
  status: "pending" | "approved" | "rejected";
  featured: boolean;
  featured_video_id: string | null;
  show_in_general: boolean;
  submitted_at: string | Date;
  approved_at: string | Date | null;
};

type SubmittedReview = {
  id: string;
  reviewType: "general" | "service";
  serviceTitle: string;
  client: string;
  rating: number;
  review: string;
  status: "pending" | "approved" | "rejected";
  featured: boolean;
  featuredVideoId: string | null;
  showInGeneralReviews: boolean;
  submittedAt: string | Date;
  approvedAt: string | Date | null;
};

async function getReviews(): Promise<{
  pendingReviews: SubmittedReview[];
  approvedReviews: SubmittedReview[];
}> {
  const rows = (await sql`
    SELECT
      id,
      review_type,
      service_title,
      client,
      rating,
      review,
      status,
      featured,
      featured_video_id,
      show_in_general,
      submitted_at,
      approved_at
    FROM reviews
    WHERE status IN ('pending', 'approved')
    ORDER BY submitted_at DESC
  `) as ReviewRow[];

  const reviews = rows.map((row) => ({
    id: row.id,
    reviewType: row.review_type,
    serviceTitle: row.service_title,
    client: row.client,
    rating: Number(row.rating),
    review: row.review,
    status: row.status,
    featured: row.featured,
    featuredVideoId: row.featured_video_id,
    showInGeneralReviews: row.show_in_general,
    submittedAt: row.submitted_at,
    approvedAt: row.approved_at,
  }));

  return {
    pendingReviews: reviews.filter((review) => review.status === "pending"),
    approvedReviews: reviews.filter((review) => review.status === "approved"),
  };
}

export default async function ReviewAdminPage() {
  const { pendingReviews, approvedReviews } = await getReviews();

  return (
    <main className="min-h-screen bg-black px-6 py-32 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#69ff2f]">
          AALCS Admin
        </p>

        <h1 className="mt-4 text-4xl font-black md:text-6xl">
          Review Approval Dashboard
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-white/70">
          Pending customer reviews appear here for approval before being shown
          publicly on the website.
        </p>

        <div className="mt-6 rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-yellow-200">
          ⚠️ Admin-only area.
        </div>

        <div className="mt-6">
          <ReviewAdminLogout />
        </div>

        <div className="mt-10 grid gap-5">
          {pendingReviews.length > 0 ? (
            pendingReviews.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
              >
                <div className="text-yellow-400">
                  {"★".repeat(review.rating)}
                </div>

                <p className="mt-4 text-white/90">{review.review}</p>

                <div className="mt-5 border-t border-white/10 pt-5 text-sm text-white/60">
                  <p>
                    <span className="font-bold text-[#69ff2f]">Client:</span>{" "}
                    {review.client}
                  </p>

                  <p>
                    <span className="font-bold text-[#69ff2f]">Type:</span>{" "}
                    {review.reviewType}
                  </p>

                  {review.serviceTitle && (
                    <p>
                      <span className="font-bold text-[#69ff2f]">Service:</span>{" "}
                      {review.serviceTitle}
                    </p>
                  )}

                  <p>
                    <span className="font-bold text-[#69ff2f]">Submitted:</span>{" "}
                    {new Date(review.submittedAt).toLocaleString()}
                  </p>
                </div>

                <ReviewModerationActions reviewId={review.id} />
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white/70">
              No pending reviews.
            </div>
          )}

          <section className="mt-16">
            <h2 className="text-3xl font-black">Approved Reviews</h2>

            <div className="mt-6 grid gap-5">
              {approvedReviews.length > 0 ? (
                approvedReviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur"
                  >
                    <div className="text-yellow-400">
                      {"★".repeat(review.rating)}
                    </div>

                    <p className="mt-4 text-white/90">{review.review}</p>

                    <div className="mt-5 border-t border-white/10 pt-5 text-sm text-white/60">
                      <p>
                        <span className="font-bold text-[#69ff2f]">Client:</span>{" "}
                        {review.client}
                      </p>

                      <p>
                        <span className="font-bold text-[#69ff2f]">Type:</span>{" "}
                        {review.reviewType}
                      </p>

                      {review.serviceTitle && (
                        <p>
                          <span className="font-bold text-[#69ff2f]">
                            Service:
                          </span>{" "}
                          {review.serviceTitle}
                        </p>
                      )}

                      <p>
                        <span className="font-bold text-[#69ff2f]">
                          Featured:
                        </span>{" "}
                        {review.featured ? "Yes" : "No"}
                      </p>

                      {review.reviewType === "service" && (
                        <p>
                          <span className="font-bold text-[#69ff2f]">
                            Shown In General Reviews:
                          </span>{" "}
                          {review.showInGeneralReviews ? "Yes" : "No"}
                        </p>
                      )}
                    </div>

                    <ReviewModerationActions
                      reviewId={review.id}
                      showFeatureButton={true}
                      isFeatured={review.featured}
                      featuredVideoId={review.featuredVideoId}
                      reviewType={review.reviewType}
                      showInGeneralReviews={review.showInGeneralReviews}
                    />
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white/70">
                  No approved reviews.
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
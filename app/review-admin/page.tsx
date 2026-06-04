
import { promises as fs } from "fs";
import path from "path";
import ReviewModerationActions from "@/components/reviews/ReviewModerationActions";
import ReviewAdminLogout from "@/components/reviews/ReviewAdminLogout";

type SubmittedReview = {
  id: string;
  reviewType: "general" | "service";
  serviceTitle?: string;
  client: string;
  rating: number;
  review: string;
  status: "pending" | "approved" | "rejected";
  featured?: boolean;
  featuredVideoId?: string | null;
  submittedAt: string;
  approvedAt?: string;
};

async function getReviews(): Promise<{
  submittedReviews: SubmittedReview[];
  approvedReviews: SubmittedReview[];
}> {
  const submittedPath = path.join(
    process.cwd(),
    "data",
    "reviews",
    "submittedReviews.json"
  );

  const approvedPath = path.join(
    process.cwd(),
    "data",
    "reviews",
    "approvedReviews.json"
  );

  const submittedData = await fs.readFile(submittedPath, "utf8");
  const approvedData = await fs.readFile(approvedPath, "utf8");

  return {
    submittedReviews: JSON.parse(submittedData) as SubmittedReview[],
    approvedReviews: JSON.parse(approvedData) as SubmittedReview[],
  };
}

export default async function ReviewAdminPage() {
  const { submittedReviews, approvedReviews } = await getReviews();

  const pendingReviews = submittedReviews.filter(
    (review) => review.status === "pending"
  );

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
        ⚠️ Admin-only area. This page should be protected before the website is deployed publicly.
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
                      <span className="font-bold text-[#69ff2f]">
                        Service:
                      </span>{" "}
                      {review.serviceTitle}
                    </p>
                  )}

                  <p>
                    <span className="font-bold text-[#69ff2f]">
                      Submitted:
                    </span>{" "}
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
            <h2 className="text-3xl font-black">
              Approved Reviews
            </h2>

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

                    <p className="mt-4 text-white/90">
                      {review.review}
                    </p>

                    <div className="mt-5 border-t border-white/10 pt-5 text-sm text-white/60">
                      <p>
                        <span className="font-bold text-[#69ff2f]">
                          Client:
                        </span>{" "}
                        {review.client}
                      </p>

                      <p>
                        <span className="font-bold text-[#69ff2f]">
                          Type:
                        </span>{" "}
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
                    </div>

                    <ReviewModerationActions
                      reviewId={review.id}
                      showFeatureButton={true}
                      isFeatured={review.featured}
                      featuredVideoId={review.featuredVideoId}
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
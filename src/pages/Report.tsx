// React is used in JSX transformations
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import {
  ArrowLeftIcon,
  ShareIcon,
  DownloadIcon,
  RefreshCwIcon,
  CheckIcon,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { SummarySection } from "../components/ReportSections/SummarySection";
import { MbtiSection } from "../components/ReportSections/MbtiSection";
import { KeywordsSection } from "../components/ReportSections/KeywordsSection";
import { QuotesSection } from "../components/ReportSections/QuotesSection";
import { ContentRatioSection } from "../components/ReportSections/ContentRatioSection";
import { useBlogAnalysis } from "../api/hooks";

export function Report() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const blogUrl = searchParams.get("blog-url");

  // Use React Query to fetch data
  const { data, isLoading, isError, error, refetch } = useBlogAnalysis(blogUrl);

  // Handle back to home
  const handleBackToHome = () => {
    navigate("/");
  };

  // Handle errors and loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
        <div className="text-center p-8">
          <div className="animate-spin mb-4 h-12 w-12 text-indigo-600 mx-auto">
            <RefreshCwIcon size={48} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            블로그 분석 중...
          </h2>
          <p className="text-gray-600">약 1분 정도 소요될 수 있습니다</p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <div className="text-red-500 mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            분석 중 오류가 발생했습니다
          </h2>
          <p className="text-gray-600 mb-6">
            {error instanceof Error ? error.message : ""}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => refetch()}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              다시 시도
            </button>
            <Link
              to="/"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Render the report when data is available
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />
      <main className="min-h-screen w-full pb-20">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-gray-700 hover:text-indigo-600 transition"
            >
              <ArrowLeftIcon size={18} className="mr-1" />
              <span>다시 분석하기</span>
            </button>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  // Get the current URL
                  const currentUrl = window.location.href;

                  // Copy to clipboard
                  navigator.clipboard
                    .writeText(currentUrl)
                    .then(() => {
                      // Show success toast
                      toast.success(
                        <div className="flex items-center space-x-2">
                          <CheckIcon size={18} />
                          <span>URL이 복사되었습니다!</span>
                        </div>,
                        {
                          duration: 3000,
                          style: {
                            borderRadius: "10px",
                            background: "#333",
                            color: "#fff",
                          },
                          position: "bottom-center",
                        }
                      );
                    })
                    .catch(() => {
                      // Show error toast if copying fails
                      toast.error("URL 복사 중 오류가 발생했습니다.");
                    });
                }}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
                aria-label="공유하기"
                title="URL 복사하기"
              >
                <ShareIcon size={18} />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition">
                <DownloadIcon size={18} />
              </button>
            </div>
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-4 pt-8">
          <div className="mb-12 text-center">
            <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
              블로그 분석 완료 ✓
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              당신의 블로그 성향 분석
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI가 분석한 당신의 블로그 글쓰기 스타일과 성향을 확인해보세요
            </p>
            {blogUrl && (
              <div className="mt-2 text-sm text-gray-500">
                <span>분석 대상: </span>
                <a
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {blogUrl}
                </a>
              </div>
            )}
          </div>
          <div className="space-y-12">
            <SummarySection
              summary={data.summary}
              explanation={data.summary_explanation}
            />
            <MbtiSection mbti={data.mbti} explanation={data.mbti_explanation} />
            <KeywordsSection keywords={data.keywords} />
            <QuotesSection quotes={data.quotes} />
            <ContentRatioSection ratios={data.content_ratio} />
          </div>

          {/* Share button at the bottom */}
          <div className="mt-16 mb-12 flex justify-center">
            <button
              onClick={() => {
                // Get the current URL
                const currentUrl = window.location.href;

                // Copy to clipboard
                navigator.clipboard
                  .writeText(currentUrl)
                  .then(() => {
                    // Show success toast
                    toast.success(
                      <div className="flex items-center space-x-2">
                        <CheckIcon size={18} />
                        <span>URL이 복사되었습니다!</span>
                      </div>,
                      {
                        duration: 3000,
                        style: {
                          borderRadius: "10px",
                          background: "#333",
                          color: "#fff",
                        },
                        position: "bottom-center",
                      }
                    );
                  })
                  .catch(() => {
                    // Show error toast if copying fails
                    toast.error("URL 복사 중 오류가 발생했습니다.");
                  });
              }}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105"
              aria-label="공유하기"
              title="URL 복사하기"
            >
              <ShareIcon size={20} />
              <span className="font-medium">분석 결과 공유하기</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

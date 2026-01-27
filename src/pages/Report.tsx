// React is used in JSX transformations
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { ArrowLeftIcon, RefreshCwIcon, AlertCircle } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { ShareIconButton } from "../components/ShareIconButton";
import { ShareFullButton } from "../components/ShareFullButton";
import { SummarySection } from "../components/ReportSections/SummarySection";
import { MbtiSection } from "../components/ReportSections/MbtiSection";
import { KeywordsSection } from "../components/ReportSections/KeywordsSection";
import { QuotesSection } from "../components/ReportSections/QuotesSection";
import { ContentRatioSection } from "../components/ReportSections/ContentRatioSection";
import { useBlogAnalysis } from "../api/hooks";
import { AxiosError } from "axios";

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
      <div className="min-h-screen bg-white pattern-dots-subtle flex items-center justify-center">
        <div className="text-center p-12 border-4 border-black bg-white">
          <div className="animate-spin mb-6 mx-auto w-16 h-16">
            <RefreshCwIcon size={64} className="text-black" />
          </div>
          <h2 className="text-2xl font-black text-black uppercase tracking-tight mb-2">
            ANALYZING...
          </h2>
          <p className="text-black">블로그를 분석하고 있습니다</p>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    console.log("error", error);
    return (
      <div className="min-h-screen bg-white pattern-grid-subtle flex items-center justify-center">
        <div className="text-center p-12 border-4 border-swiss-accent bg-white max-w-md">
          <div className="text-swiss-accent mb-6 mx-auto">
            <AlertCircle size={64} className="mx-auto" />
          </div>
          <h2 className="text-2xl font-black text-black uppercase tracking-tight mb-4">
            ERROR
          </h2>
          <p className="text-black mb-8">
            {error instanceof AxiosError ? error.response?.data : "분석 중 오류가 발생했습니다"}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => refetch()}
              className="swiss-btn-accent"
            >
              RETRY
            </button>
            <Link
              to="/"
              className="swiss-btn-outline"
            >
              HOME
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const {
    summary,
    summary_explanation,
    mbti,
    mbti_explanation,
    keywords,
    quotes,
    content_ratio,
  } = data.data;

  // Render the report when data is available
  return (
    <div className="min-h-screen bg-white">
      {/* Toast Container */}
      <Toaster position="top-center" reverseOrder={false} />
      <main className="min-h-screen w-full pb-20">
        <header className="bg-white border-b-4 border-black sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-black hover:text-swiss-accent transition p-2 border-2 border-black hover:border-swiss-accent"
            >
              <ArrowLeftIcon size={20} />
            </button>
            <div className="flex gap-2">
              <ShareIconButton />
            </div>
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-4 pt-12">
          <div className="mb-16 text-left">
            <span className="swiss-tag-accent mb-6 inline-block">
              ANALYSIS COMPLETE
            </span>
            <h1 className="text-display-sm md:text-display-md font-black uppercase tracking-tight mb-6">
              YOUR BLOG
              <br />
              PERSONALITY
            </h1>
            <p className="text-black text-lg max-w-2xl">
              AI가 분석한 당신의 블로그 글쓰기 스타일과 성향을 확인해보세요
            </p>
            {blogUrl && (
              <div className="mt-4 text-sm border-l-4 border-black pl-4">
                <span className="font-bold uppercase">TARGET: </span>
                <a
                  href={blogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-swiss-accent underline"
                >
                  {blogUrl}
                </a>
              </div>
            )}
          </div>
          <div className="space-y-8">
            <SummarySection
              summary={summary}
              explanation={summary_explanation}
            />
            <MbtiSection mbti={mbti} explanation={mbti_explanation} />
            <KeywordsSection keywords={keywords} />
            <QuotesSection quotes={quotes} />
            <ContentRatioSection ratios={content_ratio} />
          </div>

          {/* Share button at the bottom */}
          <div className="mt-16 mb-12 flex justify-center">
            <ShareFullButton />
          </div>
        </div>
      </main>
    </div>
  );
}

// React is used in JSX transformations
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { ArrowLeftIcon, RefreshCwIcon, AlertCircle, DownloadIcon } from "lucide-react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { ShareIconButton } from "../components/ShareIconButton";
import { ShareFullButton } from "../components/ShareFullButton";
import { StoryCard } from "../components/StoryCard";
import { CharacterSection } from "../components/ReportSections/CharacterSection";
import { MbtiSection } from "../components/ReportSections/MbtiSection";
import { RepresentativePostSection } from "../components/ReportSections/RepresentativePostSection";
import { BlogTendencySection } from "../components/ReportSections/BlogTendencySection";
import { FortuneSection } from "../components/ReportSections/FortuneSection";
import { useBlogAnalysis } from "../api/hooks";
import { useStoryDownload } from "../hooks/useStoryDownload";
import { AxiosError } from "axios";

export function Report() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const blogUrl = searchParams.get("blog-url");

  // Use React Query to fetch data
  const { data, isLoading, isError, error, refetch } = useBlogAnalysis(blogUrl);
  const { cardRef, downloadStoryImage } = useStoryDownload();

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
    character,
    representativePost,
    blogTendency,
    mbtiPrediction,
    fortune,
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
              className="flex items-center text-black hover:text-swiss-accent transition p-2 border-4 border-black hover:border-swiss-accent"
            >
              <ArrowLeftIcon size={20} />
            </button>
            <div className="flex gap-2">
              <ShareIconButton />
            </div>
          </div>
        </header>
        <div className="max-w-4xl mx-auto px-4 pt-6 md:pt-12">
          <div className="mb-8 md:mb-16 text-left">
            <h1 className="text-display-sm md:text-display-md font-black uppercase tracking-tight mb-4 md:mb-6">
              BLOG
              PERSONALITY
            </h1>

            {blogUrl && (
              <div className="mt-4 text-sm border-l-4 border-black pl-4">
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
          <div className="space-y-4 md:space-y-8">
            <CharacterSection character={character} />
            <BlogTendencySection tendency={blogTendency} />
            <MbtiSection
              mbti={mbtiPrediction.result}
              explanation={mbtiPrediction.confidence}
            />
            <RepresentativePostSection post={representativePost} />
            <FortuneSection fortune={fortune} />
          </div>

          {/* Share buttons at the bottom */}
          <div className="mt-8 mb-6 md:mt-16 md:mb-12 flex justify-center gap-4">
            <ShareFullButton />
            <button
              onClick={async () => {
                await downloadStoryImage(
                  character.animal,
                  mbtiPrediction.result
                );
                toast.success(
                  "이미지가 저장되었습니다."
                );
              }}
              className="swiss-btn-accent flex items-center space-x-3"
              aria-label="인스타 스토리 저장"
              title="인스타 스토리 이미지 저장"
            >
              <DownloadIcon size={20} />
              <span>이미지 저장</span>
            </button>
          </div>

          {/* Offscreen StoryCard for capture */}
          <div
            style={{
              position: "absolute",
              left: "-9999px",
              top: "0",
            }}
          >
            <StoryCard
              ref={cardRef}
              character={character}
              mbti={mbtiPrediction.result}
              blogTendency={blogTendency}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

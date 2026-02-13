import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PenTool, Brain, Hash, Quote, ArrowRight } from "lucide-react";
import { AnalysisForm } from "../components/AnalysisForm";
import { ArticleGrid } from "../components/ArticleGrid";
import { trackEvent } from "../analytics/amplitude";
import { useRandomArticles } from "../api/hooks";

export function Home() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  // 랜덤 3개 Article 가져오기
  const { data, isLoading, isError } = useRandomArticles(4);
  const recentArticles = data?.analyses || [];

  const handleAnalyzeRequest = (blogUrl: string) => {
    // Validate URL
    if (!blogUrl || !blogUrl.trim().includes(".")) {
      setError("올바른 URL을 입력해주세요");
      return;
    }

    trackEvent("click_analyze", { blog_url: blogUrl });
    // Use React Router to navigate to the report page with the blog URL as a query parameter
    navigate(`/report?blog-url=${encodeURIComponent(blogUrl)}`);
  };

  return (
    <div className="bg-white pattern-grid-subtle">
      <div className="w-full flex flex-col items-center px-4 py-8 md:py-12">
        <div className="max-w-3xl w-full">
          {/* 헤더 영역 */}
          <div className="text-left mb-6">
            <h1 className="text-4xl md:text-display-sm font-black text-black uppercase tracking-tight mb-3">
              BLOG PERSONALITY
            </h1>
            <p className="text-lg md:text-xl text-black font-medium">
              블로그 링크 하나로 글쓰기 스타일과 성향을 분석해 드려요
            </p>
          </div>

          {/* 기능 태그 */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="swiss-tag flex items-center gap-2">
              <PenTool size={14} />
              <span>글쓰기 스타일</span>
            </div>
            <div className="swiss-tag flex items-center gap-2">
              <Brain size={14} />
              <span>MBTI 추측</span>
            </div>
            <div className="swiss-tag flex items-center gap-2">
              <Hash size={14} />
              <span>운세</span>
            </div>
            <div className="swiss-tag-accent flex items-center gap-2">
              <Quote size={14} />
              <span>대표 작품</span>
            </div>
          </div>

          {/* 폼 컨테이너 */}
          <div className="swiss-card !p-4 md:!p-6">
            <AnalysisForm onSubmit={handleAnalyzeRequest} error={error} />
          </div>
        </div>
      </div>

      {/* 최근 분석된 블로그 섹션 */}
      <div className="w-full border-t-4 border-black bg-white py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 섹션 헤더 */}
          <div className="text-left mb-8">
            <div className="text-swiss-accent text-sm font-black tracking-widest mb-2">
              EXPLORE
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mb-2">
              블로거 둘러보기
            </h2>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <p className="text-black font-medium">로딩 중...</p>
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="text-center py-12 border-4 border-swiss-accent p-6">
              <p className="text-black font-medium">분석 데이터를 불러올 수 없습니다</p>
            </div>
          )}

          {/* Article Grid */}
          {!isLoading && !isError && (
            <ArticleGrid articles={recentArticles} source="home" />
          )}

          {/* 더 보기 버튼 */}
          <div className="flex justify-center mt-8">
            <Link
              to="/gallery"
              className="swiss-btn-accent flex items-center gap-3"
              onClick={() => {
                trackEvent("click_view_more_articles", { source: "home" });
              }}
            >
              <span>더 많은 분석 보기</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

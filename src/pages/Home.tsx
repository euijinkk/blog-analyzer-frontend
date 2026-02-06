import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PenTool, Brain, Hash, Quote } from "lucide-react";
import { AnalysisForm } from "../components/AnalysisForm";

export function Home() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleAnalyzeRequest = (blogUrl: string) => {
    // Validate URL
    if (!blogUrl || !blogUrl.trim().includes(".")) {
      setError("올바른 URL을 입력해주세요");
      return;
    }

    // Use React Router to navigate to the report page with the blog URL as a query parameter
    navigate(`/report?blog-url=${encodeURIComponent(blogUrl)}`);
  };

  return (
    <div className="bg-white pattern-grid-subtle">
      <div className="w-full flex flex-col items-center px-4 py-16">
        <div className="max-w-3xl w-full">
          {/* 헤더 영역 */}
          <div className="text-left mb-12">
            <h1 className="text-display-sm md:text-display-md font-black text-black uppercase tracking-tight mb-6">
              BLOG
              <br />
              PERSONALITY
            </h1>
            <p className="text-xl md:text-2xl text-black font-medium">
              블로그 링크 하나로 글쓰기 스타일과 성향을 분석해 드려요
            </p>
          </div>

          {/* 기능 태그 */}
          <div className="flex flex-wrap gap-3 mb-12">
            <div className="swiss-tag flex items-center gap-2">
              <PenTool size={16} />
              <span>글쓰기 스타일</span>
            </div>
            <div className="swiss-tag flex items-center gap-2">
              <Brain size={16} />
              <span>MBTI 추측</span>
            </div>
            <div className="swiss-tag flex items-center gap-2">
              <Hash size={16} />
              <span>운세</span>
            </div>
            <div className="swiss-tag-accent flex items-center gap-2">
              <Quote size={16} />
              <span>대표 작품</span>
            </div>
          </div>

          {/* 폼 컨테이너 */}
          <div className="swiss-card">
            <AnalysisForm onSubmit={handleAnalyzeRequest} error={error} />
          </div>

        </div>
      </div>
    </div>
  );
}

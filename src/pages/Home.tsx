import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnalysisForm } from "../components/AnalysisForm";
import { KakaoAd } from "../components/KakaoAd";

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
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="w-full flex flex-col items-center px-4 py-12">
        <div className="max-w-3xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
              블로그 성향 분석기
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              블로그 링크 하나로 글쓰기 스타일과 성향을 AI가 분석해 드려요 ✨
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <div className="bg-indigo-100 rounded-full px-4 py-2 text-indigo-800 font-medium">
                ✍️ 글쓰기 스타일
              </div>
              <div className="bg-pink-100 rounded-full px-4 py-2 text-pink-800 font-medium">
                🧠 MBTI 예측
              </div>
              <div className="bg-amber-100 rounded-full px-4 py-2 text-amber-800 font-medium">
                #️⃣ 키워드 추출
              </div>
              <div className="bg-emerald-100 rounded-full px-4 py-2 text-emerald-800 font-medium">
                💬 명언
              </div>
            </div>
          </div>

          <div className="h-4" />
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <AnalysisForm onSubmit={handleAnalyzeRequest} error={error} />
          </div>

          <div className="mt-16 text-center text-gray-500">
            <p className="mb-2">
              블로그 글을 분석하여 글쓰기 성향을 알려드려요
            </p>
            <p>로그인 없이 바로 이용 가능합니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ArticleGrid } from "../components/ArticleGrid";
import { trackEvent } from "../analytics/amplitude";
import { useArticles } from "../api/hooks";

export function Gallery() {
  const [sortBy] = useState<"latest" | "random">("latest");

  // API에서 데이터 가져오기
  const { data, isLoading, isError } = useArticles({ limit: 12, sort: sortBy });
  const articles = data?.analyses || [];

  // 페이지 진입 시 이벤트 트래킹
  useEffect(() => {
    trackEvent("view_gallery");
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* 헤더 */}
      <header className="bg-white border-b-4 border-black sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center text-black hover:text-swiss-accent transition p-2 border-4 border-black hover:border-swiss-accent"
          >
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-xl md:text-2xl font-black uppercase tracking-tight">
            Gallery
          </h1>
          <div className="w-12" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* 페이지 제목 */}
        <div className="text-left mb-12">
          <div className="text-swiss-accent text-sm font-black tracking-widest mb-4">
            02. GALLERY
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight mb-6">
            블로그 분석
            <br />
            갤러리
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            다양한 블로거들의 성향을 탐색하고, 나와 비슷한 블로그를 찾아보세요
          </p>
        </div>

        {/* 정렬/필터 (Phase 1에서는 생략, Phase 2에서 추가) */}
        {/* <div className="mb-8 flex gap-4">
          <button className="swiss-btn">최신순</button>
          <button className="swiss-btn-outline">인기순</button>
          <button className="swiss-btn-outline">랜덤</button>
        </div> */}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-black font-medium">갤러리를 불러오는 중...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-12 border-4 border-swiss-accent p-6">
            <p className="text-black font-medium">갤러리를 불러올 수 없습니다</p>
          </div>
        )}

        {/* Article Grid */}
        {!isLoading && !isError && (
          <ArticleGrid articles={articles} source="gallery" />
        )}

        {/* 하단 CTA */}
        <div className="mt-16 text-center border-t-4 border-black pt-12">
          <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight mb-6">
            내 블로그도 분석하고 싶다면?
          </h3>
          <Link
            to="/"
            className="swiss-btn-accent inline-flex items-center gap-3"
            onClick={() => {
              trackEvent("click_analyze_from_gallery");
            }}
          >
            <span>내 블로그 분석하기</span>
          </Link>
        </div>
      </main>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import { BlogAnalysisSummary } from "../types/article";
import { trackEvent } from "../analytics/amplitude";

interface ArticleCardProps {
  article: BlogAnalysisSummary;
  source: "home" | "gallery" | "report";
}

export function ArticleCard({ article, source }: ArticleCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    trackEvent("click_article", {
      source,
      character: article.characterName,
      mbti: article.mbti,
      article_id: article.id,
    });
    navigate(
      `/report?blog-url=${encodeURIComponent(article.blogUrl)}&from=article`
    );
  };

  return (
    <div
      onClick={handleClick}
      className="swiss-card cursor-pointer flex flex-col h-full bg-white hover:border-swiss-accent"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleClick();
        }
      }}
    >
      {/* 상단: 작가 이름 (가장 크게) */}
      <h3 className="text-2xl font-black text-black tracking-tight mb-1">
        {article.authorName}
      </h3>
      <p className="text-xs text-gray-500 underline mb-6">
        {article.blogUrlShort}
      </p>

      {/* 캐릭터 영역: 이미지 + 이름 + 한줄 카피 */}
      <div className="flex items-center gap-4 mb-2">
        <img
          src={article.characterImage}
          alt={article.characterName}
          className="w-20 h-20 object-contain flex-shrink-0"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const parent = e.currentTarget.parentElement;
            if (parent) {
              const fallback = document.createElement("div");
              fallback.className = "text-5xl w-20 h-20 flex items-center justify-center flex-shrink-0";
              fallback.textContent = article.characterEmoji;
              parent.prepend(fallback);
            }
          }}
        />
        <div>
          <div className="text-lg font-black text-black uppercase tracking-tight">
            {article.characterEmoji} {article.characterName}
          </div>
          <p className="text-sm font-medium text-gray-600 leading-snug line-clamp-2 mt-1">
            {article.oneLinerCopy}
          </p>
        </div>
      </div>

      {/* MBTI + 성향 태그 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="border-4 border-black px-3 py-1 text-xs font-black uppercase tracking-wider">
          {article.mbti}
        </span>
        <span className="border-4 border-black px-3 py-1 text-xs font-bold flex items-center gap-1">
          {article.topTendency.icon} {article.topTendency.label} {article.topTendency.score}%
        </span>
      </div>

      {/* 대표 글 */}
      <div className="border-4 border-swiss-accent bg-[#FFF5F3] p-4 mt-auto">
        <div className="text-xs font-black text-swiss-accent uppercase tracking-widest mb-2">
          대표 글
        </div>
        <p className="text-sm font-semibold text-gray-800 leading-relaxed line-clamp-2">
          {article.representativePostTitle}
        </p>
      </div>
    </div>
  );
}

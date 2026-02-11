import { useNavigate } from "react-router-dom";
import { BlogAnalysisSummary, getCharacterVisual, getTendencyIcon, shortenBlogUrl } from "../types/article";
import { trackEvent } from "../analytics/amplitude";

interface ArticleCardProps {
  article: BlogAnalysisSummary;
  source: "home" | "gallery" | "report";
}

export function ArticleCard({ article, source }: ArticleCardProps) {
  const navigate = useNavigate();

  // FE에서 결정
  const { image } = getCharacterVisual(article.characterName);
  const tendencyIcon = getTendencyIcon(article.topTendency.axisName, article.topTendency.score);
  const blogUrlShort = shortenBlogUrl(article.blogUrl);

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
        {blogUrlShort}
      </p>

      {/* 캐릭터 영역: 이미지 + 이름 + 한줄 카피 */}
      <div className="flex items-center gap-4 mb-2">
        <img
          src={image}
          alt={article.characterName}
          className="w-20 h-20 object-contain flex-shrink-0"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <div>
          <div className="text-lg font-black text-black uppercase tracking-tight">
            {article.characterName}
          </div>
          <p className="text-sm font-medium text-gray-600 leading-snug line-clamp-2 mt-1">
            {article.characterSummary}
          </p>
        </div>
      </div>

      {/* MBTI + 성향 태그 */}
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="border-4 border-black px-3 py-1 text-xs font-black uppercase tracking-wider">
          {article.mbti}
        </span>
        <span className="border-4 border-black px-3 py-1 text-xs font-bold flex items-center gap-1">
          {tendencyIcon} {article.topTendency.label} {article.topTendency.score}%
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

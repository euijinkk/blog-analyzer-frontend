import { BlogAnalysisSummary } from "../types/article";
import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  articles: BlogAnalysisSummary[];
  source: "home" | "gallery" | "report";
}

export function ArticleGrid({ articles, source }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12 border-4 border-black bg-white">
        <p className="text-xl font-black text-black uppercase tracking-tight">
          분석된 블로그가 없습니다
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} source={source} />
      ))}
    </div>
  );
}

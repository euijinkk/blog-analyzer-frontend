// React is used in JSX transformations
import { TendencyAxis } from "../../api/hooks";

interface BlogTendencySectionProps {
  tendency: {
    nightMorning: TendencyAxis;
    narrativeImpact: TendencyAxis;
    trendEssence: TendencyAxis;
    communicationUnilateral: TendencyAxis;
    completeGrowth: TendencyAxis;
  };
}

const getTendencyName = (key: string): string => {
  const names: Record<string, string> = {
    nightMorning: "밤형 vs 아침형",
    narrativeImpact: "서사형 vs 임팩트형",
    trendEssence: "트렌드형 vs 본질형",
    communicationUnilateral: "소통형 vs 일방형",
    completeGrowth: "완성형 vs 성장형",
  };
  return names[key] || key;
};

export function BlogTendencySection({
  tendency,
}: BlogTendencySectionProps) {
  return (
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">04</span>
        블로그 성향 분석
      </h2>

      <div className="space-y-8">
        {Object.entries(tendency).map(([key, axis]) => (
          <div key={key} className="pb-6 border-b-2 border-black last:border-b-0 last:pb-0">
            <div className="flex justify-between items-center mb-3">
              <span className="font-black text-lg uppercase">
                {getTendencyName(key)}
              </span>
              <span className="text-blue-600 font-black text-lg">
                {axis.label}
              </span>
            </div>

            {/* 프로그레스 바 */}
            <div className="w-full bg-gray-200 border-2 border-black rounded h-6 mb-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-black to-swiss-accent h-full transition-all"
                style={{ width: `${axis.score}%` }}
              />
            </div>

            <p className="text-black text-sm leading-relaxed">
              {axis.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

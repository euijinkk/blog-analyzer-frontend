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
    <section className="swiss-card pattern-dots-subtle">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">02</span>
        블로그 성향 분석
      </h2>

      <div className="space-y-8">
        {Object.entries(tendency).map(([key, axis]) => (
          <div key={key} className="pb-8 border-b-4 border-black last:border-b-0 last:pb-0">
            <div className="flex justify-between items-center mb-3">
              <span className="font-black text-lg uppercase">
                {getTendencyName(key)}
              </span>
              <span className="text-swiss-accent font-black text-lg">
                {axis.label}
              </span>
            </div>

            {/* 프로그레스 바 */}
            <div className="w-full bg-swiss-muted border-4 border-black rounded-none h-6 mb-4 overflow-hidden">
              <div
                className="bg-swiss-accent h-full transition-all"
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
// "blogTendency": {
//   "nightMorning": {
//     "score": 80,
//       "label": "밤형",
//         "description": "🌙 당신은 주로 밤 10시 이후 깊어지는 밤의 정적 속에서 가장 많은 영감을 얻는 올빼미형 블로거입니다. 새벽 감성이 당신의 글에 깊이를 더합니다."
//   },
//   "narrativeImpact": {
//     "score": 85,
//       "label": "서사형",
//         "description": "✍️ 당신은 이야기의 흐름을 따라가며 깊이 있는 통찰을 이끌어내는 서사형 블로거입니다. 긴 호흡의 글은 독자에게 깊은 여운을 남깁니다."
//   },
//   "trendEssence": {
//     "score": 35,
//       "label": "본질형",
//         "description": "🌱 당신은 유행을 좇기보다, 시대를 초월하는 본질적인 가치와 철학에 집중하는 블로거입니다."
//   },
//   "communicationUnilateral": {
//     "score": 30,
//       "label": "일방형",
//         "description": "👤 당신은 자신의 깊은 생각과 통찰을 차분하고 명확하게 전달하는 데 집중하는 일방형 블로거입니다."
//   },
//   "completeGrowth": {
//     "score": 70,
//       "label": "완성형",
//         "description": "🌟 당신은 이미 이룬 성취와 깊어진 지혜를 바탕으로, 확고한 관점과 통찰을 제시하는 완성형 블로거입니다."
//   }
// },
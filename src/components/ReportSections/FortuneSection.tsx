// React is used in JSX transformations
import { FortuneItem } from "../../api/hooks";

interface FortuneSectionProps {
  fortune: {
    warnings: FortuneItem[];
    directions: FortuneItem[];
  };
}

export function FortuneSection({ fortune }: FortuneSectionProps) {
  return (
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">05</span>
        2026년 블로그 운세
      </h2>

      {/* 조심할 것 */}
      <div className="mb-10">
        <h3 className="text-xl font-black mb-6 uppercase">⚠️ 조심할 것</h3>
        <div className="space-y-4">
          {fortune.warnings.map((item, index) => (
            <div
              key={index}
              className="p-6 border-2 border-yellow-500 bg-yellow-50"
            >
              <p className="text-black font-semibold mb-3">{item.content}</p>
              <p className="text-sm text-gray-700 italic">
                근거: {item.basedOn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 올해의 방향 */}
      <div>
        <h3 className="text-xl font-black mb-6 uppercase">🎯 올해의 방향</h3>
        <div className="space-y-4">
          {fortune.directions.map((item, index) => (
            <div
              key={index}
              className="p-6 border-2 border-green-500 bg-green-50"
            >
              <p className="text-black font-semibold mb-3">{item.content}</p>
              <p className="text-sm text-gray-700 italic">
                근거: {item.basedOn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

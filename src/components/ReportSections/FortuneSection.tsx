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
    <section className="swiss-card pattern-grid-subtle">
      <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">05</span>
        2026년 블로그 운세
      </h2>

      {/* 조심할 것 */}
      <div className="mb-6 md:mb-10">
        <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 uppercase">⚠️ 조심할 것</h3>
        <div className="space-y-4">
          {fortune.warnings.map((item, index) => (
            <div
              key={index}
              className="p-4 md:p-8 border-4 border-swiss-accent bg-swiss-muted"
            >
              <p className="text-black font-semibold">{item.content}</p>

            </div>
          ))}
        </div>
      </div>

      {/* 올해의 방향 */}
      <div>
        <h3 className="text-lg md:text-xl font-black mb-4 md:mb-6 uppercase">🎯 올해의 방향</h3>
        <div className="space-y-4">
          {fortune.directions.map((item, index) => (
            <div
              key={index}
              className="p-4 md:p-8 border-4 border-black bg-white"
            >
              <p className="text-black font-semibold">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

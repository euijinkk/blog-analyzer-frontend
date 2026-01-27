// React is used in JSX transformations

interface SummarySectionProps {
  summary: string;
  explanation: string;
}

export function SummarySection({ summary, explanation }: SummarySectionProps) {
  return (
    <section className="swiss-card-accent relative">
      <div className="absolute inset-0 pattern-diagonal opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
          <span className="swiss-section-number">01</span>
          WRITING STYLE
        </h2>
        <div className="mb-6">
          <div className="inline-block border-4 border-black px-8 py-4 bg-white">
            <span className="text-2xl md:text-3xl font-black text-black">
              {summary}
            </span>
          </div>
        </div>
        <p className="text-black text-lg leading-relaxed">{explanation}</p>
      </div>
    </section>
  );
}

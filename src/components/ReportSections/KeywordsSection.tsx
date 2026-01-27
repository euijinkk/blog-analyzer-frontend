// React is used in JSX transformations

interface KeywordsSectionProps {
  keywords: string[];
}

export function KeywordsSection({ keywords }: KeywordsSectionProps) {
  return (
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">03</span>
        KEYWORDS
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className={`
              ${index === 0 ? "bg-swiss-accent text-white border-swiss-accent" : "bg-white text-black border-black"}
              border-2 px-6 py-3 text-lg font-bold uppercase tracking-wide
              transition-all duration-200 hover:bg-black hover:text-white hover:border-black
            `}
          >
            {keyword}
          </div>
        ))}
      </div>
    </section>
  );
}

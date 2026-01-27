// React is used in JSX transformations

interface ContentRatioSectionProps {
  ratios: Record<string, string>;
}

interface CategoryInfo {
  name: string;
  color: string;
}

export function ContentRatioSection({ ratios }: ContentRatioSectionProps) {
  const categories: Record<string, CategoryInfo> = {
    expertise: {
      name: "EXPERTISE",
      color: "bg-black",
    },
    essay: {
      name: "ESSAY",
      color: "bg-swiss-accent",
    },
    travel: {
      name: "TRAVEL",
      color: "bg-black",
    },
    self_improvement: {
      name: "GROWTH",
      color: "bg-black",
    },
  };

  const getPercentageValue = (percentString: string): number => {
    return parseInt(percentString.replace("%", ""));
  };

  return (
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">05</span>
        CONTENT RATIO
      </h2>
      <div className="space-y-6">
        {Object.entries(ratios).map(([key, value]) => {
          const category = categories[key];
          const percentage = getPercentageValue(value);
          return (
            <div key={key} className="flex items-center">
              <div className="w-28 flex-shrink-0">
                <span className="font-bold uppercase tracking-wide text-sm">
                  {category.name}
                </span>
              </div>
              <div className="flex-grow mx-4">
                <div className="w-full bg-white border-2 border-black h-6">
                  <div
                    className={`${category.color} h-full`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
              <div className="w-16 text-right font-black text-lg">{value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

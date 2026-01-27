// React is used in JSX transformations
import { QuoteIcon, ExternalLinkIcon } from "lucide-react";

interface QuoteItem {
  quote: string;
  quote_explanation: string;
  source_link: string;
}

interface QuotesSectionProps {
  quotes: QuoteItem[];
}

export function QuotesSection({ quotes }: QuotesSectionProps) {
  return (
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">04</span>
        NOTABLE QUOTES
      </h2>
      <div className="space-y-8">
        {quotes.map((quoteItem, index) => (
          <div key={index} className="border-l-4 border-swiss-accent pl-6 py-2">
            <QuoteIcon className="text-black mb-4" size={32} />
            <p className="text-xl md:text-2xl font-bold mb-4 leading-relaxed">
              "{quoteItem.quote}"
            </p>
            <p className="text-black mb-4 text-base">
              {quoteItem.quote_explanation}
            </p>
            <a
              href={quoteItem.source_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold uppercase text-sm flex items-center hover:text-swiss-accent transition-colors"
            >
              <span>VIEW SOURCE</span>
              <ExternalLinkIcon size={14} className="ml-2" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

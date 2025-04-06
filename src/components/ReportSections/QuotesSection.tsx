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
    <section className="bg-white rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
          4
        </span>
        명언/핵심 문장
      </h2>
      <div className="space-y-6">
        {quotes.map((quoteItem, index) => (
          <div key={index} className="bg-gray-50 rounded-2xl p-6 relative">
            <QuoteIcon
              className="absolute top-4 left-4 text-gray-300"
              size={24}
            />
            <div className="ml-6">
              <p className="text-xl font-medium mb-4 leading-relaxed">
                "{quoteItem.quote}"
              </p>
              <p className="text-gray-600 mb-3 text-sm">
                {quoteItem.quote_explanation}
              </p>
              <a
                href={quoteItem.source_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 text-sm flex items-center hover:underline"
              >
                <span>원문 보기</span>
                <ExternalLinkIcon size={14} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

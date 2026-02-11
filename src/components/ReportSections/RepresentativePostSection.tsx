// React is used in JSX transformations
import { ExternalLink } from "lucide-react";
import { appendUtm } from "../../types/article";

interface RepresentativePostSectionProps {
  post: {
    title: string;
    link: string;
    coreSentence: string;
    explanation: string;
  };
}

export function RepresentativePostSection({
  post,
}: RepresentativePostSectionProps) {
  return (
    <section className="swiss-card pattern-diagonal">
      <h2 className="text-xl md:text-2xl font-black mb-4 md:mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">04</span>
        대표 작품
      </h2>

      <a
        href={appendUtm(post.link, "report_post")}
        target="_blank"
        rel="noopener"
        className="text-xl font-black text-black hover:text-swiss-accent transition flex items-center gap-2 mb-6 uppercase"
      >
        {post.title}
        <ExternalLink className="w-5 h-5" />
      </a>

      <blockquote className="border-l-4 border-black pl-6 py-4 mb-6 bg-swiss-muted rounded-none">
        <p className="text-lg italic text-black">"{post.coreSentence}"</p>
      </blockquote>

      <p className="text-black leading-relaxed">{post.explanation}</p>
    </section>
  );
}

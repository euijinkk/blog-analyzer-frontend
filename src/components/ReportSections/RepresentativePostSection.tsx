// React is used in JSX transformations
import { ExternalLink } from "lucide-react";

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
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">03</span>
        당신을 대표하는 글
      </h2>

      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-black text-black hover:text-swiss-accent transition flex items-center gap-2 mb-6 uppercase"
      >
        {post.title}
        <ExternalLink className="w-5 h-5" />
      </a>

      <blockquote className="border-l-4 border-black pl-6 py-4 mb-6 bg-gray-50">
        <p className="text-lg italic text-black">"{post.coreSentence}"</p>
      </blockquote>

      <p className="text-black leading-relaxed">{post.explanation}</p>
    </section>
  );
}

import { PenTool, Brain, Hash, Quote } from "lucide-react";

export function About() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-left mb-16">
          <h1 className="text-display-sm md:text-display-md font-black text-black uppercase tracking-tight mb-6">
            ABOUT
          </h1>
          <p className="text-xl text-black max-w-xl">
            블로그 링크 하나로 글쓰기 스타일과 성향을 분석해 드려요
          </p>
        </div>

        <div className="swiss-card mb-8">
          <h2 className="text-2xl font-black text-black mb-8 uppercase tracking-wide flex items-center">
            <span className="swiss-section-number">01</span>
            SERVICE
          </h2>
          <p className="text-black leading-relaxed mb-8">
            블로그 링크 하나로 글쓰기 스타일과 성향을 분석해 드려요
          </p>

          <div className="border-2 border-swiss-accent p-6">
            <div className="mb-4">
              <Brain size={32} className="text-swiss-accent" />
            </div>
            <h3 className="font-black text-black mb-2 uppercase">
              MBTI PREDICTION
            </h3>
            <p className="text-black text-sm">
              글의 내용과 표현 방식을 바탕으로 작성자의 MBTI 성향을
              예측해드립니다.
            </p>
          </div>

          <div className="border-2 border-black p-6">
            <div className="mb-4">
              <Hash size={32} className="text-black" />
            </div>
            <h3 className="font-black text-black mb-2 uppercase">KEYWORDS</h3>
            <p className="text-black text-sm">
              블로그에서 자주 사용되는 핵심 키워드를 추출하여 관심사와 전문
              분야를 파악합니다.
            </p>
          </div>

          <div className="border-2 border-black p-6">
            <div className="mb-4">
              <Quote size={32} className="text-black" />
            </div>
            <h3 className="font-black text-black mb-2 uppercase">QUOTES</h3>
            <p className="text-black text-sm">
              블로그에서 가장 특별하고 인상적인 문장들을 선별하여 작성자의
              개성을 보여드립니다.
            </p>
          </div>
        </div>

        <div className="border-t-2 border-black pt-8">
          <h3 className="text-xl font-black text-black mb-6 uppercase">
            RECOMMENDED FOR
          </h3>
          <ul className="space-y-3 text-black">
            <li className="flex items-center">
              <span className="text-swiss-accent font-black mr-3">—</span>
              자신의 글쓰기 스타일이 궁금한 블로거
            </li>
            <li className="flex items-center">
              <span className="text-swiss-accent font-black mr-3">—</span>
              다른 사람의 블로그 성향을 알고 싶은 분
            </li>
            <li className="flex items-center">
              <span className="text-swiss-accent font-black mr-3">—</span>
              재미있는 성향 테스트를 찾고 있는 분
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

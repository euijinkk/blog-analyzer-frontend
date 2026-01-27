import { Mail } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-left mb-16">
          <h1 className="text-display-sm md:text-display-md font-black text-black uppercase tracking-tight mb-6">
            CONTACT
          </h1>
          <p className="text-xl text-black max-w-xl">
            블로그 성향 분석기 관련 문의 및 자주 묻는 질문
          </p>
        </div>

        <div className="grid md:grid-cols-1 max-w-3xl mx-auto gap-8">
          {/* 연락처 정보 */}
          <div className="swiss-card-accent text-center">
            <h2 className="text-2xl font-black text-black mb-8 uppercase tracking-wide">
              INQUIRIES
            </h2>
            <div className="border-2 border-black p-8">
              <Mail size={48} className="mx-auto mb-6 text-black" />
              <p className="text-lg font-black text-black mb-4 uppercase">
                EMAIL
              </p>
              <p className="text-swiss-accent font-bold text-xl mb-4">
                euijinkk97@gmail.com
              </p>
              <p className="text-black text-sm">
                서비스 관련 문의나 개선 제안을 보내주세요.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="swiss-card">
            <h2 className="text-2xl font-black text-black mb-8 uppercase tracking-wide flex items-center">
              <span className="swiss-section-number">FAQ</span>
              자주 묻는 질문
            </h2>
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-6">
                <h3 className="font-black text-black mb-3 flex items-center">
                  <span className="text-swiss-accent font-black mr-3">Q.</span>
                  분석 결과가 얼마나 정확한가요?
                </h3>
                <p className="text-black ml-8">
                  AI 모델을 기반으로 한 예측이므로{" "}
                  <strong>재미있는 참고 자료</strong>로만 활용해주세요. 10개
                  이상의 글이 있는 블로그를 분석하시면 더 정확한 결과를 얻을 수
                  있습니다.
                </p>
              </div>

              <div className="border-b-2 border-black pb-6">
                <h3 className="font-black text-black mb-3 flex items-center">
                  <span className="text-swiss-accent font-black mr-3">Q.</span>
                  어떤 블로그를 분석할 수 있나요?
                </h3>
                <p className="text-black ml-8">
                  RSS 가 있는 블로그이면 분석 합니다. 기본적으로{" "}
                  <strong>여러 블로그 플랫폼</strong>을 지원합니다. (네이버
                  블로그, 티스토리, 벨로그, 브런치 등)
                  <br />
                  단, 비공개 블로그는 분석할 수 없습니다.
                </p>
              </div>

              <div className="border-b-2 border-black pb-6">
                <h3 className="font-black text-black mb-3 flex items-center">
                  <span className="text-swiss-accent font-black mr-3">Q.</span>
                  분석이 안 되는 경우가 있나요?
                </h3>
                <p className="text-black ml-8">
                  다음과 같은 경우 분석이 어려울 수 있습니다:
                  <br />
                  — 비공개 블로그나 접근 권한이 필요한 경우
                  <br />
                  — 글이 너무 적거나 내용이 부족한 경우
                  <br />
                  — 이미지만 있고 텍스트가 거의 없는 경우
                  <br />— 잘못된 URL을 입력한 경우
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

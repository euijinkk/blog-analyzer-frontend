import { Link } from "react-router-dom";

export function TermsOfService() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-left mb-16">
          <h1 className="text-display-sm md:text-display-md font-black text-black uppercase tracking-tight mb-6">
            TERMS OF
            <br />
            SERVICE
          </h1>
          <p className="text-lg text-black">
            블로그 성향 분석기 서비스 이용 규칙입니다
          </p>
        </div>

        <div className="swiss-card space-y-8">
          <section>
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">01</span>
              서비스 소개
            </h2>
            <div className="text-black space-y-2 ml-12">
              <p>
                블로그 성향 분석기는 공개된 블로그를 AI로 분석하여 성향을
                예측하는 무료 서비스입니다.
              </p>
              <ul className="list-none space-y-1">
                <li>— 회원가입 없이 바로 이용 가능</li>
                <li>— 블로그 URL 입력으로 MBTI 성향 분석</li>
                <li>— 키워드 추출 및 인상적인 문장 선별</li>
                <li>— Google 광고를 통해 무료 서비스 제공</li>
              </ul>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">02</span>
              이용 방법
            </h2>
            <div className="text-black space-y-2 ml-12">
              <p>서비스 이용은 간단합니다:</p>
              <ul className="list-none space-y-1">
                <li>— 공개된 블로그 URL을 입력해 주세요</li>
                <li>— AI 분석이 수초간 진행됩니다</li>
                <li>— 분석 결과를 확인하고 공유할 수 있습니다</li>
              </ul>
              <div className="mt-3 p-4 border-2 border-black">
                <p className="text-sm text-black">
                  비공개 블로그나 접근 권한이 필요한 블로그는 분석할 수
                  없습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">03</span>
              분석 결과 주의사항
            </h2>
            <div className="text-black space-y-2 ml-12">
              <p>분석 결과 이용 시 다음 사항을 숙지해 주세요:</p>
              <ul className="list-none space-y-1">
                <li>
                  — <strong>재미있는 참고용입니다</strong> - AI 추정치로 실제와
                  다를 수 있어요
                </li>
                <li>
                  — <strong>중요한 결정에 사용하지 마세요</strong> - 단순
                  엔터테인먼트 목적입니다
                </li>
              </ul>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">04</span>
              금지사항
            </h2>
            <div className="text-black space-y-2 ml-12">
              <p>다음과 같은 행위는 금지됩니다:</p>
              <ul className="list-none space-y-1">
                <li>— 자동화 프로그램을 이용한 과도한 요청</li>
                <li>— 서비스 운영을 방해하는 행위</li>
              </ul>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">05</span>
              광고 및 개인정보
            </h2>
            <div className="text-black space-y-2 ml-12">
              <p>서비스 이용 시 알아두세요:</p>
              <ul className="list-none space-y-1">
                <li>
                  — <strong>광고 표시:</strong> Google AdSense 광고가 표시됩니다
                </li>
                <li>
                  — <strong>쿠키 사용:</strong> 광고 개인화를 위해 쿠키를
                  사용합니다
                </li>
                <li>
                  — <strong>최소 정보 수집:</strong> 개인 식별 정보는 수집하지
                  않습니다
                </li>
                <li>
                  — <strong>데이터 보관:</strong> 분석 결과는 개선 목적으로
                  익명화하여 보관됩니다
                </li>
              </ul>
              <p className="mt-2">
                자세한 내용은{" "}
                <Link
                  to="/privacy-policy"
                  className="text-swiss-accent hover:underline font-bold"
                >
                  개인정보처리방침
                </Link>
                을 확인해 주세요.
              </p>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">06</span>
              면책사항
            </h2>
            <div className="text-black space-y-2 ml-12">
              <p>다음 사항에 대해서는 책임지지 않습니다:</p>
              <ul className="list-none space-y-1">
                <li>— 분석 결과의 정확성이나 신뢰성</li>
                <li>— 이용자의 잘못된 사용으로 인한 문제</li>
                <li>— 분석 결과를 바탕으로 한 의사결정의 결과</li>
              </ul>
              <div className="mt-3 p-4 border-2 border-swiss-accent">
                <p className="text-sm text-black">
                  무료 서비스로 제공되므로 완벽한 서비스를 보장하지 않습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">07</span>
              문의 및 기타
            </h2>
            <div className="text-black space-y-2 ml-12">
              <p>서비스 관련 문의나 건의사항이 있으시면 연락해 주세요.</p>
              <div className="mt-3 p-4 border-2 border-black">
                <p>
                  <strong>EMAIL:</strong> euijinkk97@gmail.com
                </p>
              </div>
              <p className="text-sm mt-4">
                이 약관은 언제든지 변경될 수 있으며, 변경 시 웹사이트에
                공지합니다. 변경된 약관 공지 후 서비스를 계속 이용하시면 동의한
                것으로 간주됩니다.
              </p>
            </div>
          </section>

          <div className="mt-8 p-4 border-2 border-swiss-accent">
            <p className="text-sm text-black">
              <strong>시행일자:</strong> 2025년 7월 10일
              <br />
              <strong>최종 수정일:</strong> 2025년 7월 10일
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-left mb-16">
          <h1 className="text-display-sm md:text-display-md font-black text-black uppercase tracking-tight mb-6">
            PRIVACY
            <br />
            POLICY
          </h1>
          <p className="text-lg text-black">
            블로그 성향 분석기는 최소한의 정보만 수집하여 서비스를 제공합니다
          </p>
        </div>

        <div className="swiss-card space-y-8">
          <section>
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">01</span>
              수집하는 정보
            </h2>
            <div className="text-black space-y-3 ml-12">
              <div>
                <h3 className="font-bold text-black mb-2">
                  서비스 이용을 위해 수집하는 정보:
                </h3>
                <ul className="list-none space-y-1">
                  <li>— 분석하고자 하는 블로그 URL</li>
                  <li>— 블로그에서 추출한 텍스트 (분석용)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2">
                  자동으로 수집되는 정보:
                </h3>
                <ul className="list-none space-y-1">
                  <li>— 접속 시간, 브라우저 정보</li>
                  <li>— 광고 서비스를 위한 쿠키 정보</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">02</span>
              정보 이용 목적
            </h2>
            <div className="text-black ml-12">
              <ul className="list-none space-y-1">
                <li>— 블로그 성향 분석 서비스 제공</li>
                <li>— 서비스 개선을 위한 통계 분석</li>
                <li>— Google AdSense 광고 표시</li>
              </ul>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">03</span>
              정보 보관 및 삭제
            </h2>
            <div className="text-black space-y-2 ml-12">
              <ul className="list-none space-y-1">
                <li>
                  — <strong>블로그 URL과 분석 결과:</strong> 서비스 개선을 위해
                  보관 (개인 식별 불가능한 형태)
                </li>
                <li>
                  — <strong>광고 관련 데이터:</strong> Google 정책에 따라 처리
                </li>
              </ul>
              <div className="mt-4 p-4 border-2 border-black">
                <p className="text-sm text-black">
                  회원가입이 없는 서비스로, 개인을 식별할 수 있는 정보는
                  수집하지 않습니다.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">04</span>
              제3자 서비스 이용
            </h2>
            <div className="text-black ml-12">
              <p>원활한 서비스 제공을 위해 다음 서비스를 이용합니다:</p>
              <ul className="list-none mt-2 space-y-1">
                <li>
                  — <strong>Gemini:</strong> 블로그 텍스트 분석
                </li>
              </ul>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">05</span>
              광고 정보
            </h2>
            <div className="text-black space-y-3 ml-12">
              <p>본 서비스는 Google AdSense를 통해 광고를 표시합니다:</p>
              <ul className="list-none space-y-1">
                <li>
                  — Google은 쿠키를 사용하여 관심사 기반 광고를 표시할 수 있습니다
                </li>
                <li>
                  —{" "}
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-swiss-accent hover:underline font-bold"
                  >
                    Google 광고 설정
                  </a>
                  에서 맞춤 광고를 관리할 수 있습니다
                </li>
              </ul>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">06</span>
              이용자 권리
            </h2>
            <div className="text-black ml-12">
              <p>언제든지 다음 권리를 행사할 수 있습니다:</p>
              <ul className="list-none mt-2 space-y-1">
                <li>— 개인정보 처리 현황 문의</li>
                <li>— 데이터 삭제 요청 (분석한 블로그 URL 명시 필요)</li>
                <li>— 쿠키 설정 변경</li>
              </ul>
            </div>
          </section>

          <section className="border-t-2 border-black pt-8">
            <h2 className="text-xl font-black text-black mb-4 uppercase flex items-center">
              <span className="swiss-section-number">07</span>
              문의
            </h2>
            <div className="text-black ml-12">
              <p>개인정보 관련 문의사항이 있으시면 아래로 연락해 주세요:</p>
              <div className="mt-3 p-4 border-2 border-black">
                <p>
                  <strong>EMAIL:</strong> <a href="mailto:euijinkk97@gmail.com">euijinkk97@gmail.com</a>
                </p>
              </div>
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

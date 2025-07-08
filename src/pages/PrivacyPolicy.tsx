export function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-6">
            개인정보처리방침
          </h1>
          <p className="text-lg text-gray-600">
            블로그 성향 분석기는 최소한의 정보만 수집하여 서비스를 제공합니다
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              1. 수집하는 정보
            </h2>
            <div className="text-gray-600 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  서비스 이용을 위해 수집하는 정보:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>분석하고자 하는 블로그 URL</li>
                  <li>블로그에서 추출한 텍스트 (분석용)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  자동으로 수집되는 정보:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>접속 시간, 브라우저 정보</li>
                  <li>광고 서비스를 위한 쿠키 정보</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              2. 정보 이용 목적
            </h2>
            <div className="text-gray-600">
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>블로그 성향 분석 서비스 제공</li>
                <li>서비스 개선을 위한 통계 분석</li>
                <li>Google AdSense 광고 표시</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3. 정보 보관 및 삭제
            </h2>
            <div className="text-gray-600 space-y-2">
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <strong>블로그 URL과 분석 결과:</strong> 서비스 개선을 위해
                  보관 (개인 식별 불가능한 형태)
                </li>
                <li>
                  <strong>광고 관련 데이터:</strong> Google 정책에 따라 처리
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 회원가입이 없는 서비스로, 개인을 식별할 수 있는 정보는
                  수집하지 않습니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              4. 제3자 서비스 이용
            </h2>
            <div className="text-gray-600">
              <p>원활한 서비스 제공을 위해 다음 서비스를 이용합니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>
                  <strong>OpenAI:</strong> 블로그 텍스트 분석
                </li>
                <li>
                  <strong>Google AdSense:</strong> 광고 서비스
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              5. 광고 정보
            </h2>
            <div className="text-gray-600 space-y-3">
              <p>본 서비스는 Google AdSense를 통해 광고를 표시합니다:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Google은 쿠키를 사용하여 관심사 기반 광고를 표시할 수 있습니다
                </li>
                <li>
                  <a
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline"
                  >
                    Google 광고 설정
                  </a>
                  에서 맞춤 광고를 관리할 수 있습니다
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              6. 이용자 권리
            </h2>
            <div className="text-gray-600">
              <p>언제든지 다음 권리를 행사할 수 있습니다:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>개인정보 처리 현황 문의</li>
                <li>데이터 삭제 요청 (분석한 블로그 URL 명시 필요)</li>
                <li>쿠키 설정 변경</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 문의</h2>
            <div className="text-gray-600">
              <p>개인정보 관련 문의사항이 있으시면 아래로 연락해 주세요:</p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p>
                  <strong>이메일:</strong> euijinkk97@gmail.com
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-800">
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

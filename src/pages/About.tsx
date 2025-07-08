export function About() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-6">
            서비스 소개
          </h1>
          <p className="text-xl text-gray-600">
            AI 기술로 블로그 글을 분석하여 글쓰기 성향을 알려드려요
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            블로그 성향 분석기란?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            블로그 성향 분석기는 AI 기술을 활용하여 블로그 글을 분석하고, 글쓰기
            스타일과 성향을 파악해주는 서비스입니다. 링크만으로도 흥미로운 분석
            결과를 제공합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-indigo-50 rounded-xl p-6">
              <div className="text-indigo-600 text-2xl mb-3">✍️</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                글쓰기 스타일 분석
              </h3>
              <p className="text-gray-600 text-sm">
                문체, 어조, 표현 방식 등을 종합적으로 분석하여 고유한 글쓰기
                스타일을 파악합니다.
              </p>
            </div>

            <div className="bg-pink-50 rounded-xl p-6">
              <div className="text-pink-600 text-2xl mb-3">🧠</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                MBTI 성향 예측
              </h3>
              <p className="text-gray-600 text-sm">
                글의 내용과 표현 방식을 바탕으로 작성자의 MBTI 성향을
                예측해드립니다.
              </p>
            </div>

            <div className="bg-amber-50 rounded-xl p-6">
              <div className="text-amber-600 text-2xl mb-3">#️⃣</div>
              <h3 className="font-semibold text-gray-900 mb-2">키워드 추출</h3>
              <p className="text-gray-600 text-sm">
                블로그에서 자주 사용되는 핵심 키워드를 추출하여 관심사와 전문
                분야를 파악합니다.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <div className="text-emerald-600 text-2xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                인상적인 문장
              </h3>
              <p className="text-gray-600 text-sm">
                블로그에서 가장 특별하고 인상적인 문장들을 선별하여 작성자의
                개성을 보여드립니다.
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              이런 분들에게 추천해요
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                자신의 글쓰기 스타일이 궁금한 블로거
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                다른 사람의 블로그 성향을 알고 싶은 분
              </li>
              <li className="flex items-center">
                <span className="text-purple-500 mr-2">•</span>
                재미있는 성향 테스트를 찾고 있는 분
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

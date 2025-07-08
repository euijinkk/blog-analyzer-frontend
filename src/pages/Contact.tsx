import { useState } from "react";

export function Contact() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-6">
            문의하기
          </h1>
          <p className="text-xl text-gray-600">
            블로그 성향 분석기 관련 문의 및 자주 묻는 질문
          </p>
        </div>

        <div className="grid md:grid-cols-1 max-w-3xl mx-auto gap-8">
          {/* 연락처 정보 */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              문의 및 제안
            </h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-purple-50 rounded-lg p-6">
                <span className="text-4xl mb-4 block">📧</span>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  이메일 문의
                </p>
                <p className="text-purple-600 font-medium text-lg mb-3">
                  euijinkk97@gmail.com
                </p>
                <p className="text-sm text-gray-600">
                  서비스 관련 문의나 개선 제안을 보내주세요.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              자주 묻는 질문 (FAQ)
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-purple-500 mr-2">Q.</span>
                  분석 결과가 얼마나 정확한가요?
                </h3>
                <p className="text-gray-600 ml-6">
                  AI 모델을 기반으로 한 예측이므로{" "}
                  <strong>재미있는 참고 자료</strong>로만 활용해주세요. 10개
                  이상의 글이 있는 블로그를 분석하시면 더 정확한 결과를 얻을 수
                  있습니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-purple-500 mr-2">Q.</span>
                  어떤 블로그를 분석할 수 있나요?
                </h3>
                <p className="text-gray-600 ml-6">
                  RSS 가 있는 블로그이면 분석 합니다. 기본적으로{" "}
                  <strong>여러 블로그 플랫폼</strong>을 지원합니다. (네이버
                  블로그, 티스토리, 벨로그, 브런치 등)
                  <br />
                  단, 비공개 블로그는 분석할 수 없습니다.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                  <span className="text-purple-500 mr-2">Q.</span>
                  분석이 안 되는 경우가 있나요?
                </h3>
                <p className="text-gray-600 ml-6">
                  다음과 같은 경우 분석이 어려울 수 있습니다:
                  <br />
                  • 비공개 블로그나 접근 권한이 필요한 경우
                  <br />
                  • 글이 너무 적거나 내용이 부족한 경우
                  <br />
                  • 이미지만 있고 텍스트가 거의 없는 경우
                  <br />• 잘못된 URL을 입력한 경우
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

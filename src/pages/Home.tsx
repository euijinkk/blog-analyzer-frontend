import React, { useState } from 'react';
import { AnalysisForm } from '../components/AnalysisForm';
import { LoadingState } from '../components/LoadingState';
export function Home({
  onAnalyzeRequest,
  loading,
  error
}) {
  return <main className="min-h-screen w-full flex flex-col items-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent mb-4">
            블로그 성향 분석기
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            블로그 링크 하나로 당신의 글쓰기 스타일과 성향을 AI가 분석해 드려요
            ✨
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="bg-indigo-100 rounded-full px-4 py-2 text-indigo-800 font-medium">
              ✍️ 글쓰기 스타일
            </div>
            <div className="bg-pink-100 rounded-full px-4 py-2 text-pink-800 font-medium">
              🧠 MBTI 예측
            </div>
            <div className="bg-amber-100 rounded-full px-4 py-2 text-amber-800 font-medium">
              #️⃣ 키워드 추출
            </div>
            <div className="bg-emerald-100 rounded-full px-4 py-2 text-emerald-800 font-medium">
              💬 인상적인 문장
            </div>
          </div>
        </div>
        {loading ? <LoadingState /> : <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <AnalysisForm onSubmit={onAnalyzeRequest} error={error} />
          </div>}
        <div className="mt-16 text-center text-gray-500">
          <p className="mb-2">
            블로그 10개의 글을 분석하여 당신의 글쓰기 성향을 알려드려요
          </p>
          <p>로그인 없이 바로 이용 가능합니다</p>
        </div>
      </div>
    </main>;
}
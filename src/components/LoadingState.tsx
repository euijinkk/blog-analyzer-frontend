import React from 'react';
export function LoadingState() {
  return <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
        <h3 className="text-xl font-bold mb-2">블로그 분석 중...</h3>
        <p className="text-gray-500 mb-4">약 30초 정도 소요될 수 있어요</p>
        <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full animate-pulse w-3/4"></div>
        </div>
        <div className="mt-8 text-sm text-gray-500">
          <p>AI가 당신의 블로그를 깊이 있게 분석하고 있어요 ✨</p>
        </div>
      </div>
    </div>;
}
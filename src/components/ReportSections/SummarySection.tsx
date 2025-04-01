import React from 'react';
export function SummarySection({
  summary,
  explanation
}) {
  return <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
          1
        </span>
        당신의 글쓰기 성향
      </h2>
      <div className="mb-6">
        <div className="inline-block bg-white rounded-full px-6 py-3 shadow-md">
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {summary}
          </span>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{explanation}</p>
    </section>;
}
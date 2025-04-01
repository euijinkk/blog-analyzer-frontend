import React from 'react';
export function KeywordsSection({
  keywords
}) {
  const colors = ['bg-indigo-100 text-indigo-800', 'bg-pink-100 text-pink-800', 'bg-amber-100 text-amber-800'];
  return <section className="bg-white rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
          3
        </span>
        핵심 키워드
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {keywords.map((keyword, index) => <div key={index} className={`${colors[index % colors.length]} rounded-full px-6 py-3 text-lg font-medium shadow-sm transform hover:scale-105 transition`}>
            {keyword}
          </div>)}
      </div>
    </section>;
}
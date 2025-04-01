import React from 'react';
export function ContentRatioSection({
  ratios
}) {
  const categories = {
    expertise: {
      name: '전문분야',
      icon: '📚',
      color: 'bg-blue-500'
    },
    essay: {
      name: '에세이',
      icon: '✍️',
      color: 'bg-purple-500'
    },
    travel: {
      name: '여행',
      icon: '🌍',
      color: 'bg-green-500'
    },
    self_improvement: {
      name: '자기계발',
      icon: '🚀',
      color: 'bg-amber-500'
    }
  };
  const getPercentageValue = percentString => {
    return parseInt(percentString.replace('%', ''));
  };
  return <section className="bg-white rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
          5
        </span>
        글 소재 비율 분석
      </h2>
      <div className="space-y-4">
        {Object.entries(ratios).map(([key, value]) => {
        const category = categories[key];
        const percentage = getPercentageValue(value);
        return <div key={key} className="flex items-center">
              <div className="w-24 flex-shrink-0 flex items-center">
                <span className="mr-2">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </div>
              <div className="flex-grow mx-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className={`${category.color} h-4 rounded-full`} style={{
                width: value
              }}></div>
                </div>
              </div>
              <div className="w-12 text-right font-medium">{value}</div>
            </div>;
      })}
      </div>
    </section>;
}
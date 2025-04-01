import React, { useState } from 'react';
import { Home } from './pages/Home';
import { Report } from './pages/Report';
export function App() {
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleAnalyzeRequest = async blogUrl => {
    setLoading(true);
    setError(null);
    try {
      // This would be replaced with your actual API call
      // For now, using timeout and mock data for demonstration
      setTimeout(() => {
        const mockData = {
          summary: '호기심 많은 개척자',
          summary_explanation: '이 블로그는 새로운 기술과 아이디어를 탐구하는 여정을 담고 있습니다. 글쓴이는 독자들에게 복잡한 개념을 쉽게 풀어내며 호기심과 도전정신을 자극합니다.',
          mbti: 'ENTP',
          mbti_explanation: {
            'E/I': '다양한 주제와 사람들에 대한 관심이 높고 외부 세계와 활발히 소통하는 외향(E) 성향이 돋보입니다.',
            'S/N': '추상적인 개념과 미래 가능성을 탐구하는 직관(N) 성향이 강하게 나타납니다.',
            'T/F': '논리적 분석과 비판적 사고를 중시하는 사고(T) 성향이 두드러집니다.',
            'J/P': '새로운 가능성에 열려있고 즉흥적인 탐험을 즐기는 인식(P) 성향을 보여줍니다.'
          },
          keywords: ['#디지털혁신', '#창의적사고', '#미래기술'],
          quotes: [{
            quote: '기술은 도구일 뿐, 그것을 어떻게 활용하느냐가 진정한 혁신이다.',
            quote_explanation: '기술의 본질적 가치와 인간 중심의 혁신에 대한 작가의 관점을 잘 보여주는 문장입니다.',
            source_link: 'https://example.com/post1'
          }, {
            quote: '실패를 두려워하지 않는 사람만이 진정한 성공의 맛을 알 수 있다.',
            quote_explanation: '도전과 성장에 대한 작가의 철학이 담긴 문장으로, 많은 독자들에게 용기를 줄 수 있는 메시지입니다.',
            source_link: 'https://example.com/post2'
          }],
          content_ratio: {
            expertise: '45%',
            essay: '30%',
            travel: '5%',
            self_improvement: '20%'
          }
        };
        setAnalysisData(mockData);
        setLoading(false);
      }, 3000);
    } catch (err) {
      setError('분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      setLoading(false);
    }
  };
  return <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {!analysisData ? <Home onAnalyzeRequest={handleAnalyzeRequest} loading={loading} error={error} /> : <Report data={analysisData} onReset={() => setAnalysisData(null)} />}
    </div>;
}
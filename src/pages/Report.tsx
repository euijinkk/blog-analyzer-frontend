import React from 'react';
import { ArrowLeftIcon, ShareIcon, DownloadIcon } from 'lucide-react';
import { SummarySection } from '../components/ReportSections/SummarySection';
import { MbtiSection } from '../components/ReportSections/MbtiSection';
import { KeywordsSection } from '../components/ReportSections/KeywordsSection';
import { QuotesSection } from '../components/ReportSections/QuotesSection';
import { ContentRatioSection } from '../components/ReportSections/ContentRatioSection';
export function Report({
  data,
  onReset
}) {
  return <main className="min-h-screen w-full pb-20">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={onReset} className="flex items-center text-gray-700 hover:text-indigo-600 transition">
            <ArrowLeftIcon size={18} className="mr-1" />
            <span>다시 분석하기</span>
          </button>
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition">
              <ShareIcon size={18} />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition">
              <DownloadIcon size={18} />
            </button>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="mb-12 text-center">
          <span className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-medium mb-4">
            블로그 분석 완료 ✓
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            당신의 블로그 성향 분석
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI가 분석한 당신의 블로그 글쓰기 스타일과 성향을 확인해보세요
          </p>
        </div>
        <div className="space-y-12">
          <SummarySection summary={data.summary} explanation={data.summary_explanation} />
          <MbtiSection mbti={data.mbti} explanation={data.mbti_explanation} />
          <KeywordsSection keywords={data.keywords} />
          <QuotesSection quotes={data.quotes} />
          <ContentRatioSection ratios={data.content_ratio} />
        </div>
      </div>
    </main>;
}
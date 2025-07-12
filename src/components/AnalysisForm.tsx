import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";

interface AnalysisFormProps {
  onSubmit: (blogUrl: string) => void;
  error: string | null;
}

export function AnalysisForm({ onSubmit, error }: AnalysisFormProps) {
  const [blogUrl, setBlogUrl] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogUrl || !blogUrl.trim().includes(".")) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    onSubmit(blogUrl);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-6">
        <label
          htmlFor="blogUrl"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          블로그 URL 입력
        </label>
        <div className="relative">
          <input
            id="blogUrl"
            type="text"
            value={blogUrl}
            onChange={(e) => setBlogUrl(e.target.value)}
            placeholder="https://example.blog.com"
            className={`w-full px-4 py-3 border-2 ${
              isInvalid ? "border-red-300" : "border-gray-300"
            } rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition`}
          />
          {isInvalid && (
            <p className="text-red-500 mt-2 text-sm">
              올바른 URL을 입력해주세요
            </p>
          )}
        </div>
      </div>
      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 flex items-center justify-center"
      >
        <span className="mr-2">분석 시작하기</span>
        <ArrowRightIcon size={20} />
      </button>
    </form>
  );
}

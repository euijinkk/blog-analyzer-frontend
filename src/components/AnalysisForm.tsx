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
      <div className="mb-8">
        <label
          htmlFor="blogUrl"
          className="block text-lg font-bold text-black uppercase tracking-wide mb-4"
        >
          BLOG URL
        </label>
        <div className="relative">
          <input
            id="blogUrl"
            type="text"
            value={blogUrl}
            onChange={(e) => setBlogUrl(e.target.value)}
            placeholder="https://example.blog.com"
            className={`swiss-input ${isInvalid ? "border-swiss-accent" : "border-black"
              }`}
          />
          {isInvalid && (
            <p className="text-swiss-accent mt-3 text-sm font-medium uppercase">
              올바른 URL을 입력해주세요
            </p>
          )}
        </div>
      </div>
      {error && (
        <div className="mb-6 p-4 border-2 border-swiss-accent text-swiss-accent font-medium">
          {error}
        </div>
      )}
      <button
        type="submit"
        className="swiss-btn-accent w-full flex items-center justify-center"
      >
        <span className="mr-3">분석하기</span>
        <ArrowRightIcon size={20} />
      </button>
    </form>
  );
}

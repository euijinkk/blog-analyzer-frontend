// React is used in JSX transformations
import { ShareIcon } from "lucide-react";
import { useShareUrl } from "../hooks/useShareUrl";

interface ShareFullButtonProps {
  className?: string;
  position?: "top-center" | "bottom-center" | "top-right" | "bottom-right";
}

export function ShareFullButton({
  className = "",
  position = "bottom-center",
}: ShareFullButtonProps) {
  const { copyToClipboard } = useShareUrl({ position });

  return (
    <button
      onClick={copyToClipboard}
      className={`flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all transform hover:scale-105 ${className}`}
      aria-label="공유하기"
      title="URL 복사하기"
    >
      <ShareIcon size={20} />
      <span className="font-medium">분석 결과 공유하기</span>
    </button>
  );
}

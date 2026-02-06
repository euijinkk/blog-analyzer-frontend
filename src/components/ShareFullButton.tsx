// React is used in JSX transformations
import { ShareIcon } from "lucide-react";
import { useShareUrl } from "../hooks/useShareUrl";

interface ShareFullButtonProps {
  className?: string;
}

export function ShareFullButton({ className = "" }: ShareFullButtonProps) {
  const { copyToClipboard } = useShareUrl();

  return (
    <button
      onClick={copyToClipboard}
      className={`swiss-btn-accent flex items-center space-x-3 ${className}`}
      aria-label="공유하기"
      title="URL 복사하기"
    >
      <ShareIcon size={20} />
      <span>공유하기</span>
    </button>
  );
}

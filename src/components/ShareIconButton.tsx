// React is used in JSX transformations
import { ShareIcon } from "lucide-react";
import { useShareUrl } from "../hooks/useShareUrl";

interface ShareIconButtonProps {
  className?: string;
}

export function ShareIconButton({ className = "" }: ShareIconButtonProps) {
  const { copyToClipboard } = useShareUrl();

  return (
    <button
      onClick={copyToClipboard}
      className={`bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition ${className}`}
      aria-label="공유하기"
      title="URL 복사하기"
    >
      <ShareIcon size={18} />
    </button>
  );
}

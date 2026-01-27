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
      className={`bg-white border-2 border-black p-3 hover:bg-black hover:text-white transition-all duration-200 ${className}`}
      aria-label="공유하기"
      title="URL 복사하기"
    >
      <ShareIcon size={20} />
    </button>
  );
}

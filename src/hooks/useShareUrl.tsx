import { useCallback } from "react";
import toast from "react-hot-toast";
import { CheckIcon } from "lucide-react";

type ToastPosition =
  | "top-center"
  | "bottom-center"
  | "top-right"
  | "bottom-right";

interface UseShareUrlOptions {
  position?: ToastPosition;
}

export function useShareUrl({
  position = "bottom-center",
}: UseShareUrlOptions = {}) {
  const copyToClipboard = useCallback(() => {
    // Get the current URL
    const currentUrl = window.location.href;

    // Copy to clipboard
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        // Show success toast
        toast.success(
          <div className="flex items-center space-x-2">
            <CheckIcon size={18} />
            <span>URL이 복사되었습니다!</span>
          </div>,
          {
            duration: 3000,
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
            position,
          }
        );
      })
      .catch(() => {
        // Show error toast if copying fails
        toast.error("URL 복사 중 오류가 발생했습니다.");
      });
  }, [position]);

  return { copyToClipboard };
}

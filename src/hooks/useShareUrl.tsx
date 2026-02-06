import { useCallback } from "react";
import toast from "react-hot-toast";
import { CheckIcon } from "lucide-react";
import { trackEvent } from "../analytics/amplitude";

export function useShareUrl() {
  const copyToClipboard = useCallback(() => {
    trackEvent("click_share", { page_path: window.location.pathname });
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
            position: "bottom-center",
          }
        );
      })
      .catch(() => {
        // Show error toast if copying fails
        toast.error("URL 복사 중 오류가 발생했습니다.");
      });
  }, []);

  return { copyToClipboard };
}

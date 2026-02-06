import { useRef, useCallback } from "react";
import html2canvas from "html2canvas";

export function useStoryDownload() {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadStoryImage = useCallback(
    async (animal: string, mbti: string) => {
      if (!cardRef.current) return;

      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#FFFFFF",
        width: 540,
        height: 540,
      });

      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `블로그성격_${animal}_${mbti}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, "image/png");
    },
    []
  );

  return { cardRef, downloadStoryImage };
}

import { useQuery } from "@tanstack/react-query";
import api from "./remote";

// Define interface for the API response data
export interface AnalysisData {
  summary: string;
  summary_explanation: string;
  mbti: string;
  mbti_explanation: {
    "E/I": string;
    "S/N": string;
    "T/F": string;
    "J/P": string;
  };
  keywords: string[];
  quotes: {
    quote: string;
    quote_explanation: string;
    source_link: string;
  }[];
  content_ratio: {
    [key: string]: string;
  };
}

export function useBlogAnalysis(blogUrl: string | null) {
  return useQuery({
    queryKey: ["blogAnalysis", blogUrl],
    queryFn: async () => {
      if (!blogUrl) {
        throw new Error("Blog URL is required");
      }

      const response = await api.post<AnalysisData>("analyze", {
        blogUrl,
      });

      return response;
    },
    enabled: !!blogUrl,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
}

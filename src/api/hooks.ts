import { useQuery } from "@tanstack/react-query";
import ky from "ky";

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

// Custom hook to fetch blog analysis data
export function useBlogAnalysis(blogUrl: string | null) {
  return useQuery({
    queryKey: ["blogAnalysis", blogUrl],
    queryFn: async () => {
      if (!blogUrl) {
        throw new Error("Blog URL is required");
      }

      const response = await ky
        .post("https://blog-ai-analyzer.euijinkk97.workers.dev/analyze", {
          json: {
            blogUrl,
          },
          timeout: 60000, // 60 seconds timeout for longer analysis
        })
        .json<AnalysisData>();

      return response;
    },
    enabled: !!blogUrl, // Only run the query when blogUrl is available
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    retry: 1,
  });
}

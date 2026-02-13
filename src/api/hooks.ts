import { useQuery } from '@tanstack/react-query';
import api from './remote';
import { BlogAnalysisSummary } from '../types/article';

// Define interface for the API response data
export interface TendencyAxis {
  score: number;
  label: string;
  description: string;
}

export interface MBTIAxisConfidence {
  selected: string;
  explanation: string;
}

export interface FortuneItem {
  content: string;
  basedOn: string;
}

export interface AnalysisData {
  character: {
    animal: string;
    summary: string;
  };
  representativePost: {
    title: string;
    link: string;
    coreSentence: string;
    explanation: string;
  };
  blogTendency: {
    nightMorning: TendencyAxis;
    narrativeImpact: TendencyAxis;
    trendEssence: TendencyAxis;
    communicationUnilateral: TendencyAxis;
    completeGrowth: TendencyAxis;
  };
  mbtiPrediction: {
    result: string;
    confidence: {
      'E/I': MBTIAxisConfidence;
      'S/N': MBTIAxisConfidence;
      'T/F': MBTIAxisConfidence;
      'J/P': MBTIAxisConfidence;
    };
  };
  fortune: {
    warnings: FortuneItem[];
    directions: FortuneItem[];
  };
}

export function useBlogAnalysis(blogUrl: string | null) {
  return useQuery({
    queryKey: ['blogAnalysis', blogUrl],
    queryFn: async () => {
      if (!blogUrl) {
        throw new Error('Blog URL is required');
      }

      const response = await api.post<AnalysisData>('analyze', {
        blogUrl,
      });

      return response;
    },
    enabled: !!blogUrl,
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
}

// Articles API interfaces
export interface ArticlesResponse {
  analyses: BlogAnalysisSummary[];
  total: number;
  hasMore: boolean;
}

export interface ArticlesQueryParams {
  limit?: number;
  sort?: 'latest' | 'random';
}

// Fetch articles from backend
async function fetchArticles(
  params: ArticlesQueryParams = {}
): Promise<ArticlesResponse> {
  const { limit = 12, sort = 'latest' } = params;
  const response = await api.get<ArticlesResponse>('articles', {
    params: { limit, sort },
  });
  return response.data;
}

// Main hook for fetching articles
export function useArticles(params: ArticlesQueryParams = {}) {
  return useQuery({
    queryKey: ['articles', params],
    queryFn: () => fetchArticles(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
}

// Convenience hook for random articles
export function useRandomArticles(count = 3) {
  return useArticles({ limit: count, sort: 'random' });
}

// Hook for articles excluding a specific character
export function useArticlesExcluding(excludeCharacter: string, count = 3) {
  const { data, isLoading, isError } = useArticles({
    limit: 20,
    sort: 'latest',
  });

  // Filter out the excluded character on the client side
  const filteredArticles = data?.analyses
    .filter((article) => article.characterName !== excludeCharacter)
    .slice(0, count);

  return {
    data: filteredArticles,
    isLoading,
    isError,
  };
}

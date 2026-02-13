import { BlogAnalysisSummary } from "../types/article";

export const MOCK_ARTICLES: BlogAnalysisSummary[] = [
  {
    id: "1",
    blogUrl: "https://blog.naver.com/trendseeker2024",
    characterName: "앵무새",
    authorName: "트렌드시커",
    mbti: "ENFP",
    representativePostTitle: "완벽한 준비를 기다리다 보면, 준비되지 않은 채로 평생을 살게 된다.",
    topTendency: { label: "트렌드형", score: 88, axisName: "trendEssence" },
    characterSummary: "핫한 소식을 독자와 나누며 함께 진화하는 앵무새 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    blogUrl: "https://brunch.co.kr/@nightowl",
    characterName: "올빼미",
    authorName: "야행성사색가",
    mbti: "INFJ",
    representativePostTitle: "세상이 잠든 새벽, 나는 비로소 깨어나 진짜 나를 만난다.",
    topTendency: { label: "밤형", score: 94, axisName: "nightMorning" },
    characterSummary: "깊이 있는 통찰을 독자와 함께 탐구하는 올빼미 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    blogUrl: "https://tistory.com/storyteller",
    characterName: "코끼리",
    authorName: "이야기꾼",
    mbti: "ISFJ",
    representativePostTitle: "빠르게 쓴 글은 빠르게 잊히지만, 천천히 쓴 글은 오래 기억된다.",
    topTendency: { label: "서사형", score: 91, axisName: "narrativeImpact" },
    characterSummary: "무게감 있는 가치관으로 독자와 신뢰를 쌓는 코끼리 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "4",
    blogUrl: "https://medium.com/@morningroutine",
    characterName: "사자",
    authorName: "아침루틴마스터",
    mbti: "ENTJ",
    representativePostTitle: "성공은 아침 5시에 시작된다. 남들이 자는 시간, 나는 달린다.",
    topTendency: { label: "아침형", score: 96, axisName: "nightMorning" },
    characterSummary: "트렌드를 주도하는 카리스마 있는 전문가 사자 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "5",
    blogUrl: "https://velog.io/@devminimalist",
    characterName: "여우",
    authorName: "미니멀리스트",
    mbti: "INTJ",
    representativePostTitle: "복잡함 속에서 단순함을 찾는 것, 그것이 진정한 지혜다.",
    topTendency: { label: "본질형", score: 89, axisName: "trendEssence" },
    characterSummary: "지혜로운 통찰로 본질을 꿰뚫는 여우 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "6",
    blogUrl: "https://blog.naver.com/quicklearner",
    characterName: "돌고래",
    authorName: "빠른학습자",
    mbti: "ESFP",
    representativePostTitle: "배움은 혼자 하는 것이 아니라, 함께 나눌 때 비로소 완성된다.",
    topTendency: { label: "소통형", score: 93, axisName: "communicationUnilateral" },
    characterSummary: "트렌드의 파도 위에서 독자와 함께 헤엄치는 돌고래 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "7",
    blogUrl: "https://tistory.com/techleader",
    characterName: "독수리",
    authorName: "테크리더",
    mbti: "ESTP",
    representativePostTitle: "기회는 준비된 자에게만 보인다. 나는 항상 준비되어 있다.",
    topTendency: { label: "임팩트형", score: 87, axisName: "narrativeImpact" },
    characterSummary: "핫한 뉴스를 재빨리 포착하고 독자에게 전달하는 독수리 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "8",
    blogUrl: "https://medium.com/@growthmindset",
    characterName: "산양",
    authorName: "성장마인드",
    mbti: "INTP",
    representativePostTitle: "정상은 목표가 아니다. 올라가는 과정 자체가 진짜 목표다.",
    topTendency: { label: "성장형", score: 90, axisName: "completeGrowth" },
    characterSummary: "깊이 있는 통찰력으로 독자를 한 단계 끌어올리는 산양 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "9",
    blogUrl: "https://brunch.co.kr/@earlybird",
    characterName: "사자",
    authorName: "얼리버드",
    mbti: "ESTJ",
    representativePostTitle: "일찍 일어나는 새가 벌레를 잡는다는 말, 정말 사실이었다.",
    topTendency: { label: "완성형", score: 92, axisName: "completeGrowth" },
    characterSummary: "트렌드를 주도하는 카리스마 있는 전문가 사자 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "10",
    blogUrl: "https://velog.io/@deepdiver",
    characterName: "올빼미",
    authorName: "딥다이버",
    mbti: "INFP",
    representativePostTitle: "표면만 스치고 지나가면, 결코 진짜 아름다움을 볼 수 없다.",
    topTendency: { label: "서사형", score: 95, axisName: "narrativeImpact" },
    characterSummary: "깊이 있는 통찰을 독자와 함께 탐구하는 올빼미 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "11",
    blogUrl: "https://tistory.com/trendmaker",
    characterName: "앵무새",
    authorName: "트렌드메이커",
    mbti: "ENTP",
    representativePostTitle: "트렌드를 따라가는 사람과 만드는 사람, 나는 후자다.",
    topTendency: { label: "트렌드형", score: 90, axisName: "trendEssence" },
    characterSummary: "핫한 소식을 독자와 나누며 함께 진화하는 앵무새 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "12",
    blogUrl: "https://blog.naver.com/wisdomkeeper",
    characterName: "코끼리",
    authorName: "지혜지킴이",
    mbti: "ISFP",
    representativePostTitle: "세월이 흘러도 변하지 않는 진리, 그것을 나는 기록한다.",
    topTendency: { label: "본질형", score: 88, axisName: "trendEssence" },
    characterSummary: "무게감 있는 가치관으로 독자와 신뢰를 쌓는 코끼리 블로거",
    viewCount: 0,
    createdAt: new Date(Date.now() - 9 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// 랜덤으로 N개 선택
export function getRandomArticles(count: number): BlogAnalysisSummary[] {
  const shuffled = [...MOCK_ARTICLES].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 특정 캐릭터 제외하고 선택 (Report 페이지용)
export function getArticlesExcluding(
  excludeCharacter: string,
  count: number
): BlogAnalysisSummary[] {
  const filtered = MOCK_ARTICLES.filter(
    (article) => article.characterName !== excludeCharacter
  );
  const shuffled = filtered.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 정렬된 리스트 (Gallery 페이지용)
export function getArticlesSorted(
  sortBy: "latest" | "random" = "latest"
): BlogAnalysisSummary[] {
  if (sortBy === "random") {
    return [...MOCK_ARTICLES].sort(() => Math.random() - 0.5);
  }
  return [...MOCK_ARTICLES].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

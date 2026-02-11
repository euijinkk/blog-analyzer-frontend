export interface BlogAnalysisSummary {
  id: string;
  blogUrl: string;
  blogUrlShort: string; // "blog.naver.com/xxx"

  // 캐릭터 정보
  characterName: string; // "앵무새"
  characterEmoji: string; // "🦜"
  characterImage: string; // "/images/parrot.png"

  // 블로그 작가 이름
  authorName: string; // "김철수"

  // MBTI
  mbti: string; // "ENFP"

  // 대표 문장 (핵심!)
  representativePostTitle: string; // "완벽한 준비를 기다리다 보면..."

  // 가장 극단적인 성향 1개
  topTendency: {
    icon: string; // "🌙"
    label: string; // "밤형"
    score: number; // 92
    axisName: string; // "nightMorning"
  };

  // 한줄 카피 (블로그 색깔)
  oneLinerCopy: string; // "핫한 소식을 독자와 나누며..."

  // 메타 정보
  createdAt: string; // ISO 8601
}

// 성향 축 아이콘 매핑
export const TENDENCY_ICONS: Record<string, { left: string; right: string }> = {
  nightMorning: { left: "🌙", right: "☀️" },
  narrativeImpact: { left: "📖", right: "⚡" },
  trendEssence: { left: "🔥", right: "💎" },
  communicationUnilateral: { left: "💬", right: "📣" },
  completeGrowth: { left: "🏆", right: "🌱" },
};

// 캐릭터별 이모지 및 이미지 매핑
export const CHARACTER_MAP: Record<
  string,
  { emoji: string; image: string }
> = {
  앵무새: { emoji: "🦜", image: "/images/parrot.png" },
  돌고래: { emoji: "🐬", image: "/images/dolphin.png" },
  독수리: { emoji: "🦅", image: "/images/hawk.png" },
  사자: { emoji: "🦁", image: "/images/lion.png" },
  올빼미: { emoji: "🦉", image: "/images/owl.png" },
  코끼리: { emoji: "🐘", image: "/images/wolf.png" },
  산양: { emoji: "🧗", image: "/images/chameleon.png" },
  여우: { emoji: "🦊", image: "/images/puppy.png" },
};

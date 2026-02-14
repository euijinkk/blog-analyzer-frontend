// API에서 오는 데이터
export interface BlogAnalysisSummary {
  id: string;
  blogUrl: string;

  // 캐릭터 정보
  characterName: string; // "앵무새"

  // 블로그 작가 이름
  authorName: string; // "트렌드시커"

  // MBTI
  mbti: string; // "ENFP"

  // 대표 글 제목
  representativePostTitle: string; // "완벽한 준비를 기다리다 보면..."

  // 가장 극단적인 성향 1개
  topTendency: {
    label: string; // "밤형"
    score: number; // 92
    axisName: string; // "nightMorning"
  };

  // 캐릭터 한줄 요약 (character.summary)
  characterSummary: string; // "핫한 소식을 독자와 나누며 함께 진화하는 앵무새 블로거"

  // 조회수 (POST /analyze 호출 시 증가)
  viewCount: number; // 3

  // 메타 정보
  createdAt: string; // ISO 8601
}

// FE에서 결정: 캐릭터별 이모지 및 이미지 매핑
export const CHARACTER_MAP: Record<string, { emoji: string; image: string }> = {
  앵무새: { emoji: '🦜', image: '/images/parrot.png' },
  돌고래: { emoji: '🐬', image: '/images/dolphin.png' },
  카멜레온: { emoji: '🦎', image: '/images/chameleon.png' },
  매: { emoji: '🦅', image: '/images/hawk.png' },
  강아지: { emoji: '🐶', image: '/images/puppy.png' },
  늑대: { emoji: '🐺', image: '/images/wolf.png' },
  올빼미: { emoji: '🦉', image: '/images/owl.png' },
  사자: { emoji: '🦁', image: '/images/lion.png' },
};

// FE에서 결정: 성향 축별 아이콘 매핑
const TENDENCY_AXIS_CONFIG: Record<
  string,
  { leftIcon: string; leftLabel: string; rightIcon: string; rightLabel: string }
> = {
  nightMorning: {
    leftIcon: '🌙',
    leftLabel: '밤형',
    rightIcon: '☀️',
    rightLabel: '아침형',
  },
  narrativeImpact: {
    leftIcon: '📖',
    leftLabel: '서사형',
    rightIcon: '⚡',
    rightLabel: '임팩트형',
  },
  trendEssence: {
    leftIcon: '🔥',
    leftLabel: '트렌드형',
    rightIcon: '💎',
    rightLabel: '본질형',
  },
  communicationUnilateral: {
    leftIcon: '💬',
    leftLabel: '소통형',
    rightIcon: '📣',
    rightLabel: '일방형',
  },
  completeGrowth: {
    leftIcon: '🏆',
    leftLabel: '완성형',
    rightIcon: '🌱',
    rightLabel: '성장형',
  },
};

// FE 헬퍼: 캐릭터 이미지/이모지 가져오기
export function getCharacterVisual(characterName: string) {
  const visual = CHARACTER_MAP[characterName];
  return visual ?? { emoji: '❓', image: '/images/parrot.png' };
}

// FE 헬퍼: 성향 아이콘 결정 (score 기반)
export function getTendencyIcon(axisName: string, score: number): string {
  const config = TENDENCY_AXIS_CONFIG[axisName];
  if (!config) return '📊';
  // score >= 50이면 왼쪽(left), 아니면 오른쪽(right)
  return score >= 50 ? config.leftIcon : config.rightIcon;
}

// FE 헬퍼: 블로그 URL 축약
export function shortenBlogUrl(blogUrl: string): string {
  try {
    const url = new URL(blogUrl);
    return url.hostname + url.pathname.replace(/\/$/, '');
  } catch {
    return blogUrl;
  }
}

// FE 헬퍼: UTM 파라미터 추가
export function appendUtm(blogUrl: string, medium: string): string {
  try {
    const url = new URL(blogUrl);
    url.searchParams.set('utm_source', 'bloganalyzer');
    url.searchParams.set('utm_medium', medium);
    return url.toString();
  } catch {
    return blogUrl;
  }
}

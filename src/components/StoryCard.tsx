import React from "react";
import { AnalysisData, TendencyAxis } from "../api/hooks";

interface StoryCardProps {
  character: AnalysisData["character"];
  mbti: string;
  blogTendency: AnalysisData["blogTendency"];
}

const getAnimalImage = (animalName: string): string => {
  const imageMap: Record<string, string> = {
    앵무새: "parrot.png",
    돌고래: "dolphin.png",
    카멜레온: "chameleon.png",
    매: "hawk.png",
    강아지: "puppy.png",
    늑대: "wolf.png",
    올빼미: "owl.png",
    사자: "lion.png",
  };
  return imageMap[animalName] || "parrot.png";
};

const tendencyConfig: Record<
  string,
  { category: string; leftLabel: string; rightLabel: string }
> = {
  nightMorning: { category: "시간대", leftLabel: "밤형", rightLabel: "아침형" },
  narrativeImpact: {
    category: "글쓰기",
    leftLabel: "서사형",
    rightLabel: "임팩트형",
  },
  trendEssence: {
    category: "관심사",
    leftLabel: "트렌드형",
    rightLabel: "본질형",
  },
  communicationUnilateral: {
    category: "소통",
    leftLabel: "소통형",
    rightLabel: "일방형",
  },
  completeGrowth: {
    category: "성장",
    leftLabel: "완성형",
    rightLabel: "성장형",
  },
};

function TendencyBar({
  axisKey,
  axis,
}: {
  axisKey: string;
  axis: TendencyAxis;
}) {
  const config = tendencyConfig[axisKey];
  if (!config) return null;
  const rightScore = 100 - axis.score;
  const isLeftDominant = axis.score >= 50;

  return (
    <div style={{ marginBottom: 8 }}>
      {/* 라벨 행 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: isLeftDominant ? "#FF3000" : "#bbb",
            width: 48,
          }}
        >
          {config.leftLabel}
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 900,
            color: "#000",
            letterSpacing: 1,
          }}
        >
          {config.category}
        </span>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: !isLeftDominant ? "#FF3000" : "#bbb",
            width: 48,
            textAlign: "right",
          }}
        >
          {config.rightLabel}
        </span>
      </div>
      {/* 바 행 */}
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span
          style={{
            fontSize: 10,
            fontWeight: 900,
            width: 28,
            textAlign: "left",
            color: isLeftDominant ? "#000" : "#999",
          }}
        >
          {axis.score}%
        </span>
        <div
          style={{
            flex: 1,
            height: 10,
            backgroundColor: "#EEEEEE",
            borderRadius: 5,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${axis.score}%`,
              height: "100%",
              backgroundColor: "#FF3000",
              borderRadius: 5,
            }}
          />
        </div>
        <span
          style={{
            fontSize: 10,
            fontWeight: 900,
            width: 28,
            textAlign: "right",
            color: !isLeftDominant ? "#000" : "#999",
          }}
        >
          {rightScore}%
        </span>
      </div>
    </div>
  );
}

export const StoryCard = React.forwardRef<HTMLDivElement, StoryCardProps>(
  ({ character, mbti, blogTendency }, ref) => {
    const imageSrc = `${window.location.origin}/images/${getAnimalImage(character.animal)}`;

    return (
      <div
        ref={ref}
        style={{
          width: 540,
          height: 540,
          backgroundColor: "#FFFFFF",
          fontFamily: "'Inter', sans-serif",
          display: "flex",
          flexDirection: "column",
          padding: "32px 36px 28px",
          boxSizing: "border-box",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 상단 제목 */}
        <h2
          style={{
            fontSize: 18,
            fontWeight: 900,
            color: "#000",
            margin: "0 0 16px 0",
            letterSpacing: 1,
          }}
        >
          블로그 성향 분석
        </h2>

        {/* 캐릭터 영역: 이미지 + 이름/MBTI/요약 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <img
            src={imageSrc}
            alt={character.animal}
            style={{
              width: 148,
              height: 148,
              objectFit: "contain",
              flexShrink: 0,
            }}
            crossOrigin="anonymous"
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 6,
              }}
            >
              <h1
                style={{
                  fontSize: 44,
                  fontWeight: 900,
                  color: "#000",
                  margin: 0,
                  letterSpacing: -1,
                  lineHeight: 1,
                }}
              >
                {character.animal}
              </h1>
              <span
                style={{
                  color: "#999",
                  fontWeight: 900,
                  fontSize: 36,
                  letterSpacing: 2,
                }}
              >
                {mbti}
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: "#FF3000",
                margin: 0,
                lineHeight: 1.4,
                wordBreak: "keep-all",
              }}
            >
              "{character.summary}"
            </p>
          </div>
        </div>

        {/* 구분선 */}
        <div
          style={{
            height: 3,
            backgroundColor: "#000",
            marginBottom: 16,
          }}
        />

        {/* 성향 바 */}
        <div>
          {Object.entries(blogTendency).map(([key, axis]) => (
            <TendencyBar key={key} axisKey={key} axis={axis} />
          ))}
        </div>

        {/* 하단 CTA */}
        <div
          style={{
            marginTop: "auto",
            borderTop: "2px solid #E5E5E5",
            paddingTop: 12,
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: 900,
              color: "#FF3000",
              letterSpacing: 0.5,
            }}
          >
            blog-analyzer.pages.dev
          </span>
        </div>
      </div>
    );
  }
);

StoryCard.displayName = "StoryCard";

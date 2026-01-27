// React is used in JSX transformations

interface MbtiSectionProps {
  mbti: string;
  explanation: {
    "E/I": string;
    "S/N": string;
    "T/F": string;
    "J/P": string;
    [key: string]: string;
  };
}

type MbtiLetter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export function MbtiSection({ mbti, explanation }: MbtiSectionProps) {
  const mbtiStyles: Record<MbtiLetter, string> = {
    E: "bg-black text-white",
    I: "bg-white text-black border-2 border-black",
    S: "bg-black text-white",
    N: "bg-swiss-accent text-white",
    T: "bg-white text-black border-2 border-black",
    F: "bg-black text-white",
    J: "bg-swiss-accent text-white",
    P: "bg-white text-black border-2 border-black",
  };

  const getMbtiStyle = (letter: string): string => {
    return mbtiStyles[letter as MbtiLetter] || "bg-white text-black border-2 border-black";
  };

  return (
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">02</span>
        MBTI PREDICTION
      </h2>
      <div className="flex justify-center mb-12">
        <div className="flex space-x-3">
          {mbti.split("").map((letter, index) => (
            <div
              key={index}
              className={`${getMbtiStyle(letter)} w-16 h-16 md:w-20 md:h-20 flex items-center justify-center`}
            >
              <span className="text-3xl md:text-4xl font-black">{letter}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {Object.values(explanation).map((value, index) => {
          const key = mbti[index];
          return (
            <div key={key} className="border-2 border-black p-6">
              <h3 className="font-black text-xl mb-2 uppercase">{key}</h3>
              <p className="text-black">{value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

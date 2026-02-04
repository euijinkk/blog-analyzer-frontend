// React is used in JSX transformations

interface CharacterSectionProps {
  character: {
    animal: string;
    summary: string;
  };
}

const getAnimalImage = (animalName: string): string => {
  const imageMap: Record<string, string> = {
    "앵무새": "parrot.png",
    "돌고래": "dolphin.png",
    "카멜레온": "chameleon.png",
    "매": "hawk.png",
    "강아지": "puppy.png",
    "늑대": "wolf.png",
    "올빼미": "owl.png",
    "사자": "lion.png",
  };
  return imageMap[animalName] || "parrot.png";
};

export function CharacterSection({ character }: CharacterSectionProps) {
  const animalName = character.animal
  const imagePath = `/images/${getAnimalImage(animalName)}`;

  return (
    <section className="swiss-card">
      <h2 className="text-2xl font-black mb-8 flex items-center uppercase tracking-wide">
        <span className="swiss-section-number">01</span>
        당신의 블로그 캐릭터
      </h2>
      <div className="text-center">
        <img
          src={imagePath}
          alt={animalName}
          className="w-48 h-48 mx-auto object-contain mb-6"
        />
        <div className="text-2xl font-black mb-4 uppercase">{animalName}</div>
        <p className="text-black text-lg leading-relaxed">{character.summary}</p>
      </div>
    </section>
  );
}

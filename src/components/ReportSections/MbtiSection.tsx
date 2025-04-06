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

type MbtiLetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export function MbtiSection({
  mbti,
  explanation
}: MbtiSectionProps) {
  const mbtiColors: Record<MbtiLetter, string> = {
    E: 'bg-red-100 text-red-800',
    I: 'bg-blue-100 text-blue-800',
    S: 'bg-green-100 text-green-800',
    N: 'bg-purple-100 text-purple-800',
    T: 'bg-amber-100 text-amber-800',
    F: 'bg-pink-100 text-pink-800',
    J: 'bg-cyan-100 text-cyan-800',
    P: 'bg-orange-100 text-orange-800'
  };
  
  const getMbtiLetterClass = (letter: string): string => {
    return mbtiColors[letter as MbtiLetter] || 'bg-gray-100 text-gray-800';
  };
  return <section className="bg-white rounded-3xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">
          2
        </span>
        MBTI 예측
      </h2>
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {mbti.split('').map((letter, index) => <div key={index} className={`${getMbtiLetterClass(letter)} w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm`}>
              <span className="text-2xl font-bold">{letter}</span>
            </div>)}
        </div>
      </div>
      <div className="space-y-4">
        {Object.entries(explanation).map(([key, value]) => <div key={key} className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-semibold mb-1">{key}</h3>
            <p className="text-gray-700">{value}</p>
          </div>)}
      </div>
    </section>;
}
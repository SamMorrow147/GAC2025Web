import { AnimatedDigitalNumber } from "./AnimatedDigitalNumber";

export function StatsSection() {
  const stats = [
    {
      number: "50+",
      label: "CAMPS NATIONWIDE"
    },
    {
      number: "6200+",
      label: "PLAYERS TRAINED"
    },
    {
      number: "30+",
      label: "YEARS OF DEVELOPMENT EXCELLENCE"
    }
  ];

  const renderLabel = (label: string) => {
    const words = label.split(' ');
    const firstWord = words[0];
    const remainingWords = words.slice(1).join(' ');
    
    return (
      <div className="flex flex-col items-center gap-1 mt-4">
        <span className="text-2xl font-bold text-black drop-shadow-sm">{firstWord}</span>
        {remainingWords && (
          <span className="text-sm text-gray-600 tracking-widest uppercase drop-shadow-sm">
            {remainingWords}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Digital display section */}
              <div className="flex justify-center">
                {/* Display frame with inset shadow - fitted to content */}
                <div 
                  className="
                    bg-gradient-to-br from-black via-gray-900 to-black
                    rounded-2xl p-8
                    border-2 border-gray-700
                    shadow-[inset_4px_4px_12px_rgba(0,0,0,0.8),_inset_-2px_-2px_8px_rgba(255,255,255,0.05)]
                    relative
                    inline-block
                    transform hover:scale-105 transition-transform duration-300
                  "
                >
                  {/* Screen glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-red-500/5 pointer-events-none" />
                  
                  {/* Digital number display */}
                  <div className="relative z-10">
                    <AnimatedDigitalNumber 
                      value={stat.number} 
                      duration={2500}
                      delay={index * 500}
                    />
                  </div>
                </div>
              </div>
              
              {/* Label section */}
              <div className="px-2">
                {renderLabel(stat.label)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
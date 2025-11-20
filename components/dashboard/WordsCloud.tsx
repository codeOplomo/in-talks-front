import React, { useState, useEffect, useMemo } from 'react';

interface Word {
  text: string;
  value: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  theme: 'emerging' | 'decreasing' | 'new';
}

const WordCloud = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [hoveredWord, setHoveredWord] = useState<number | null>(null);

  // Sample data - replace with your own
  const wordData = useMemo(() => [
    { text: 'JavaScript', value: 90 },
    { text: 'React', value: 85 },
    { text: 'Next.js', value: 80 },
    { text: 'TypeScript', value: 75 },
    { text: 'CSS', value: 70 },
    { text: 'HTML', value: 65 },
    { text: 'Node.js', value: 60 },
    { text: 'API', value: 55 },
    { text: 'Database', value: 50 },
    { text: 'Frontend', value: 48 },
    { text: 'Backend', value: 45 },
    { text: 'Design', value: 42 },
    { text: 'Testing', value: 40 },
    { text: 'Deploy', value: 38 },
    { text: 'Cloud', value: 35 },
    { text: 'Mobile', value: 33 },
    { text: 'Web', value: 30 },
    { text: 'Performance', value: 28 },
    { text: 'Security', value: 25 },
    { text: 'DevOps', value: 22 },
    { text: 'Analytics', value: 20 },
    { text: 'UI/UX', value: 18 },
    { text: 'Git', value: 15 },
    { text: 'Docker', value: 12 },
    { text: 'AWS', value: 10 }
  ], []);

  const themeColors = useMemo(() => ({
    emerging: ['#d1fae5', '#10b981', '#047857'], // light green, green, dark green
    decreasing: ['#fecaca', '#ef4444', '#dc2626'], // light red, red, dark red
    new: ['#dbeafe', '#3b82f6', '#1d4ed8'] // light blue, blue, dark blue
  }), []);

  useEffect(() => {
    const minValue = Math.min(...wordData.map(w => w.value));
    const maxValue = Math.max(...wordData.map(w => w.value));
    
    // Generate random positions for words
    const positioned = wordData.map((word, index) => {
      const angle = (index / wordData.length) * Math.PI * 2;
      const radius = 150 + Math.random() * 150;
      const x = Math.cos(angle) * radius + Math.random() * 100 - 50;
      const y = Math.sin(angle) * radius + Math.random() * 100 - 50;
      
      // Assign theme and color based on value percentile
      const percentile = (word.value - minValue) / (maxValue - minValue);
      let theme: 'emerging' | 'decreasing' | 'new';
      let colorIndex: number;
      
      if (percentile < 0.33) {
        theme = 'new';
        colorIndex = Math.floor((percentile / 0.33) * (themeColors.new.length - 1));
      } else if (percentile < 0.66) {
        theme = 'emerging';
        colorIndex = Math.floor(((percentile - 0.33) / 0.33) * (themeColors.emerging.length - 1));
      } else {
        theme = 'decreasing';
        colorIndex = Math.floor(((percentile - 0.66) / 0.34) * (themeColors.decreasing.length - 1));
      }
      
      const color = themeColors[theme][colorIndex];
      
      return {
        ...word,
        x,
        y,
        color,
        rotation: Math.random() * 40 - 20,
        theme
      };
    });
    setWords(positioned);
  }, [wordData, themeColors]);

  const getFontSize = (value: number) => {
    const minSize = 12;
    const maxSize = 48;
    const minValue = Math.min(...wordData.map(w => w.value));
    const maxValue = Math.max(...wordData.map(w => w.value));
    return minSize + ((value - minValue) / (maxValue - minValue)) * (maxSize - minSize);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Top Mentions</h1>
          <p className="text-slate-300">Hover over words to see their weight</p>
        </div>

        <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-16 shadow-2xl border border-slate-700">
          <div className="relative h-[500px] flex items-center justify-center">
            {words.map((word, index) => {
              const fontSize = getFontSize(word.value);
              const isHovered = hoveredWord === index;
              
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-300 cursor-pointer select-none"
                  style={{
                    left: `calc(50% + ${word.x}px)`,
                    top: `calc(50% + ${word.y}px)`,
                    transform: `translate(-50%, -50%) rotate(${word.rotation}deg) scale(${isHovered ? 1.2 : 1})`,
                    fontSize: `${fontSize}px`,
                    color: word.color,
                    fontWeight: isHovered ? '800' : '600',
                    textShadow: isHovered 
                      ? `0 0 20px ${word.color}80, 0 0 40px ${word.color}40`
                      : `0 2px 4px rgba(0,0,0,0.3)`,
                    zIndex: isHovered ? 100 : Math.floor(word.value)
                  }}
                  onMouseEnter={() => setHoveredWord(index)}
                  onMouseLeave={() => setHoveredWord(null)}
                >
                  {word.text}
                  {isHovered && (
                    <div 
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-700 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ transform: `translateX(-50%) rotate(${-word.rotation}deg)` }}
                    >
                      Weight: {word.value}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-8 flex-wrap">
          {Object.entries(themeColors).map(([theme, colors]) => (
            <div key={theme} className="flex items-center gap-3">
              <span className="text-white capitalize text-sm font-medium">{theme} Themes</span>
              <div className="flex gap-1">
                {colors.map((color, i) => (
                  <div key={i} className="w-4 h-4 rounded-sm border border-slate-600" style={{ backgroundColor: color }}></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700">
            <span className="text-slate-400 text-sm">Total words:</span>
            <span className="text-white font-semibold">{words.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
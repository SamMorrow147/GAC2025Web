import React from 'react';

interface DigitalDigitProps {
  digit: string;
}

export function DigitalDigit({ digit }: DigitalDigitProps) {
  // Convert the SCSS dot positions to JavaScript
  // Grid layout: 4 columns x 7 rows (positions 1-28) for regular digits
  // Grid layout: 3 columns x 7 rows (positions 1-21) for "+" symbol
  const dotPositions: { [key: string]: number[] } = {
    '0': [1, 2, 3, 4, 5, 8, 9, 12, 13, 16, 17, 20, 21, 24, 25, 26, 27, 28],
    '1': [4, 8, 12, 16, 20, 24, 28],
    '2': [1, 2, 3, 4, 8, 12, 13, 14, 15, 16, 17, 21, 25, 26, 27, 28],
    '3': [1, 2, 3, 4, 8, 12, 14, 15, 16, 20, 24, 25, 26, 27, 28],
    '4': [1, 4, 5, 8, 9, 12, 13, 14, 15, 16, 20, 24, 28],
    '5': [1, 2, 3, 4, 5, 9, 13, 14, 15, 16, 20, 24, 25, 26, 27, 28],
    '6': [1, 5, 9, 13, 14, 15, 16, 17, 21, 20, 24, 25, 26, 27, 28],
    '7': [1, 2, 3, 4, 8, 12, 16, 20, 24, 28],
    '8': [1, 2, 3, 4, 5, 8, 9, 12, 13, 14, 15, 16, 17, 20, 21, 24, 25, 26, 27, 28],
    '9': [1, 2, 3, 4, 5, 8, 9, 12, 13, 14, 15, 16, 20, 24, 28],
    '+': [8, 10, 11, 12, 14], // 3-column grid: balanced plus with 3 vertical + 3 horizontal dots
    ',': [25, 26],
  };

  const activeDots = dotPositions[digit] || [];
  
  // Special handling for "+" symbol with 3 columns
  if (digit === '+') {
    return (
      <div className="bg-black p-0.5 grid grid-cols-3 gap-0.5 w-fit">
        {Array.from({ length: 21 }, (_, index) => {
          const dotNumber = index + 1;
          const isActive = activeDots.includes(dotNumber);
          
          return (
            <div
              key={index}
              className={`
                w-2 h-2 rounded-full
                ${isActive 
                  ? 'bg-gradient-to-r from-orange-400 to-red-600 shadow-[0_0_4px_2px_rgba(255,0,0,0.3)]' 
                  : 'bg-gradient-to-r from-gray-800 to-gray-900'
                }
              `}
            />
          );
        })}
      </div>
    );
  }

  // Standard 4-column grid for all other characters
  return (
    <div className="bg-black p-0.5 grid grid-cols-4 gap-0.5 w-fit">
      {Array.from({ length: 28 }, (_, index) => {
        const dotNumber = index + 1;
        const isActive = activeDots.includes(dotNumber);
        
        return (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full
              ${isActive 
                ? 'bg-gradient-to-r from-orange-400 to-red-600 shadow-[0_0_4px_2px_rgba(255,0,0,0.3)]' 
                : 'bg-gradient-to-r from-gray-800 to-gray-900'
              }
            `}
          />
        );
      })}
    </div>
  );
} 
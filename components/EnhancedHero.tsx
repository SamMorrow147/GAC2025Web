import React, { createContext, useContext, useRef, useState } from 'react';
import InteractiveHero from './InteractiveHero';
import IceRinkFeatureSection from './IceRinkFeatureSection';

interface PuckControlContextType {
  shootPuckToTarget: (targetX: number, targetY: number, panelName: string) => void;
}

const PuckControlContext = createContext<PuckControlContextType | null>(null);

export const usePuckControl = () => {
  const context = useContext(PuckControlContext);
  if (!context) {
    throw new Error('usePuckControl must be used within a PuckControlProvider');
  }
  return context;
};

export default function EnhancedHero() {
  const [puckTargetData, setPuckTargetData] = useState<{x: number, y: number, panelName: string} | null>(null);

  const shootPuckToTarget = (targetX: number, targetY: number, panelName: string) => {
    setPuckTargetData({ x: targetX, y: targetY, panelName });
  };

  return (
    <PuckControlContext.Provider value={{ shootPuckToTarget }}>
      <div className="relative w-full">
        {/* Top Gradient Overlay for Navigation - Using inline styles for reliability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '250px',
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 20%, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0.2) 80%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 500,
            pointerEvents: 'none'
          }}
        />
        
        {/* Interactive Hero Background */}
        <InteractiveHero puckTargetData={puckTargetData} onPuckTargetComplete={() => setPuckTargetData(null)} />
        
        {/* Feature Section Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl z-10 pointer-events-none">
          <IceRinkFeatureSection />
        </div>
      </div>
    </PuckControlContext.Provider>
  );
} 
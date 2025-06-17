import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import styled, { keyframes, css } from 'styled-components';

interface PuckTargetData {
  x: number;
  y: number;
  panelName: string;
}

interface InteractiveHeroProps {
  puckTargetData?: PuckTargetData | null;
  onPuckTargetComplete?: () => void;
}

const HeroContainer = styled.div`
  position: relative;
  width: 100vw;
  min-width: 100vw;
  height: 75vh;
  max-height: 75vh;
  min-height: 750px;
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: crosshair;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
`;

const BackgroundImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw !important;
  height: 75vh !important;
  max-height: 75vh;
  min-height: 750px;
  object-fit: cover;
  object-position: center bottom;
  z-index: 0;
  display: block;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
`;

const spinAnimation = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(-60px, -80px) rotate(90deg);
  }
  50% {
    transform: translate(-120px, -40px) rotate(180deg);
  }
  65% {
    transform: translate(-180px, 0) rotate(180deg);
  }
  80% {
    transform: translate(-90px, 0) rotate(180deg);
  }
  100% {
    transform: translate(0, 0) rotate(180deg);
  }
`;

const getCurveAnimation = (zone: number, relativePosition: number, isReturn: boolean = false) => {
  // relativePosition: 0 (left edge) to 1 (right edge) within the zone
  const curveStrength = Math.abs(relativePosition - 0.5) * 2; // 0 at center, 1 at edges

  switch (zone) {
    case 0: // Left zone, curve up and right toward center
      return keyframes`
        0% {
          transform: translate(${isReturn ? '120px' : '0'}, ${isReturn ? '-350px' : '0'}) scale(${isReturn ? '0.01' : '1'});
        }
        50% {
          transform: translate(${isReturn ? '60px' : '60px'}, ${isReturn ? '-200px' : '-200px'}) scale(${isReturn ? '0.5' : '0.5'});
        }
        100% {
          transform: translate(${isReturn ? '0' : '120px'}, ${isReturn ? '0' : '-350px'}) scale(${isReturn ? '1' : '0.01'});
        }
      `;
    case 1: // Center zone, straight up
      return keyframes`
        0% {
          transform: translate(${isReturn ? '0' : '0'}, ${isReturn ? '-350px' : '0'}) scale(${isReturn ? '0.01' : '1'});
        }
        100% {
          transform: translate(${isReturn ? '0' : '0'}, ${isReturn ? '0' : '-350px'}) scale(${isReturn ? '1' : '0.01'});
        }
      `;
    case 2: // Right zone, curve up and left toward center
      return keyframes`
        0% {
          transform: translate(${isReturn ? '-120px' : '0'}, ${isReturn ? '-350px' : '0'}) scale(${isReturn ? '0.01' : '1'});
        }
        50% {
          transform: translate(${isReturn ? '-60px' : '-60px'}, ${isReturn ? '-200px' : '-200px'}) scale(${isReturn ? '0.5' : '0.5'});
        }
        100% {
          transform: translate(${isReturn ? '0' : '-120px'}, ${isReturn ? '0' : '-350px'}) scale(${isReturn ? '1' : '0.01'});
        }
      `;
    default:
      return keyframes``;
  }
};

const subtleMovement = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(7.5px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(-7.5px);
  }
  100% {
    transform: translateX(0);
  }
`;

const RedStroke = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 1px solid rgba(255, 0, 0, 0.5);
  border-radius: 1rem;
  pointer-events: none;
  z-index: 2;
`;

const RedBorderElement = styled.div`
  border-left: 2px solid red;
  border-bottom: 2px solid red;
  border-top: 2px solid red;
  border-radius: 0px 0px 0px 22px;
  margin-left: 18px;
  margin-right: 8px;
  min-height: 76%;
  width: 20px;
  height: 130px;
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PuckImage = styled(Image).withConfig({
  shouldForwardProp: (prop) => !['isShooting', 'isReturning', 'isSpinning', 'isTargetShooting', 'isTargetReturning', 'zone'].includes(prop)
})<{ 
  x: number; 
  y: number; 
  size: number; 
  isShooting: boolean; 
  isReturning: boolean; 
  isSpinning: boolean; 
  zone: number; 
  isTargetShooting?: boolean;
  isTargetReturning?: boolean;
}>`
  position: absolute;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  width: ${props => props.size}px !important;
  height: auto !important;
  max-width: ${props => props.size}px;
  object-fit: contain;
  transform: translateY(0);
  z-index: ${props => (props.isTargetShooting || props.isTargetReturning) ? 10 : 1};
  transition: ${props => !props.isShooting && !props.isReturning && !props.isSpinning && !props.isTargetShooting && !props.isTargetReturning ? 'left 0.1s ease-out, top 0.1s ease-out' : 'none'};
  ${props => {
    if (props.isSpinning) {
      return css`
        animation: ${spinAnimation} 0.5s ease-in-out forwards;
      `;
    }
    if (props.isTargetShooting) {
      return css`
        animation: ${getCurveAnimation(props.zone, 0, false)} 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      `;
    }
    if (props.isTargetReturning) {
      return css`
        animation: ${getCurveAnimation(props.zone, 0, true)} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      `;
    }
    if (props.isShooting) {
      return css`
        animation: ${getCurveAnimation(props.zone, 0, false)} 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      `;
    }
    if (props.isReturning) {
      return css`
        animation: ${getCurveAnimation(props.zone, 0, true)} 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      `;
    }
    return css`
      animation: ${subtleMovement} 0.8s ease-in-out infinite;
    `;
  }}
  pointer-events: ${props => props.isShooting || props.isReturning || props.isSpinning || props.isTargetShooting || props.isTargetReturning ? 'none' : 'auto'};
`;

const InteractiveHero = ({ puckTargetData, onPuckTargetComplete }: InteractiveHeroProps) => {
  const [puckX, setPuckX] = useState(0);
  const [puckY, setPuckY] = useState(0);
  const [puckSize, setPuckSize] = useState(100);
  const [isShooting, setIsShooting] = useState(false);
  const [isReturning, setIsReturning] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isTargetShooting, setIsTargetShooting] = useState(false);
  const [isTargetReturning, setIsTargetReturning] = useState(false);
  const [zone, setZone] = useState(1);
  const [shootOrigin, setShootOrigin] = useState<{x: number, y: number} | null>(null);


  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const puckRef = useRef<HTMLImageElement>(null);

  const getPuckImage = (zone: number) => {
    switch (zone) {
      case 0:
        return "/images/hockey/NewpuckLeft.png";
      case 1:
        return "/images/hockey/NewPuck.png";
      case 2:
        return "/images/hockey/Newpuckright.png";
      default:
        return "/images/hockey/NewPuck.png";
    }
  };

  const calculatePuckSize = useCallback(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const size = Math.min(Math.max(width * 0.15, 80), 160);
      setPuckSize(size);
    }
  }, []);

  const calculatePuckY = useCallback(() => {
    if (containerRef.current && backgroundRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const backgroundRect = backgroundRef.current.getBoundingClientRect();
      const backgroundBottom = backgroundRect.bottom - rect.top;
      return backgroundBottom - 180;
    }
    return 0;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current && backgroundRef.current && !isShooting && !isSpinning && !isTargetShooting && !isTargetReturning) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = calculatePuckY() + 20;
      setPuckX(x - puckSize / 2);
      setPuckY(y);
      const width = rect.width;
      const zoneWidth = width / 3;
      const currentZone = Math.floor(x / zoneWidth);
      if (currentZone !== zone) setZone(currentZone);
    }
  }, [isShooting, isSpinning, isTargetShooting, isTargetReturning, puckSize, calculatePuckY, zone]);

  const handleResize = useCallback(() => {
    calculatePuckSize();
    if (containerRef.current && backgroundRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const width = rect.width;
      const zoneWidth = width / 3;
      setPuckX((zone + 0.5) * zoneWidth - puckSize / 2);
      setPuckY(calculatePuckY() + 20);
    }
  }, [calculatePuckSize, calculatePuckY, puckSize, zone]);

  // Handle target shooting when puckTargetData changes
  useEffect(() => {
    if (puckTargetData && !isShooting && !isReturning && !isSpinning && !isTargetShooting && !isTargetReturning) {
      if (containerRef.current) {
        setIsTargetShooting(true);
        
        // After shooting animation, start return
        setTimeout(() => {
          setIsTargetShooting(false);
          setIsTargetReturning(true);
          
          // After return animation, reset
          setTimeout(() => {
            setIsTargetReturning(false);
            onPuckTargetComplete?.();
          }, 400);
        }, 1000);
      }
    }
  }, [puckTargetData, isShooting, isReturning, isSpinning, isTargetShooting, isTargetReturning, onPuckTargetComplete]);

  const handleClick = (e: React.MouseEvent) => {
    if (containerRef.current && !isShooting && !isReturning && !isSpinning && !isTargetShooting && !isTargetReturning) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const zoneWidth = width / 3;
      const clickedZone = Math.floor(x / zoneWidth);
      const relativePosition = (x % zoneWidth) / zoneWidth;

      setShootOrigin({ x: puckX, y: puckY + 20 });
      setIsShooting(true);
      
      // After shooting, wait a moment then return
      setTimeout(() => {
        setIsShooting(false);
        setIsReturning(true);
        
        // After returning, reset everything
        setTimeout(() => {
          setIsReturning(false);
          setShootOrigin(null);
          setPuckY(calculatePuckY() + 20);
        }, 400);
      }, 1000);
    }
  };

  const handlePuckClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isShooting && !isReturning && !isSpinning && !isTargetShooting && !isTargetReturning) {
      setIsSpinning(true);
      setTimeout(() => {
        setIsSpinning(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleMouseMove, handleResize]);

  useEffect(() => {
    handleResize();
  }, [zone, puckSize]);

  return (
    <HeroContainer ref={containerRef} onClick={handleClick}>
      <BackgroundImage
        ref={backgroundRef}
        src="/images/hockey/Newbackground.jpg"
        alt="Hockey Background"
        width={1920}
        height={1080}
        priority
      />
      <RedStroke />
      <RedBorderElement />
      <PuckImage
        ref={puckRef}
        src={getPuckImage(zone)}
        alt="Hockey Puck"
        width={puckSize}
        height={puckSize}
        x={isShooting && shootOrigin ? shootOrigin.x : puckX}
        y={isShooting && shootOrigin ? shootOrigin.y : puckY}
        size={puckSize}
        isShooting={isShooting}
        isReturning={isReturning}
        isSpinning={isSpinning}
        isTargetShooting={isTargetShooting}
        isTargetReturning={isTargetReturning}
        zone={zone}
        onClick={handlePuckClick}
        priority
      />
    </HeroContainer>
  );
};

export default InteractiveHero; 
import { useState, useRef, useEffect } from "react";
import InteractiveGlassPanels from "./InteractiveGlassPanels";
import SkewedText3D from "./SkewedText3D";
import styled from "styled-components";
import { usePuckControl } from "./EnhancedHero";
import Image from "next/image";

const SkewedTextContainer = styled.div`
  position: relative;
  width: auto;
  min-width: 180px;
  height: 100px;
  margin: 0;
  padding: 32px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  transform: skew(-12deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  pointer-events: auto;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: skew(-12deg);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  }
`;

export default function IceRinkFeatureSection() {
  const [hoveredPanel, setHoveredPanel] = useState<string | null>(null);
  const { shootPuckToTarget } = usePuckControl();
  
  // Refs for panel elements to get their positions
  const summerCampsRef = useRef<SVGPathElement>(null);
  const skillClinicsRef = useRef<SVGPathElement>(null);
  const threeOnThreeRef = useRef<SVGPathElement>(null);
  const springLeagueRef = useRef<SVGPathElement>(null);
  
  const summerCampsTextRef = useRef<HTMLDivElement>(null);
  const skillClinicsTextRef = useRef<HTMLDivElement>(null);
  const threeOnThreeTextRef = useRef<HTMLDivElement>(null);
  const springLeagueTextRef = useRef<HTMLDivElement>(null);

  const calculateElementCenter = (element: Element): { x: number, y: number } => {
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  };

  const handlePanelClick = (panelName: string) => {
    console.log(`${panelName} clicked!`);
    
    // Get the appropriate ref based on panel name
    let targetElement: Element | null = null;
    
    switch (panelName) {
      case "summer-camps":
        targetElement = summerCampsRef.current || summerCampsTextRef.current;
        break;
      case "skill-clinics":
        targetElement = skillClinicsRef.current || skillClinicsTextRef.current;
        break;
      case "3on3-league":
        targetElement = threeOnThreeRef.current || threeOnThreeTextRef.current;
        break;
      case "spring-league":
        targetElement = springLeagueRef.current || springLeagueTextRef.current;
        break;
    }
    
    if (targetElement) {
      const center = calculateElementCenter(targetElement);
      shootPuckToTarget(center.x, center.y, panelName);
    }
  };

  const handlePanelHover = (panel: string | null) => {
    setHoveredPanel(panel);
  };

  return (
    <div className="relative w-full max-w-6xl h-full flex items-center justify-center pointer-events-none" style={{ top: '10px', zIndex: -1 }}>
      <div className="relative w-[90%] h-[70%] flex items-center justify-center pointer-events-none">
        <div className="relative size-full flex items-center justify-center pointer-events-none">
          <svg 
            className="block size-full overflow-visible" 
            fill="none" 
            preserveAspectRatio="xMidYMid meet" 
            viewBox="0 0 1109 381" 
            style={{ 
              overflow: 'visible', 
              maxWidth: '100%', 
              maxHeight: '100%',
              pointerEvents: 'none'
            }}
          >
            <g id="Group 18" style={{ pointerEvents: 'none' }}>
              <path 
                ref={summerCampsRef}
                d="M1.64453 23.4326C1.64458 9.6344 14.2742 -0.645221 27.7129 2.01367L28.3535 2.15039L256.628 54.2764C266.561 56.5456 273.605 65.3778 273.605 75.5586V305.379C273.605 315.401 266.78 324.117 257.091 326.551L256.628 326.661L28.3535 378.787C14.6784 381.908 1.64456 371.522 1.64453 357.505V23.4326Z" 
                fill="#BDC3CD" 
                fillOpacity="0.36" 
                stroke={hoveredPanel === "summer-camps" ? "#FF0000" : "url(#paint0_linear_2037_1008)"}
                strokeWidth="3" 
                className="cursor-pointer glass-panel"
                style={{ 
                  filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px)',
                  transform: hoveredPanel === "summer-camps" ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center', 
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'auto'
                }}
                onMouseEnter={() => handlePanelHover("summer-camps")}
                onMouseLeave={() => handlePanelHover(null)}
                onClick={() => handlePanelClick("summer-camps")}
              />
              <path 
                ref={skillClinicsRef}
                d="M1106.95 23.4326C1106.95 9.6344 1094.32 -0.645221 1080.88 2.01367L1080.24 2.15039L851.964 54.2764C842.03 56.5456 834.986 65.3778 834.986 75.5586V305.379C834.986 315.401 841.812 324.117 851.501 326.551L851.964 326.661L1080.24 378.787C1093.91 381.908 1106.95 371.522 1106.95 357.505V23.4326Z" 
                fill="#BDC3CD" 
                fillOpacity="0.36" 
                stroke={hoveredPanel === "skill-clinics" ? "#3b82f6" : "url(#paint1_linear_2037_1008)"}
                strokeWidth="3" 
                className="cursor-pointer glass-panel"
                style={{ 
                  filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px)',
                  transform: hoveredPanel === "skill-clinics" ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center', 
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'auto'
                }}
                onMouseEnter={() => handlePanelHover("skill-clinics")}
                onMouseLeave={() => handlePanelHover(null)}
                onClick={() => handlePanelClick("skill-clinics")}
              />
              <path 
                ref={threeOnThreeRef}
                d="M340.691 100.19C341.083 86.723 353.525 76.8086 366.75 79.4253L367.391 79.562L498.045 109.398C507.978 111.667 515.022 120.499 515.022 130.68V250.251C515.022 260.273 508.197 268.989 498.508 271.423L498.045 271.534L367.391 301.37C353.716 304.49 340.682 294.105 340.682 280.087V100.844L340.691 100.19Z" 
                fill="#BDC3CD" 
                fillOpacity="0.36" 
                stroke="url(#paint2_linear_2037_1008)" 
                strokeWidth="3" 
                className={`cursor-pointer glass-panel ${hoveredPanel === "3on3-league" ? "panel-hover-red" : ""}`}
                style={{ 
                  filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px)', 
                  transform: hoveredPanel === "3on3-league" ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center', 
                  transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'auto'
                }}
                onMouseEnter={() => handlePanelHover("3on3-league")}
                onMouseLeave={() => handlePanelHover(null)}
                onClick={() => handlePanelClick("3on3-league")}
              />
              <path 
                ref={springLeagueRef}
                d="M767.902 100.19C767.511 86.723 755.069 76.8086 741.844 79.4253L741.203 79.562L610.549 109.398C600.615 111.667 593.571 120.499 593.571 130.68V250.251C593.571 260.273 600.397 268.989 610.086 271.423L610.549 271.534L741.203 301.37C754.878 304.49 767.912 294.105 767.912 280.087V100.844L767.902 100.19Z" 
                fill="#BDC3CD" 
                fillOpacity="0.36" 
                stroke="url(#paint3_linear_2037_1008)" 
                strokeWidth="3" 
                className={`cursor-pointer glass-panel ${hoveredPanel === "spring-league" ? "panel-hover-blue" : ""}`}
                style={{ 
                  filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px)', 
                  transform: hoveredPanel === "spring-league" ? 'scale(1.05)' : 'scale(1)',
                  transformOrigin: 'center center', 
                  transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'auto'
                }}
                onMouseEnter={() => handlePanelHover("spring-league")}
                onMouseLeave={() => handlePanelHover(null)}
                onClick={() => handlePanelClick("spring-league")}
              />
            </g>
            <defs>
              <linearGradient id="paint0_linear_2037_1008" x1="137.625" y1="381.205" x2="137.625" y2="0.0927734" gradientUnits="userSpaceOnUse">
                <stop stopColor="#403B2E" />
                <stop offset="0.02" stopColor="#5A5547" />
                <stop offset="0.03" stopColor="#706A5B" />
                <stop offset="0.04" stopColor="#817A6B" />
                <stop offset="0.05" stopColor="#8D8576" />
                <stop offset="0.07" stopColor="#948C7C" />
                <stop offset="0.13" stopColor="#968E7E" />
                <stop offset="0.15" stopColor="white" />
                <stop offset="0.18" stopColor="#726C5D" />
                <stop offset="0.33" stopColor="#1D1A0F" />
                <stop offset="0.34" stopColor="#8C8475" />
                <stop offset="0.35" stopColor="#A79E8E" />
                <stop offset="0.36" stopColor="#CEC3B3" />
                <stop offset="0.37" stopColor="#DACEBD" />
                <stop offset="0.38" stopColor="#E1D5C4" />
                <stop offset="0.42" stopColor="#E3D7C6" />
                <stop offset="0.5" stopColor="#FFF1DF" />
                <stop offset="0.54" stopColor="#595446" />
                <stop offset="0.63" stopColor="#C8C6C3" />
                <stop offset="1" stopColor="#8A8680" />
              </linearGradient>
              <linearGradient id="paint1_linear_2037_1008" x1="970.967" y1="381.205" x2="970.967" y2="0.0927734" gradientUnits="userSpaceOnUse">
                <stop stopColor="#403B2E" />
                <stop offset="0.02" stopColor="#5A5547" />
                <stop offset="0.03" stopColor="#706A5B" />
                <stop offset="0.04" stopColor="#817A6B" />
                <stop offset="0.05" stopColor="#8D8576" />
                <stop offset="0.07" stopColor="#948C7C" />
                <stop offset="0.13" stopColor="#968E7E" />
                <stop offset="0.15" stopColor="white" />
                <stop offset="0.18" stopColor="#726C5D" />
                <stop offset="0.33" stopColor="#1D1A0F" />
                <stop offset="0.34" stopColor="#8C8475" />
                <stop offset="0.35" stopColor="#A79E8E" />
                <stop offset="0.36" stopColor="#CEC3B3" />
                <stop offset="0.37" stopColor="#DACEBD" />
                <stop offset="0.38" stopColor="#E1D5C4" />
                <stop offset="0.42" stopColor="#E3D7C6" />
                <stop offset="0.5" stopColor="#FFF1DF" />
                <stop offset="0.54" stopColor="#595446" />
                <stop offset="0.63" stopColor="#C8C6C3" />
                <stop offset="1" stopColor="#8A8680" />
              </linearGradient>
              <linearGradient id="paint2_linear_2037_1008" x1="427.852" y1="303.641" x2="427.852" y2="77.5044" gradientUnits="userSpaceOnUse">
                <stop stopColor="#403B2E" />
                <stop offset="0.02" stopColor="#5A5547" />
                <stop offset="0.03" stopColor="#706A5B" />
                <stop offset="0.04" stopColor="#817A6B" />
                <stop offset="0.05" stopColor="#8D8576" />
                <stop offset="0.07" stopColor="#948C7C" />
                <stop offset="0.13" stopColor="#968E7E" />
                <stop offset="0.15" stopColor="white" />
                <stop offset="0.18" stopColor="#726C5D" />
                <stop offset="0.33" stopColor="#1D1A0F" />
                <stop offset="0.34" stopColor="#8C8475" />
                <stop offset="0.35" stopColor="#A79E8E" />
                <stop offset="0.36" stopColor="#CEC3B3" />
                <stop offset="0.37" stopColor="#DACEBD" />
                <stop offset="0.38" stopColor="#E1D5C4" />
                <stop offset="0.42" stopColor="#E3D7C6" />
                <stop offset="0.5" stopColor="#FFF1DF" />
                <stop offset="0.54" stopColor="#595446" />
                <stop offset="0.63" stopColor="#C8C6C3" />
                <stop offset="1" stopColor="#8A8680" />
              </linearGradient>
              <linearGradient id="paint3_linear_2037_1008" x1="680.742" y1="303.641" x2="680.742" y2="77.5044" gradientUnits="userSpaceOnUse">
                <stop stopColor="#403B2E" />
                <stop offset="0.02" stopColor="#5A5547" />
                <stop offset="0.03" stopColor="#706A5B" />
                <stop offset="0.04" stopColor="#817A6B" />
                <stop offset="0.05" stopColor="#8D8576" />
                <stop offset="0.07" stopColor="#948C7C" />
                <stop offset="0.13" stopColor="#968E7E" />
                <stop offset="0.15" stopColor="white" />
                <stop offset="0.18" stopColor="#726C5D" />
                <stop offset="0.33" stopColor="#1D1A0F" />
                <stop offset="0.34" stopColor="#8C8475" />
                <stop offset="0.35" stopColor="#A79E8E" />
                <stop offset="0.36" stopColor="#CEC3B3" />
                <stop offset="0.37" stopColor="#DACEBD" />
                <stop offset="0.38" stopColor="#E1D5C4" />
                <stop offset="0.42" stopColor="#E3D7C6" />
                <stop offset="0.5" stopColor="#FFF1DF" />
                <stop offset="0.54" stopColor="#595446" />
                <stop offset="0.63" stopColor="#C8C6C3" />
                <stop offset="1" stopColor="#8A8680" />
              </linearGradient>
            </defs>
          </svg>

          {/* Summer Camp Character Image - Simple and Clean Approach */}
          <div 
            className="absolute pointer-events-none"
            style={{ 
              left: '-5%', 
              top: '-15%',
              width: '34%',
              height: '130%',
              zIndex: 1,
              opacity: hoveredPanel === "summer-camps" ? 1 : 0,
              transform: hoveredPanel === "summer-camps" ? 'translate3d(0%, 0%, 100px) rotate(-8deg)' : 'translateX(-50px) rotate(-8deg)',
              transition: 'all 0.5s ease',
              clipPath: 'polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/images/Card Elements/SummerCamp.png"
              alt="Summer Camp Character"
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center'
              }}
              priority
            />
          </div>
        </div>
      </div>
      <div 
        className={`absolute left-[8%] bottom-[calc(15%+1px)] w-[11rem] h-[4rem] z-[1] pointer-events-none transition-all duration-300 ease-in-out ${hoveredPanel === "summer-camps" ? "-translate-x-8" : ""}`}
      >
        <div 
          ref={summerCampsTextRef}
          className={`skewed-text-container text-3d-effect transition-all duration-300 ease-in-out ${hoveredPanel === "summer-camps" ? "text-hover-active summer-camps" : ""} pointer-events-auto`}
          onMouseEnter={() => handlePanelHover("summer-camps")}
          onMouseLeave={() => handlePanelHover(null)}
          onClick={() => handlePanelClick("summer-camps")}
          style={{
            transform: hoveredPanel === "summer-camps" ? 'translate3d(0%, -50px, 100px)' : 'none',
            zIndex: 10
          }}
        >
          <div className="skewed-text-block" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              zIndex: 2,
              transition: 'all 0.3s ease',
              marginBottom: hoveredPanel === "summer-camps" ? '8px' : '0',
              transform: hoveredPanel === "summer-camps" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'left center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "summer-camps" 
                    ? '0 0 6px #FF0000, 0 0 12px #FF0000, 0 0 18px #FF0000' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "summer-camps" ? '#FFFFFF' : '#1f2937'
                }}
              >
                SUMMER
              </p>
            </div>
            <div style={{ 
              position: 'relative', 
              zIndex: 1,
              marginTop: hoveredPanel === "summer-camps" ? '0' : '-6px',
              transition: 'all 0.3s ease',
              transform: hoveredPanel === "summer-camps" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'left center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "summer-camps" 
                    ? '0 0 6px #FF0000, 0 0 12px #FF0000, 0 0 18px #FF0000' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "summer-camps" ? '#FFFFFF' : '#1f2937'
                }}
              >
                CAMPS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`absolute left-[33%] bottom-[calc(25%+4px)] w-[11rem] h-[4rem] z-[1] mb-5 pointer-events-none transition-all duration-300 ease-in-out ${hoveredPanel === "3on3-league" ? "translate-x-6" : ""}`}
      >
        <div 
          ref={threeOnThreeTextRef}
          className={`skewed-text-container text-3d-effect transition-all duration-300 ease-in-out ${hoveredPanel === "3on3-league" ? "text-hover-active three-on-three" : ""} pointer-events-auto`}
          onMouseEnter={() => handlePanelHover("3on3-league")}
          onMouseLeave={() => handlePanelHover(null)}
          onClick={() => handlePanelClick("3on3-league")}
        >
          <div className="skewed-text-block" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              zIndex: 2,
              transition: 'all 0.3s ease',
              marginBottom: hoveredPanel === "3on3-league" ? '8px' : '0',
              transform: hoveredPanel === "3on3-league" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'center center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "3on3-league" 
                    ? '0 0 6px #FF0000, 0 0 12px #FF0000, 0 0 18px #FF0000' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "3on3-league" ? '#FFFFFF' : '#1f2937'
                }}
              >
                3-ON-3
              </p>
              <p 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  fontFamily: '"eurostile-condensed", sans-serif',
                  fontWeight: 800,
                  fontStyle: 'normal',
                  fontSize: '36px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  height: '34px',
                  lineHeight: '34px',
                  textShadow: hoveredPanel === "3on3-league" 
                    ? '0 0 6px #FF0000, 0 0 12px #FF0000, 0 0 18px #FF0000' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: '#FFFFFF',
                  opacity: hoveredPanel === "3on3-league" ? 1 : 0,
                  zIndex: 10,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  whiteSpace: 'nowrap',
                  overflow: 'visible'
                }}
              >
                3-ON-3
              </p>
            </div>
            <div style={{ 
              position: 'relative', 
              zIndex: 1,
              marginTop: hoveredPanel === "3on3-league" ? '0' : '-6px',
              transition: 'all 0.3s ease',
              transform: hoveredPanel === "3on3-league" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'center center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "3on3-league" 
                    ? '0 0 6px #FF0000, 0 0 12px #FF0000, 0 0 18px #FF0000' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "3on3-league" ? '#FFFFFF' : '#1f2937'
                }}
              >
                LEAGUE
              </p>
              <p 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  fontFamily: '"eurostile-condensed", sans-serif',
                  fontWeight: 800,
                  fontStyle: 'normal',
                  fontSize: '36px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  height: '34px',
                  lineHeight: '34px',
                  textShadow: hoveredPanel === "3on3-league" 
                    ? '0 0 6px #FF0000, 0 0 12px #FF0000, 0 0 18px #FF0000' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: '#FFFFFF',
                  opacity: hoveredPanel === "3on3-league" ? 1 : 0,
                  zIndex: 10,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  whiteSpace: 'nowrap',
                  overflow: 'visible'
                }}
              >
                LEAGUE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`absolute left-[55%] bottom-[80px] w-[11rem] h-[4rem] z-[1] mb-5 pointer-events-none transition-all duration-300 ease-in-out ${hoveredPanel === "spring-league" ? "-translate-x-6" : ""}`}
      >
        <div 
          ref={springLeagueTextRef}
          className={`skewed-text-container text-3d-effect transition-all duration-300 ease-in-out ${hoveredPanel === "spring-league" ? "text-hover-active spring-league" : ""} pointer-events-auto`}
          onMouseEnter={() => handlePanelHover("spring-league")}
          onMouseLeave={() => handlePanelHover(null)}
          onClick={() => handlePanelClick("spring-league")}
        >
          <div className="skewed-text-block reverse-skew" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              zIndex: 2,
              transition: 'all 0.3s ease',
              marginBottom: hoveredPanel === "spring-league" ? '8px' : '0',
              transform: hoveredPanel === "spring-league" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'center center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "spring-league" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "spring-league" ? '#FFFFFF' : '#1f2937'
                }}
              >
                SPRING
              </p>
              <p 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  fontFamily: '"eurostile-condensed", sans-serif',
                  fontWeight: 800,
                  fontStyle: 'normal',
                  fontSize: '36px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  height: '34px',
                  lineHeight: '34px',
                  textShadow: hoveredPanel === "spring-league" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: '#FFFFFF',
                  opacity: hoveredPanel === "spring-league" ? 1 : 0,
                  zIndex: 10,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  whiteSpace: 'nowrap',
                  overflow: 'visible'
                }}
              >
                SPRING
              </p>
            </div>
            <div style={{ 
              position: 'relative', 
              zIndex: 1,
              marginTop: hoveredPanel === "spring-league" ? '0' : '-6px',
              transition: 'all 0.3s ease',
              transform: hoveredPanel === "spring-league" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'center center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "spring-league" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "spring-league" ? '#FFFFFF' : '#1f2937'
                }}
              >
                LEAGUE
              </p>
              <p 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  fontFamily: '"eurostile-condensed", sans-serif',
                  fontWeight: 800,
                  fontStyle: 'normal',
                  fontSize: '36px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  height: '34px',
                  lineHeight: '34px',
                  textShadow: hoveredPanel === "spring-league" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: '#FFFFFF',
                  opacity: hoveredPanel === "spring-league" ? 1 : 0,
                  zIndex: 10,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  whiteSpace: 'nowrap',
                  overflow: 'visible'
                }}
              >
                LEAGUE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div 
        className={`absolute right-[10%] bottom-[calc(15%+1px)] w-[11rem] h-[4rem] z-[1] pointer-events-none transition-all duration-300 ease-in-out ${hoveredPanel === "skill-clinics" ? "translate-x-4" : ""}`}
      >
        <div 
          ref={skillClinicsTextRef}
          className={`skewed-text-container text-3d-effect transition-all duration-300 ease-in-out ${hoveredPanel === "skill-clinics" ? "text-hover-active skill-clinics" : ""} pointer-events-auto`}
          onMouseEnter={() => handlePanelHover("skill-clinics")}
          onMouseLeave={() => handlePanelHover(null)}
          onClick={() => handlePanelClick("skill-clinics")}
          style={{
            transform: hoveredPanel === "skill-clinics" ? 'translate3d(0%, -50px, 100px)' : 'none',
            zIndex: 10
          }}
        >
          <div className="skewed-text-block reverse-skew" style={{ position: 'relative' }}>
            <div style={{ 
              position: 'relative', 
              zIndex: 2,
              transition: 'all 0.3s ease',
              marginBottom: hoveredPanel === "skill-clinics" ? '8px' : '0',
              transform: hoveredPanel === "skill-clinics" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'right center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "skill-clinics" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "skill-clinics" ? '#FFFFFF' : '#1f2937'
                }}
              >
                SKILL
              </p>
              <p 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  fontFamily: '"eurostile-condensed", sans-serif',
                  fontWeight: 800,
                  fontStyle: 'normal',
                  fontSize: '36px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  height: '34px',
                  lineHeight: '34px',
                  textShadow: hoveredPanel === "skill-clinics" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: '#FFFFFF',
                  opacity: hoveredPanel === "skill-clinics" ? 1 : 0,
                  zIndex: 10,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  whiteSpace: 'nowrap',
                  overflow: 'visible'
                }}
              >
                SKILL
              </p>
            </div>
            <div style={{ 
              position: 'relative', 
              zIndex: 1,
              marginTop: hoveredPanel === "skill-clinics" ? '0' : '-6px',
              transition: 'all 0.3s ease',
              transform: hoveredPanel === "skill-clinics" ? 'scale(1.1)' : 'scale(1)',
              transformOrigin: 'right center'
            }}>
              <p 
                className="skewed-text-content"
                style={{
                  position: 'relative',
                  textShadow: hoveredPanel === "skill-clinics" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'text-shadow 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: hoveredPanel === "skill-clinics" ? '#FFFFFF' : '#1f2937'
                }}
              >
                CLINICS
              </p>
              <p 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  fontFamily: '"eurostile-condensed", sans-serif',
                  fontWeight: 800,
                  fontStyle: 'normal',
                  fontSize: '36px',
                  textAlign: 'left',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  height: '34px',
                  lineHeight: '34px',
                  textShadow: hoveredPanel === "skill-clinics" 
                    ? '0 0 6px #3b82f6, 0 0 12px #3b82f6, 0 0 18px #3b82f6' 
                    : 'none',
                  transition: 'all 0.3s ease',
                  margin: 0,
                  padding: 0,
                  color: '#FFFFFF',
                  opacity: hoveredPanel === "skill-clinics" ? 1 : 0,
                  zIndex: 10,
                  WebkitFontSmoothing: 'antialiased',
                  MozOsxFontSmoothing: 'grayscale',
                  whiteSpace: 'nowrap',
                  overflow: 'visible'
                }}
              >
                CLINICS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
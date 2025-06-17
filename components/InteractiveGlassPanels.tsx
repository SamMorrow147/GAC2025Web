interface InteractiveGlassPanelsProps {
  onPanelClick?: (panelName: string) => void;
  hoveredPanel?: string | null;
  onPanelHover?: (panelId: string | null) => void;
}

export default function InteractiveGlassPanels({ onPanelClick, hoveredPanel, onPanelHover }: InteractiveGlassPanelsProps) {
  const handlePanelClick = (panelName: string) => {
    if (onPanelClick) {
      onPanelClick(panelName);
    }
  };

  const handlePanelHover = (panelId: string | null) => {
    if (onPanelHover) {
      onPanelHover(panelId);
    }
  };

  const getHoverStyles = (panelId: string) => {
    const isHovered = hoveredPanel === panelId;
    return {
      filter: isHovered 
        ? 'drop-shadow(0 8px 15px rgba(59, 130, 246, 0.3)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
        : 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      transformOrigin: 'center',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  return (
    <div className="relative size-full flex items-center justify-center">
      <svg
        className="block size-full overflow-visible"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1109 381"
        style={{ overflow: 'visible', maxWidth: '100%', maxHeight: '100%' }}
      >
        <g id="Group 18">
          {/* Left panel - Summer Camps */}
          <path
            d="M1.64453 23.4326C1.64458 9.6344 14.2742 -0.645221 27.7129 2.01367L28.3535 2.15039L256.628 54.2764C266.561 56.5456 273.605 65.3778 273.605 75.5586V305.379C273.605 315.401 266.78 324.117 257.091 326.551L256.628 326.661L28.3535 378.787C14.6784 381.908 1.64456 371.522 1.64453 357.505V23.4326Z"
            fill="#BDC3CD"
            fillOpacity="0.36"
            stroke="url(#paint0_linear_2037_1008)"
            strokeWidth="3"
            className="cursor-pointer glass-panel"
            onClick={() => handlePanelClick('Summer Camps')}
            style={getHoverStyles('summer-camps')}
            onMouseEnter={() => handlePanelHover('summer-camps')}
            onMouseLeave={() => handlePanelHover(null)}
          />
          
          {/* Right panel - Skill Clinics */}
          <path
            d="M1106.95 23.4326C1106.95 9.6344 1094.32 -0.645221 1080.88 2.01367L1080.24 2.15039L851.964 54.2764C842.03 56.5456 834.986 65.3778 834.986 75.5586V305.379C834.986 315.401 841.812 324.117 851.501 326.551L851.964 326.661L1080.24 378.787C1093.91 381.908 1106.95 371.522 1106.95 357.505V23.4326Z"
            fill="#BDC3CD"
            fillOpacity="0.36"
            stroke="url(#paint1_linear_2037_1008)"
            strokeWidth="3"
            className="cursor-pointer glass-panel"
            onClick={() => handlePanelClick('Skill Clinics')}
            style={getHoverStyles('skill-clinics')}
            onMouseEnter={() => handlePanelHover('skill-clinics')}
            onMouseLeave={() => handlePanelHover(null)}
          />
          
          {/* Center-left panel - 3-on-3 League */}
          <path
            d="M340.691 100.19C341.083 86.723 353.525 76.8086 366.75 79.4253L367.391 79.562L498.045 109.398C507.978 111.667 515.022 120.499 515.022 130.68V250.251C515.022 260.273 508.197 268.989 498.508 271.423L498.045 271.534L367.391 301.37C353.716 304.49 340.682 294.105 340.682 280.087V100.844L340.691 100.19Z"
            fill="#BDC3CD"
            fillOpacity="0.36"
            stroke="url(#paint2_linear_2037_1008)"
            strokeWidth="3"
            className="cursor-pointer glass-panel"
            onClick={() => handlePanelClick('3-on-3 League')}
            style={getHoverStyles('3on3-league')}
            onMouseEnter={() => handlePanelHover('3on3-league')}
            onMouseLeave={() => handlePanelHover(null)}
          />
          
          {/* Center-right panel - Spring League */}
          <path
            d="M767.902 100.19C767.511 86.723 755.069 76.8086 741.844 79.4253L741.203 79.562L610.549 109.398C600.615 111.667 593.571 120.499 593.571 130.68V250.251C593.571 260.273 600.397 268.989 610.086 271.423L610.549 271.534L741.203 301.37C754.878 304.49 767.912 294.105 767.912 280.087V100.844L767.902 100.19Z"
            fill="#BDC3CD"
            fillOpacity="0.36"
            stroke="url(#paint3_linear_2037_1008)"
            strokeWidth="3"
            className="cursor-pointer glass-panel"
            onClick={() => handlePanelClick('Spring League')}
            style={getHoverStyles('spring-league')}
            onMouseEnter={() => handlePanelHover('spring-league')}
            onMouseLeave={() => handlePanelHover(null)}
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_2037_1008"
            x1="137.625"
            y1="381.205"
            x2="137.625"
            y2="0.0927734"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#403B2E"/>
            <stop offset="0.02" stopColor="#5A5547"/>
            <stop offset="0.03" stopColor="#706A5B"/>
            <stop offset="0.04" stopColor="#817A6B"/>
            <stop offset="0.05" stopColor="#8D8576"/>
            <stop offset="0.07" stopColor="#948C7C"/>
            <stop offset="0.13" stopColor="#968E7E"/>
            <stop offset="0.15" stopColor="white"/>
            <stop offset="0.18" stopColor="#726C5D"/>
            <stop offset="0.33" stopColor="#1D1A0F"/>
            <stop offset="0.34" stopColor="#8C8475"/>
            <stop offset="0.35" stopColor="#A79E8E"/>
            <stop offset="0.36" stopColor="#CEC3B3"/>
            <stop offset="0.37" stopColor="#DACEBD"/>
            <stop offset="0.38" stopColor="#E1D5C4"/>
            <stop offset="0.42" stopColor="#E3D7C6"/>
            <stop offset="0.5" stopColor="#FFF1DF"/>
            <stop offset="0.54" stopColor="#595446"/>
            <stop offset="0.63" stopColor="#C8C6C3"/>
            <stop offset="1" stopColor="#8A8680"/>
          </linearGradient>
          <linearGradient
            id="paint1_linear_2037_1008"
            x1="970.967"
            y1="381.205"
            x2="970.967"
            y2="0.0927734"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#403B2E"/>
            <stop offset="0.02" stopColor="#5A5547"/>
            <stop offset="0.03" stopColor="#706A5B"/>
            <stop offset="0.04" stopColor="#817A6B"/>
            <stop offset="0.05" stopColor="#8D8576"/>
            <stop offset="0.07" stopColor="#948C7C"/>
            <stop offset="0.13" stopColor="#968E7E"/>
            <stop offset="0.15" stopColor="white"/>
            <stop offset="0.18" stopColor="#726C5D"/>
            <stop offset="0.33" stopColor="#1D1A0F"/>
            <stop offset="0.34" stopColor="#8C8475"/>
            <stop offset="0.35" stopColor="#A79E8E"/>
            <stop offset="0.36" stopColor="#CEC3B3"/>
            <stop offset="0.37" stopColor="#DACEBD"/>
            <stop offset="0.38" stopColor="#E1D5C4"/>
            <stop offset="0.42" stopColor="#E3D7C6"/>
            <stop offset="0.5" stopColor="#FFF1DF"/>
            <stop offset="0.54" stopColor="#595446"/>
            <stop offset="0.63" stopColor="#C8C6C3"/>
            <stop offset="1" stopColor="#8A8680"/>
          </linearGradient>
          <linearGradient
            id="paint2_linear_2037_1008"
            x1="427.852"
            y1="303.641"
            x2="427.852"
            y2="77.5044"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#403B2E"/>
            <stop offset="0.02" stopColor="#5A5547"/>
            <stop offset="0.03" stopColor="#706A5B"/>
            <stop offset="0.04" stopColor="#817A6B"/>
            <stop offset="0.05" stopColor="#8D8576"/>
            <stop offset="0.07" stopColor="#948C7C"/>
            <stop offset="0.13" stopColor="#968E7E"/>
            <stop offset="0.15" stopColor="white"/>
            <stop offset="0.18" stopColor="#726C5D"/>
            <stop offset="0.33" stopColor="#1D1A0F"/>
            <stop offset="0.34" stopColor="#8C8475"/>
            <stop offset="0.35" stopColor="#A79E8E"/>
            <stop offset="0.36" stopColor="#CEC3B3"/>
            <stop offset="0.37" stopColor="#DACEBD"/>
            <stop offset="0.38" stopColor="#E1D5C4"/>
            <stop offset="0.42" stopColor="#E3D7C6"/>
            <stop offset="0.5" stopColor="#FFF1DF"/>
            <stop offset="0.54" stopColor="#595446"/>
            <stop offset="0.63" stopColor="#C8C6C3"/>
            <stop offset="1" stopColor="#8A8680"/>
          </linearGradient>
          <linearGradient
            id="paint3_linear_2037_1008"
            x1="680.742"
            y1="303.641"
            x2="680.742"
            y2="77.5044"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#403B2E"/>
            <stop offset="0.02" stopColor="#5A5547"/>
            <stop offset="0.03" stopColor="#706A5B"/>
            <stop offset="0.04" stopColor="#817A6B"/>
            <stop offset="0.05" stopColor="#8D8576"/>
            <stop offset="0.07" stopColor="#948C7C"/>
            <stop offset="0.13" stopColor="#968E7E"/>
            <stop offset="0.15" stopColor="white"/>
            <stop offset="0.18" stopColor="#726C5D"/>
            <stop offset="0.33" stopColor="#1D1A0F"/>
            <stop offset="0.34" stopColor="#8C8475"/>
            <stop offset="0.35" stopColor="#A79E8E"/>
            <stop offset="0.36" stopColor="#CEC3B3"/>
            <stop offset="0.37" stopColor="#DACEBD"/>
            <stop offset="0.38" stopColor="#E1D5C4"/>
            <stop offset="0.42" stopColor="#E3D7C6"/>
            <stop offset="0.5" stopColor="#FFF1DF"/>
            <stop offset="0.54" stopColor="#595446"/>
            <stop offset="0.63" stopColor="#C8C6C3"/>
            <stop offset="1" stopColor="#8A8680"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 
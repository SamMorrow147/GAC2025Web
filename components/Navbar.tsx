import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useRef } from 'react';
import campData from '../content/camps/camp-locations.json';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const drawVerticalLineTop = keyframes`
  0% {
    stroke-dasharray: 105;
    stroke-dashoffset: 105;
  }
  100% {
    stroke-dasharray: 105;
    stroke-dashoffset: 0;
  }
`;

const drawVerticalLineBottom = keyframes`
  0% {
    stroke-dasharray: 105;
    stroke-dashoffset: 105;
  }
  100% {
    stroke-dasharray: 105;
    stroke-dashoffset: 0;
  }
`;

const drawHorizontalLine = keyframes`
  0% {
    stroke-dasharray: 20;
    stroke-dashoffset: 20;
    opacity: 0;
  }
  100% {
    stroke-dasharray: 20;
    stroke-dashoffset: 0;
    opacity: 1;
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SpinningContainer = styled.div<{ isSpinning: boolean }>`
  animation: ${props => props.isSpinning ? spinAnimation : 'none'} 0.5s ease-in-out;
`;

const RedBracket = styled.div<{ itemCount?: number }>`
  margin-left: 18px;
  margin-right: 8px;
  width: 20px;
  height: ${props => props.itemCount === 5 ? '210px' : '130px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 0;
  padding-top: 0;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .vertical-line-top {
    stroke: red;
    stroke-width: 2;
    fill: none;
    stroke-linecap: square;
    animation: ${drawVerticalLineTop} 1s ease-out forwards;
  }

  .vertical-line-bottom {
    stroke: red;
    stroke-width: 2;
    fill: none;
    stroke-linecap: square;
    animation: ${drawVerticalLineBottom} 1s ease-out forwards;
  }

  .horizontal-line {
    stroke: red;
    stroke-width: 2;
    fill: none;
    stroke-linecap: square;
    opacity: 0;
    animation: ${drawHorizontalLine} 0.5s ease-out forwards;
  }

  .top-line-3 {
    animation-delay: 0.6s;
  }

  .bottom-line-3 {
    animation-delay: 0.6s;
  }

  .top-line-5 {
    animation-delay: 1s;
  }

  .bottom-line-5 {
    animation-delay: 1s;
  }
`;

// The nav bar is visually composed of left, center, and right image assets, with overlayed text and a fire SVG below the center.
// The Eurostile Condensed font is loaded globally via Typekit in _document or _app.

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Camps', href: '/camps' },
  { label: 'Contact', href: '/contact' },
];

const programItems = [
  { label: 'Clinics', href: '/programs/clinics', subOptions: [
    { label: 'February Vacation', href: '/programs/clinics/february-vacation' },
    { label: 'Sunday Night Skills', href: '/programs/clinics/sunday-night-skills' },
    { label: 'Summer Weekly', href: '/programs/clinics/summer-weekly' },
  ] },
  { label: '3-on-3 League', href: '/programs/3-on-3', subOptions: [
    { label: 'Mites', href: '/programs/3-on-3/mites' },
    { label: 'Squirts', href: '/programs/3-on-3/squirts' },
    { label: 'Peewee', href: '/programs/3-on-3/peewee' },
  ] },
  { label: 'Spring League', href: '/programs/spring-league', subOptions: [
    { label: 'High School', href: '/programs/spring-league/high-school' },
    { label: 'Blue Division', href: '/programs/spring-league/blue' },
    { label: 'Red Division', href: '/programs/spring-league/red' },
    { label: 'White Division', href: '/programs/spring-league/white' },
    { label: 'Gold Division', href: '/programs/spring-league/gold' },
  ] },
  { label: 'Boston Lightning', href: '/programs/boston-lightning' },
  { label: 'Player Tips', href: '/programs/player-tips' },
];

export default function Navbar() {
  const router = useRouter();
  const [isCampsOpen, setIsCampsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [campStates, setCampStates] = useState<Array<{ id: string; name: string }>>([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const campsRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);

  useEffect(() => {
    // Transform camp data into a sorted array of states
    const states = Object.entries(campData.camps)
      .map(([key, state]) => ({
        id: key,
        name: state.name
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
    setCampStates(states);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!isCampsOpen && !isProgramsOpen) return;
    function handleClick(event: MouseEvent) {
      if (campsRef.current && !campsRef.current.contains(event.target as Node) &&
          programsRef.current && !programsRef.current.contains(event.target as Node)) {
        setIsCampsOpen(false);
        setIsProgramsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isCampsOpen, isProgramsOpen]);

  const handleCenterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      router.push('/');
    }, 500);
  };

  return (
    <div className="absolute w-full flex justify-center items-center z-[1000]" style={{ zIndex: 1000 }}>
      <nav className="w-full flex justify-center items-center relative select-none">
        {/* Left Side (About) - larger and closer to center */}
        <div className="relative h-[210px] w-[520px] flex-shrink-0 z-20 -mr-8" style={{ right: '-300px' }}>
          <div className="absolute left-0 top-0 w-full h-full z-10">
            <Image
              src="/images/Nav/rightand left red side pieces.png"
              alt="Left Red Side Piece"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <Link href="/about" className="absolute left-0 top-0 w-full h-full flex items-center justify-start z-20" style={{ padding: '80px' }}>
            <span
              className="about-nav-text text-white text-2xl font-[400] tracking-wide transition-all duration-200 hover:scale-105 hover:font-[500] hover:mb-[7px]"
              style={{ 
                fontFamily: 'eurostile-extended, "eurostile-extended", sans-serif',
                letterSpacing: '0.04em',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              About
            </span>
          </Link>
        </div>
        {/* Center Left (Programs) - use TopLeftSide.png, not mirrored */}
        <div ref={programsRef} className="relative h-[90px] w-[300px] flex-shrink-0 z-30" style={{ right: '-16px' }}>
          <Image
            src="/images/Nav/TopLeftSide.png"
            alt="Programs Nav Side"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
          <div
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsProgramsOpen((open) => !open)}
          >
            <span
              className={`text-[#121d57] text-3xl font-[400] tracking-wide transition-all duration-200 hover:scale-105 hover:font-[500] hover:mb-[7px] ${isProgramsOpen ? 'font-[500]' : 'font-[400]'}`}
              style={{ 
                fontFamily: 'eurostile-extended, "eurostile-extended", sans-serif',
                letterSpacing: '0.04em',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              Programs
            </span>
            {/* Programs Dropdown Menu */}
            {isProgramsOpen && (
              <div
                className="absolute top-full left-0 w-72 z-[9999] flex justify-center items-center"
                style={{ zIndex: 9999 }}
              >
                <div
                  className="w-full p-1"
                  style={{
                    background: 'padding-box, border-box rgba(3, 107, 159, 0.5)',
                    borderRadius: '18px',
                    border: '2px solid transparent',
                    position: 'relative',
                    fontFamily: 'eurostile-condensed, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="w-full rounded-xl"
                    style={{
                      background: 'transparent',
                      overflow: 'hidden',
                      fontFamily: 'eurostile-condensed, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    <div className="flex flex-col">
                      {programItems.map((item, idx) => (
                        <div key={item.label} className="relative">
                          <Link
                            href={item.href}
                            className={`px-6 py-3 text-white text-xl font-[400] text-left transition-colors duration-150 ${
                              idx % 2 === 0 ? 'bg-[#036B9F]' : 'bg-[#024D87]'
                            } hover:bg-[#4e97c2] hover:font-extrabold${
                              idx !== programItems.length - 1 ? ' border-b border-[#4e97c2]' : ''
                            } flex items-center justify-between`}
                            style={{ 
                              fontFamily: 'eurostile-condensed, sans-serif',
                              letterSpacing: '0.04em',
                              WebkitFontSmoothing: 'antialiased',
                              MozOsxFontSmoothing: 'grayscale',
                              cursor: item.subOptions ? 'pointer' : 'auto',
                            }}
                            onClick={e => {
                              if (item.subOptions) {
                                e.preventDefault();
                                e.stopPropagation();
                                setExpandedProgram(expandedProgram === item.label ? null : item.label);
                              }
                            }}
                          >
                            {item.label}
                            {item.subOptions && (
                              <span className="ml-2">{expandedProgram === item.label ? '▲' : '▼'}</span>
                            )}
                          </Link>
                          {/* Sub-options for Clinics */}
                          {item.subOptions && expandedProgram === item.label && (
                            <div className="flex flex-row" onClick={e => e.stopPropagation()}>
                              {/* Red bracket */}
                              <RedBracket itemCount={item.subOptions.length}>
                                <svg viewBox={`0 0 20 ${item.subOptions.length === 5 ? '210' : '130'}`} preserveAspectRatio="none">
                                  <path className="vertical-line-top" d={`M0,${item.subOptions.length === 5 ? '105' : '65'} L0,0`} />
                                  <path className="vertical-line-bottom" d={`M0,${item.subOptions.length === 5 ? '105' : '65'} L0,${item.subOptions.length === 5 ? '210' : '130'}`} />
                                  <path className={`horizontal-line top-line-${item.subOptions.length === 5 ? '5' : '3'}`} d="M0,0 L20,0" />
                                  <path className={`horizontal-line bottom-line-${item.subOptions.length === 5 ? '5' : '3'}`} d={`M0,${item.subOptions.length === 5 ? '210' : '130'} L20,${item.subOptions.length === 5 ? '210' : '130'}`} />
                                </svg>
                                <div style={{ flex: 1 }} />
                              </RedBracket>
                              <div className="flex flex-col w-full">
                                {item.subOptions.map((sub, subIdx) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    className={`pl-2 pr-6 py-3 text-black text-lg font-[400] text-left transition-colors duration-150 bg-[#ededed] ${subIdx === 1 ? 'bg-white' : ''} ${subIdx !== item.subOptions.length - 1 ? ' border-b border-[#e0e0e0]' : ''} hover:font-extrabold hover:bg-[#EBEBEB]`}
                                    style={{
                                      fontFamily: 'eurostile-condensed, sans-serif',
                                      letterSpacing: '0.04em',
                                      WebkitFontSmoothing: 'antialiased',
                                      MozOsxFontSmoothing: 'grayscale',
                                    }}
                                    onClick={e => e.stopPropagation()}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Spacer for center circle absolute positioning */}
        <div className="w-[160px] h-[160px] flex-shrink-0 z-0 pointer-events-none" />
        {/* Center Right (Camps) with Dropdown (click to open) */}
        <div ref={campsRef} className="relative h-[90px] w-[300px] flex-shrink-0 z-30" style={{ left: '-16px' }}>
          <Image
            src="/images/Nav/TopRightSide.png"
            alt="Camps Nav Side"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
          <div
            className="absolute left-0 top-0 w-full h-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsCampsOpen((open) => !open)}
          >
            <span
              className={`text-[#121d57] text-3xl tracking-wide transition-all duration-200 hover:scale-105 hover:font-[500] hover:mb-[7px] ${isCampsOpen ? 'font-[500]' : 'font-[400]'}`}
              style={{ 
                fontFamily: 'eurostile-extended, "eurostile-extended", sans-serif',
                letterSpacing: '0.04em',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              Camps
            </span>
            {/* Dropdown Menu */}
            {isCampsOpen && (
              <div
                className="absolute top-full left-0 w-72 z-[9999] flex justify-center items-center"
                style={{ zIndex: 9999 }}
              >
                <div
                  className="w-full h-full p-1"
                  style={{
                    background: 'padding-box, border-box rgba(3, 107, 159, 0.5)',
                    borderRadius: '18px',
                    border: '2px solid transparent',
                    position: 'relative',
                    fontFamily: 'eurostile-condensed, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  <div
                    className="w-full h-full rounded-xl"
                    style={{
                      background: 'transparent',
                      overflow: 'hidden',
                      fontFamily: 'eurostile-condensed, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    <div className="flex flex-col overflow-y-auto">
                      {campStates.map((state, idx) => (
                        <Link
                          key={state.id}
                          href={`/camps/${state.id}`}
                          className={`px-6 py-3 text-white text-xl font-[400] text-left transition-colors duration-150 ${
                            idx % 2 === 0 ? 'bg-[#036B9F]' : 'bg-[#024D87]'
                          } hover:bg-[#4e97c2]${
                            idx !== campStates.length - 1 ? ' border-b border-[#4e97c2]' : ''
                          }`}
                          style={{ 
                            fontFamily: 'eurostile-condensed, sans-serif',
                            letterSpacing: '0.04em',
                            WebkitFontSmoothing: 'antialiased',
                            MozOsxFontSmoothing: 'grayscale'
                          }}
                        >
                          {state.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Right Side (Contact) - larger and closer to center */}
        <div className="relative h-[210px] w-[520px] flex-shrink-0 z-20 -ml-8" style={{ left: '-300px' }}>
          <div className="absolute left-0 top-0 w-full h-full z-10">
            <Image
              src="/images/Nav/rightand left red side pieces.png"
              alt="Right Red Side Piece"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
          <Link href="/contact" className="absolute left-0 top-0 w-full h-full flex items-center justify-end z-20" style={{ padding: '80px' }}>
            <span
              className="text-white text-2xl font-[400] tracking-wide transition-all duration-200 hover:scale-105 hover:font-[500] hover:mb-[7px]"
              style={{ 
                fontFamily: 'eurostile-extended, "eurostile-extended", sans-serif',
                letterSpacing: '0.04em',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}
            >
              Contact
            </span>
          </Link>
        </div>
      </nav>
      {/* Center Circle with Fire and Logo - absolutely positioned and moved further down */}
      <div className="absolute left-1/2 top-[27px] -translate-x-1/2 flex flex-col items-center z-40">
        <SpinningContainer isSpinning={isSpinning} className="relative w-[160px] h-[160px] group">
          <Image
            src="/images/Nav/Center-Circle.png"
            alt="Center Circle"
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="transition-opacity duration-300 group-hover:opacity-0"
          />
          <Image
            src="/images/Nav/Center-Circle-hover.png"
            alt="Center Circle Hover"
            fill
            style={{ objectFit: 'contain' }}
            priority
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/" className="group" onClick={handleCenterClick}>
              <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="transition-colors duration-300 w-[110px] h-[110px] text-[#121D57] group-hover:text-white"
                style={{ objectFit: 'contain' }}
                aria-label="Center Logo"
              >
                <path d="M95.1815 43.1914H69.2144C69.6021 44.8187 69.8122 46.5158 69.8122 48.2618C69.8122 49.5896 69.6868 50.8872 69.4605 52.1498H82.6669C81.8405 67.7091 68.2301 81.223 51.9606 82.9877C34.7567 84.8536 18.6149 73.6414 14.2182 56.7706C9.95027 40.3948 18.3944 22.9963 33.993 16.1299C41.9357 12.6343 50.1313 12.1009 58.4129 14.6296C69.0391 17.8736 76.3434 25.0044 80.9549 35.0402H93.8189C87.1077 10.2663 60.8655 -4.28306 35.6911 2.44826C10.7175 9.126 -4.36344 35.1987 2.19102 60.3639C8.75129 85.556 34.9088 100.837 60.2132 94.2605C83.2333 88.2781 100.251 63.5531 95.1815 43.1914Z" fill="currentColor"/>
                <path d="M66.4373 59.9122C62.5919 65.9842 55.8343 70.0156 48.1342 70.0156C36.1628 70.0156 26.457 60.2756 26.457 48.262C26.457 36.2483 36.1628 26.5084 48.1342 26.5084C55.3224 26.5084 61.6912 30.0225 65.6341 35.4295H71.3993C66.8818 27.2002 58.158 21.6221 48.1342 21.6221C33.4735 21.6221 21.5879 33.5495 21.5879 48.262C21.5879 62.9744 33.4735 74.9019 48.1342 74.9019C58.6316 74.9019 67.7048 68.7856 72.0121 59.911H66.4373V59.9122Z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
        </SpinningContainer>
        {router.pathname === '/' && (
          <div className="relative w-[80px] h-[90px] -mt-2 -z-10">
            <Image
              src="/images/Nav/Fire.svg"
              alt="Fire"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
} 
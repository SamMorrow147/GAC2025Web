import NavLink from './NavLink';

export default function ClinicsNav() {
  return (
    <div className="w-full p-1" style={{
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(3, 107, 159, 0.25) 50%, rgba(255, 255, 255, 0.05) 100%), radial-gradient(circle at top left, rgba(255, 255, 255, 0.4), rgba(3, 107, 159, 0.1))',
      borderRadius: '18px',
      border: '2px solid transparent',
      position: 'relative',
      fontFamily: 'eurostile-condensed, sans-serif',
      fontWeight: 400
    }}>
      <div className="w-full rounded-xl" style={{
        background: 'transparent',
        overflow: 'hidden',
        fontFamily: 'eurostile-condensed, sans-serif',
        fontWeight: 400
      }}>
        <div className="flex flex-col">
          <div className="relative">
            <a 
              className="px-6 py-3 text-white text-xl font-[400] text-left transition-colors duration-150 bg-[#036B9F] hover:bg-[#4e97c2] hover:font-extrabold border-b border-[#4e97c2] flex items-center justify-between"
              href="/programs/clinics"
              style={{
                fontFamily: 'eurostile-condensed, sans-serif',
                letterSpacing: '0.04em',
                WebkitFontSmoothing: 'antialiased',
                cursor: 'pointer'
              }}
            >
              Clinics
              <span className="ml-2">▲</span>
            </a>
            <div className="flex flex-row">
              <div className="flex flex-col w-full">
                <NavLink href="/programs/clinics/february-vacation">
                  February Vacation
                </NavLink>
                <NavLink href="/programs/clinics/sunday-night-skills">
                  Sunday Night Skills
                </NavLink>
                <NavLink href="/programs/clinics/summer-weekly">
                  Summer Weekly
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
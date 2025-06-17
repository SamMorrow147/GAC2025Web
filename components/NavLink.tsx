import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      href={href}
      className={`pl-2 pr-6 py-3 text-black text-lg font-[400] text-left transition-colors duration-150 bg-[#ededed] border-b border-[#e0e0e0] hover:font-extrabold hover:bg-[#EBEBEB] ${className}`}
      style={{
        fontFamily: 'eurostile-condensed, sans-serif',
        letterSpacing: '0.04em',
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      {children}
    </Link>
  );
} 
interface SkewedText3DProps {
  text: string;
  className?: string;
  reverse?: boolean;
}

export default function SkewedText3D({ text, className = '', reverse = false }: SkewedText3DProps) {
  // Split text on spaces and handle special cases like "3-ON-3"
  const textParts = text.split(' ');
  
  return (
    <div className={`skewed-text-container ${className}`}>
      <div className={`skewed-text-block ${reverse ? 'reverse-skew' : ''}`}>
        {textParts.map((part, index) => (
          <p key={index} className="skewed-text-content">
            {part}
          </p>
        ))}
      </div>
    </div>
  );
} 
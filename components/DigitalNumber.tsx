import React from 'react';
import { DigitalDigit } from './DigitalDigit';

interface DigitalNumberProps {
  value: string;
  className?: string;
}

export function DigitalNumber({ value, className = '' }: DigitalNumberProps) {
  const digits = value.split('');
  
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {digits.map((digit, index) => (
        <DigitalDigit key={index} digit={digit} />
      ))}
    </div>
  );
} 
declare module 'react-bits' {
  import { ReactNode } from 'react';

  export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
  }

  export const Button: React.FC<ButtonProps>;
  
  // Add more component type declarations as needed
} 
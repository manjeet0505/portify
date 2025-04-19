import { HTMLMotionProps } from 'framer-motion';

declare module 'framer-motion' {
  export interface Motion {
    div: React.ForwardRefExoticComponent<HTMLMotionProps<'div'>>;
    a: React.ForwardRefExoticComponent<HTMLMotionProps<'a'>>;
    p: React.ForwardRefExoticComponent<HTMLMotionProps<'p'>>;
    span: React.ForwardRefExoticComponent<HTMLMotionProps<'span'>>;
    h1: React.ForwardRefExoticComponent<HTMLMotionProps<'h1'>>;
    h2: React.ForwardRefExoticComponent<HTMLMotionProps<'h2'>>;
    h3: React.ForwardRefExoticComponent<HTMLMotionProps<'h3'>>;
  }
  
  export const motion: Motion;
} 
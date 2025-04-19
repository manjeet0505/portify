import { IconBaseProps } from 'react-icons';

declare module 'react-icons/fi' {
  export interface IconProps extends IconBaseProps {
    className?: string;
  }
  
  export const FiMail: React.FC<IconProps>;
  export const FiPhone: React.FC<IconProps>;
  export const FiGithub: React.FC<IconProps>;
  export const FiLinkedin: React.FC<IconProps>;
  export const FiTwitter: React.FC<IconProps>;
  export const FiArrowLeft: React.FC<IconProps>;
  export const FiArrowRight: React.FC<IconProps>;
} 
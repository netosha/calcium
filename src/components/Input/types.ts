import { InputHTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rounded?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export type Props = InputProps & MotionProps;

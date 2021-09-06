import { InputHTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (n: number | string | undefined) => void;
  rounded?: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
}

export type NumberProps = Props & MotionProps;

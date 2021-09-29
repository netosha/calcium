import { HTMLAttributes, InputHTMLAttributes } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange?: (n: string | number) => void;
  value?: number | string;
  rounded?: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;

  wrapperProps?: HTMLAttributes<HTMLDivElement> & MotionProps;
}

export type NumberProps = Props & MotionProps;

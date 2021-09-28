import { InputHTMLAttributes } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  rounded?: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
}

export type InputProps = Props & MotionProps;

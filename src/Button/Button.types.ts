import { ButtonHTMLAttributes } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean;
  disabled?: boolean;
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
}

export type ButtonProps = Props & MotionProps;

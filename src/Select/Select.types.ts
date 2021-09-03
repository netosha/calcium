import { SelectHTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  rounded?: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
}

export type SelectProps = Props & MotionProps;

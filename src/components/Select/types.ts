import { HTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  disabled?: boolean;
}

export type Props = SelectProps & MotionProps;

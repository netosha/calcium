import { HTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
  toggled: boolean;
  disabled?: boolean;
}

export type Props = SwitchProps & MotionProps;

import { HTMLAttributes } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
}

export type TooltipProps = Props & MotionProps;

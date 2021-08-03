import { MouseEvent, HTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface NotificationProps extends HTMLAttributes<HTMLLIElement> {
  type: 'regular' | 'success' | 'error';
  onClose?: (event: MouseEvent<SVGElement>) => void;
  closable?: boolean;
}

export type Props = NotificationProps & MotionProps;

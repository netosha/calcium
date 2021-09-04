import { HTMLAttributes, MouseEventHandler } from 'react';
import { MotionProps } from 'framer-motion';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  position?: 'left' | 'right' | 'top' | 'bottom';
  onClose?: MouseEventHandler<HTMLDivElement>;
  onOutsideClick?: MouseEventHandler<HTMLDivElement>;

  overlayProps?: HTMLAttributes<HTMLDivElement> & MotionProps;
}

export type DrawerProps = Props & MotionProps;

import { HTMLAttributes, MouseEventHandler } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose?: MouseEventHandler<SVGElement>;
  onOutsideClick?: MouseEventHandler<HTMLDivElement>;

  overlayProps?: HTMLAttributes<HTMLDivElement> & MotionProps;
}

export type ModalProps = Props & MotionProps;

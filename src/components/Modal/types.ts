import { HTMLAttributes, MouseEvent } from 'react';
import { MotionProps } from 'framer-motion';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  isOpen: boolean;
  onClose: (event: MouseEvent<SVGElement>) => void;
  onOutsideClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export type Props = ModalProps & MotionProps;

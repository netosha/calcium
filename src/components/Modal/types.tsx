import React from 'react';
import { MotionProps } from 'framer-motion';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<SVGElement>) => void;
  onOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export type Props = ModalProps & MotionProps;

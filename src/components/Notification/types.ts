import React from 'react';
import { MotionProps } from 'framer-motion';

export interface NotificationProps extends React.HTMLAttributes<HTMLLIElement> {
  type: 'regular' | 'success' | 'error';
  onClose?: (event: React.MouseEvent<SVGElement>) => void;
  closable?: boolean;
}

export type Props = NotificationProps & MotionProps;

import { HTMLAttributes, MouseEventHandler } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  secondary?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;

  onClose?: MouseEventHandler<SVGElement>;
}

export type NotificationProps = Props & MotionProps;

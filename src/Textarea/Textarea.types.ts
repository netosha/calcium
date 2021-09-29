import { TextareaHTMLAttributes } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
}

export type TextareaProps = Props & MotionProps;

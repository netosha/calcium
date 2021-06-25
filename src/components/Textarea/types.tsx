import React from 'react';
import { MotionProps } from 'framer-motion';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
}

export type Props = InputProps & MotionProps;

import React from 'react';
import { MotionProps } from 'framer-motion';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean;
}

export type Props = TextareaProps & MotionProps;

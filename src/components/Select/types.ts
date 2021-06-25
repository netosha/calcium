import React from 'react';
import { MotionProps } from 'framer-motion';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  disabled?: boolean;
}

export type Props = SelectProps & MotionProps;

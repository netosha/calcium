import React from 'react';
import { MotionProps } from 'framer-motion';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  rounded?: boolean;
  secondary?: boolean;
  danger?: boolean;
  success?: boolean;
}

export type Props = ButtonProps & MotionProps;

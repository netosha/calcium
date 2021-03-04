import React from 'react';
import { MotionProps } from 'framer-motion/types/motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  rounded?: boolean;
  secondary?: boolean;
}

export type Props = ButtonProps & MotionProps;

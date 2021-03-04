import React from 'react';
import { MotionProps } from 'framer-motion/types/motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  rounded?: boolean;
  disabled?: boolean;
}

export type Props = InputProps & MotionProps;

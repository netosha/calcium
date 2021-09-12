import { HTMLAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface Props
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: Date;
  highlighted?: Date[];
  locale?: string;
  onChange?: (d: Date) => void;
  daysProps?: HTMLAttributes<HTMLDivElement>;
  selectedDayProps?: HTMLAttributes<HTMLDivElement>;
}

export type CalendarProps = Props & MotionProps;

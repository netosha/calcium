import { HTMLAttributes } from 'react';

import { MotionProps } from 'framer-motion';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;

  knobProps?: HTMLAttributes<HTMLDivElement> & MotionProps;
  /**
   * You can pass props directly to knob element (div with motion props)
   * @example
   * jsx```
   *  <Switch
   *    knobProps={{
   *          className: 'foo bar',
   *       }}
   *   />
   *  ```
   *
   *  jsx```
   *  <Switch
   *    knobProps={{
   *         transition: { type: 'spring', stiffness: 900, damping: 50 },
   *        }}
   *   />
   * ```
   */
}

export type RadioProps = Props & MotionProps;

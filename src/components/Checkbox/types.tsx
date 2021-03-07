import React from 'react';
import { MotionProps } from 'framer-motion';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled?: boolean;
  pathProps?: React.SVGAttributes<HTMLOrSVGElement> & MotionProps;
  /**
   * You can pass values directly to path element (motion props included)
   * @example
   * jsx```
   *  <Checkbox
   *    pathProps={{
   *          strokeLinecap: 'square',
   *       }}
   *   />
   *  ```
   *
   *  jsx```
   *  <Checkbox
   *    pathProps={{
   *         transition: { type: 'spring', stiffness: 900, damping: 50 },
   *        }}
   *   />
   * ```
   */
}

export type Props = CheckboxProps & MotionProps;

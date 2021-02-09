import React from 'react';
import { MotionProps } from 'framer-motion';

export interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  disabled: boolean;
  checked: boolean;
  pathProps: React.SVGAttributes<HTMLOrSVGElement> & MotionProps;
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

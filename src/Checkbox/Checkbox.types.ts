import { HTMLAttributes, SVGAttributes } from 'react';
import { MotionProps } from 'framer-motion';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  pathProps?: SVGAttributes<SVGPathElement> & MotionProps;
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

export type CheckboxProps = Props & MotionProps;

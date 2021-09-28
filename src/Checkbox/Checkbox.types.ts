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
   * You can pass props directly to check mark element (svg path with motion props)
   * @example
   * jsx```
   *  <Switch
   *    pathProps={{
   *          strokeLinecap: 'square',
   *       }}
   *   />
   *  ```
   *
   *  jsx```
   *  <Switch
   *    pathProps={{
   *         transition: { type: 'spring', stiffness: 900, damping: 50 },
   *        }}
   *   />
   * ```
   */
}

export type CheckboxProps = Props & MotionProps;

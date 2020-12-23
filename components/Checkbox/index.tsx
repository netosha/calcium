import React from 'react';
import { motion, MotionProps, Transition, Variants } from 'framer-motion';
import cn from 'classnames';
import styles from './Checkbox.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLDivElement> {
  disabled: boolean;
  checked: boolean;

  /*
  You can pass values directly to path element (motion props included)
  @example
  jsx```
  pathProps={{
          strokeLinecap: 'square',
        }}
  ```
  pathProps={{
          transition: { type: 'spring', stiffness: 900, damping: 50 },
        }}
  ```
   */
  pathProps: React.SVGAttributes<HTMLOrSVGElement> & MotionProps;
}

// Predefined motion constatns
const animationVariants: Variants = {
  checked: { strokeDashoffset: 0 },
  hidden: { strokeDashoffset: 8.5 },
};
const animationTransition: Transition = {
  type: 'spring',
  stiffness: 900,
  damping: 60,
};

export default React.forwardRef(
  (props: Partial<Props> & MotionProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, className, onClick, pathProps, ...rest } = props;
    const [initalIsChecked, setInitalIsChecked] = React.useState<boolean>(
      false,
    );

    const syntheticClick = (e) => {
      // Prevent events on disabled div
      // Because native div don't support disable attribute
      if (props.disabled) return;
      setInitalIsChecked(!initalIsChecked);
      onClick?.(e);
    };

    React.useEffect(() => {
      setInitalIsChecked(props.checked);
    }, [props.checked]);

    return (
      <motion.div
        ref={ref}
        className={cn(styles.checkbox, className, {
          [styles.checked]: initalIsChecked,
          [styles.disabled]: props.disabled,
        })}
        onClick={syntheticClick}
        {...rest}
      >
        <svg viewBox="0 0 12 12" width="100%" height="100%">
          <motion.path
            d="M3 6l2 2 4-4"
            fill="transparent"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="8.5"
            strokeDashoffset="8.5"
            animate={initalIsChecked ? 'checked' : 'hidden'}
            variants={animationVariants}
            transition={animationTransition}
            {...pathProps}
          />
        </svg>
      </motion.div>
    );
  },
);

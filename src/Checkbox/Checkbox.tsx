import React from 'react';
import { motion, Variants, Transition } from 'framer-motion';
import cn from 'clsx';
import styles from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types';

export const animationVariants: Variants = {
  checked: { strokeDashoffset: 0 },
  hidden: { strokeDashoffset: 8.5 },
};

export const animationTransition: Transition = {
  type: 'spring',
  stiffness: 900,
  damping: 60,
};

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  (props, ref) => {
    const {
      className,
      checked,
      disabled,
      success,
      danger,
      warning,
      onClick,
      pathProps,
      ...rest
    } = props;

    return (
      <motion.div
        ref={ref}
        className={cn(styles.checkbox, className, {
          [styles.checked]: checked,
          [styles.disabled]: disabled,
          [styles.success]: success,
          [styles.danger]: danger,
          [styles.warning]: warning,
        })}
        onClick={!disabled ? onClick : undefined}
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
            initial={checked ? 'checked' : 'hidden'}
            animate={checked ? 'checked' : 'hidden'}
            exit={checked ? 'checked' : 'hidden'}
            variants={animationVariants}
            transition={animationTransition}
            {...pathProps}
          />
        </svg>
      </motion.div>
    );
  },
);

export default Checkbox;

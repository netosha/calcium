import React from 'react';
import { motion, Transition, Variants } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';
import styles from './Checkbox.module.scss';

// Predefined motion constatns
export const animationVariants: Variants = {
  checked: { strokeDashoffset: 0 },
  hidden: { strokeDashoffset: 8.5 },
};

export const animationTransition: Transition = {
  type: 'spring',
  stiffness: 900,
  damping: 60,
};

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const { children, checked, onClick, className, pathProps, ...rest } = props;

    return (
      <motion.div
        ref={ref}
        className={cn(styles.checkbox, className, {
          [styles.checked]: checked,
          [styles.disabled]: props.disabled,
        })}
        onClick={!props.disabled && onClick}
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
            animate={checked ? 'checked' : 'hidden'}
            variants={animationVariants}
            transition={animationTransition}
            {...pathProps}
          />
        </svg>
      </motion.div>
    );
  },
);

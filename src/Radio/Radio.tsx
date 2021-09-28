import React from 'react';

import cn from 'clsx';
import { motion, Transition, Variant } from 'framer-motion';

import styles from './Radio.module.scss';
import { RadioProps } from './Radio.types';

const animationTransition: Transition = {
  type: 'spring',
  stiffness: 600,
  damping: 30,
  duration: 0.05,
};

const whileTap: Variant = {
  scale: 0.9,
};

const Radio = React.forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const {
    className,
    checked,
    disabled,
    success,
    danger,
    warning,
    onClick,
    ...rest
  } = props;

  return (
    <motion.div
      ref={ref}
      className={cn(styles.radio, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
      })}
      onClick={!disabled && onClick}
      whileTap={!disabled ? whileTap : null}
      {...rest}
    >
      <motion.div
        transition={animationTransition}
        initial={{ scale: checked ? 1 : 0 }}
        animate={{ scale: checked ? 1 : 0 }}
        exit={{ scale: checked ? 1 : 0 }}
        className={styles.knob}
      />
    </motion.div>
  );
});

export default Radio;

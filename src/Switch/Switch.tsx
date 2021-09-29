import React from 'react';

import cn from 'clsx';
import { motion, Transition } from 'framer-motion';

import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.types';

const animationTransition: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
};

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    className,
    checked,
    disabled,
    success,
    danger,
    warning,
    onClick,
    knobProps = {},
    ...rest
  } = props;
  const { className: knobClassName, ...restKnobProps } = knobProps;

  return (
    <motion.div
      ref={ref}
      className={cn(styles.switch, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
      })}
      onClick={!disabled && onClick}
      role="switch"
      {...rest}
    >
      <motion.div
        layout="position"
        initial={{ scale: checked ? 1.1 : 1 }}
        animate={{ scale: checked ? 1.1 : 1 }}
        exit={{ scale: checked ? 1.1 : 1 }}
        transition={animationTransition}
        className={cn(styles.knob, knobClassName)}
        {...restKnobProps}
      />
    </motion.div>
  );
});

export default Switch;

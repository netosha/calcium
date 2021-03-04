import React from 'react';
import { motion, MotionProps, Transition, Variants } from 'framer-motion';
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

// Should be refactored in more native way

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

    return <input type="checkbox" className={styles.checbox_test} />;
  },
);

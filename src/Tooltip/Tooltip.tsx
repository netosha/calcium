import React from 'react';

import cn from 'clsx';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.types';

const variants: Variants = {
  hidden: { opacity: 0, transition: { delay: 0.2, duration: 0.15 } },
  visible: { opacity: 1 },
};

const Switch = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    className,
    children,
    content,
    position = 'top',
    disabled,
    ...rest
  } = props;

  const [visible, setVisible] = React.useState(false);
  const [display, setDisplay] = React.useState(false);

  const onMouseEnter = () => {
    setDisplay(true);
    setVisible(true);
  };

  const onMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <AnimatePresence>
        <motion.div
          onMouseEnter={() => setVisible(true)}
          onMouseLeave={() => setVisible(false)}
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
          variants={variants}
          onAnimationComplete={!visible ? () => setDisplay(false) : undefined}
          className={cn(className, styles.tooltip, {
            [styles.top]: position === 'top',
            [styles.bottom]: position === 'bottom',
            [styles.left]: position === 'left',
            [styles.right]: position === 'right',
            [styles.hide]: !display,
          })}
          {...rest}
        >
          {content}
        </motion.div>
      </AnimatePresence>
      <div
        onMouseEnter={() => !disabled && onMouseEnter()}
        onMouseLeave={() => !disabled && onMouseLeave()}
      >
        {children}
      </div>
    </div>
  );
});

export default Switch;

import React from 'react';

import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './Tooltip.module.scss';
import { TooltipProps } from './Tooltip.types';

const Switch = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    className,
    children,
    content,
    position = 'left',
    disabled,
    ...rest
  } = props;
  const [visible, setVisible] = React.useState(false);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <AnimatePresence>
        <motion.div
          initial="hidden"
          animate={visible ? 'visible' : 'hidden'}
          variants={variants}
          className={cn(className, styles.tooltip, {
            [styles.top]: position === 'top',
            [styles.bottom]: position === 'bottom',
            [styles.left]: position === 'left',
            [styles.right]: position === 'right',
          })}
          {...rest}
        >
          {content}
        </motion.div>
      </AnimatePresence>
      <div
        onMouseEnter={() => !disabled && setVisible(true)}
        onMouseLeave={() => !disabled && setVisible(false)}
      >
        {children}
      </div>
    </div>
  );
});

export default Switch;

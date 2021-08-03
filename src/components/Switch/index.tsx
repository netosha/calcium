import React from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { Props } from './types';

import styles from './Switch.module.scss';

const transition = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

export default React.forwardRef(
  (props: Props, ref: React.Ref<HTMLDivElement>) => {
    const { className, toggled, children, ...rest } = props;

    return (
      <>
        <motion.div
          ref={ref}
          data-enabled={toggled}
          className={cn(styles.switch, { [styles.disabled]: props.disabled })}
          onClick={!props.disabled ? props.onClick : null}
          {...rest}
        >
          <motion.div
            layout
            animate={{ scale: toggled ? 1.1 : 1 }}
            transition={transition}
            className={styles.knob}
          />
        </motion.div>
      </>
    );
  },
);

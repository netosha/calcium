import React from 'react';
import ReactDOM from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';
import cn from 'clsx';
import styles from './Drawer.module.scss';
import { DrawerProps } from './Drawer.types';
import { useOutsideClick } from '../utils';

export const closeVariants = {
  pressed: { scale: 0.9 },
};

const dragConstraints = { top: 0, left: 0, right: 0, bottom: 0 };

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  // Prevent Server Side Rendering
  // https://github.com/reactjs/react-modal/issues/580
  if (typeof window !== 'undefined') {
    const {
      className,
      isOpen,
      children,
      onOutsideClick,
      onClose,
      overlayProps = {},
      ...rest
    } = props;
    const { className: overlayClassName, ...restOverlayProps } = overlayProps;

    if (!document.getElementById('calcium-drawer-root')) {
      const portalRoot = document.createElement('div');
      portalRoot.id = 'calcium-drawer-root';
      document.body.appendChild(portalRoot);
    }

    const drawerRef = React.useRef<HTMLDivElement>(null);
    useOutsideClick(drawerRef, onOutsideClick ?? onClose);

    return ReactDOM.createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(styles.overlay, overlayClassName)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 900,
              damping: 60,
              duration: 0.05,
            }}
            {...restOverlayProps}
          >
            <motion.div
              ref={drawerRef}
              layout
              className={cn(styles.drawer, className)}
              drag="x"
              dragElastic={0.2}
              dragConstraints={dragConstraints}
              initial={{ left: '-20%' }}
              animate={{ left: 0 }}
              exit={{ left: '-100%' }}
              transition={{
                type: 'spring',
                delay: 0,
                duration: 0.2,
                stiffness: 500,
                damping: 60,
                mass: 1,
              }}
              {...rest}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.getElementById('calcium-drawer-root'),
    );
  }

  return null;
});

export default Drawer;

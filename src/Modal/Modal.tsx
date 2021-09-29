import React from 'react';

import cn from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import ReactDOM from 'react-dom';

import { useOutsideClick } from '../utils';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

export const closeVariants = {
  pressed: { scale: 0.9 },
};

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  // Prevent Server Side Rendering
  // https://github.com/reactjs/react-modal/issues/580
  if (typeof window !== 'undefined') {
    const {
      children,
      className,
      isOpen,
      onOutsideClick,
      onClose,
      overlayProps = {},
      ...rest
    } = props;

    const { className: overlayClassName, ...restOverlayProps } = overlayProps;

    if (!document.getElementById('calcium-modal-root')) {
      const portalRoot = document.createElement('div');
      portalRoot.id = 'calcium-modal-root';
      document.body.appendChild(portalRoot);
    }

    // Close modal if user clicked out of modal window
    const modalRef = React.useRef<HTMLDivElement>(null);
    useOutsideClick(modalRef, onOutsideClick ?? onClose);

    return ReactDOM.createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            className={cn(styles.overlay, overlayClassName)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ transition: 0.1 }}
            {...restOverlayProps}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                mass: 0.1,
              }}
              className={cn(styles.wrapper, className)}
              {...rest}
            >
              <motion.svg
                onClick={onClose}
                className={styles.close}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                whileTap="pressed"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  variants={closeVariants}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.getElementById('calcium-modal-root')!,
    );
  }

  return null;
});

export default Modal;

import React from 'react';
import ReactDOM from 'react-dom';

import { AnimatePresence, motion } from 'framer-motion';
import cn from 'clsx';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

export const closeVariants = {
  pressed: { scale: 0.9 },
};

const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  onClick:
    | React.MouseEventHandler<HTMLElement>
    | React.MouseEventHandler<SVGGElement>,
) => {
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref?.current) return;
      if (!ref.current.contains(e.target)) {
        onClick?.(e);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClick]);
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

    const { className: overlayClassName } = overlayProps;

    if (!document.getElementById('calcium-portal-root')) {
      const portalRoot = document.createElement('div');
      portalRoot.id = 'calcium-portal-root';
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
            {...overlayProps}
          >
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, y: 24, scale: 0.3 }}
              animate={{ opacity: 1, y: -24, scale: 1 }}
              exit={{ opacity: 0, y: 400, scale: 0.3 }}
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
      document.getElementById('calcium-portal-root'),
    );
  }

  return null;
});

export default Modal;

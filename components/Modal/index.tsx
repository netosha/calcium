import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, MotionProps } from 'framer-motion';
import styles from './Modal.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<SVGElement>) => void;
  onOutsideClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const closeVariants = {
  pressed: { scale: 0.9 },
};

const useClickOutside = (ref: React.RefObject<HTMLDivElement>, onClick) => {
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

export default React.forwardRef(
  (props: Partial<Props> & MotionProps, ref: React.Ref<HTMLDivElement>) => {
    // Prevent Server Side Rendering
    // https://github.com/reactjs/react-modal/issues/580
    if (process.browser) {
      const {
        children,
        title,
        className,
        style,
        isOpen,
        onOutsideClick,
        onClose,
        ...rest
      } = props;
      if (!document.getElementById('calcium-portal-root')) {
        const portalRoot = document.createElement('div');
        portalRoot.id = 'calcium-portal-root';
        document.body.appendChild(portalRoot);
      }

      // Close modal if user clicked out of modal window
      const modalRef = React.useRef<HTMLDivElement>(null);
      useClickOutside(modalRef, onOutsideClick ?? onClose);

      return ReactDOM.createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={ref}
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ transition: 0.1 }}
              {...rest}
            >
              <motion.div
                ref={modalRef}
                initial={{ opacity: 0, y: 24, scale: 0.3 }}
                animate={{ opacity: 1, y: -24, scale: 1 }}
                exit={{ opacity: 0, y: 400, scale: 0.3 }}
                className={styles.wrapper}
                style={style}
              >
                <motion.svg
                  onClick={onClose}
                  className={styles.x}
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
                {title && <p className={styles.title}>{title}</p>}
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById('calcium-portal-root'),
      );
    }
    return null;
  },
);

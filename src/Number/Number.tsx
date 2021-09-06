import React from 'react';
import { motion } from 'framer-motion';
import cn from 'clsx';
import styles from './Number.module.scss';
import { NumberProps } from './Number.types';

const NumberComponent = React.forwardRef<HTMLInputElement, NumberProps>(
  (props, ref) => {
    const {
      className,
      style,
      value,
      onChange,
      disabled,
      rounded,
      success,
      danger,
      warning,
      ...rest
    } = props;

    const onTickerUp = (e) => {
      const parsedValue = Number(value);
      if (!Number.isNaN(parsedValue)) {
        onChange(parsedValue + 1);
      } else {
        onChange(1);
      }
    };

    const onTickerDown = (e) => {
      const parsedValue = Number(value);
      if (!Number.isNaN(parsedValue)) {
        onChange(parsedValue - 1);
      } else {
        onChange(1);
      }
    };

    return (
      <motion.div
        className={cn(styles.wrapper, className, {
          [styles.disabled]: disabled,
          [styles.rounded]: rounded,
          [styles.success]: success,
          [styles.danger]: danger,
          [styles.warning]: warning,
        })}
        style={style}
      >
        <input
          ref={ref}
          type="number"
          className={styles.input}
          value={value}
          disabled={disabled}
          inputMode="numeric"
          {...rest}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <div className={styles.tickers_container}>
          <motion.button
            className={styles.ticker}
            disabled={disabled}
            whileTap={!disabled && 'up'}
            variants={{ up: { y: -1 } }}
            onClick={!disabled && onTickerUp}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4">
              <path
                d="M 5.4 3.2 C 5.647 3.53 5.412 4 5 4 L 1 4 C 0.588 4 0.353 3.53 0.6 3.2 L 2.6 0.533 C 2.8 0.267 3.2 0.267 3.4 0.533 Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
          <motion.button
            className={styles.ticker}
            whileTap={!disabled && 'down'}
            disabled={disabled}
            variants={{ down: { y: 1 } }}
            onClick={!disabled && onTickerDown}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4">
              <path
                d="M 5.4 0.8 C 5.647 0.47 5.412 0 5 0 L 1 0 C 0.588 0 0.353 0.47 0.6 0.8 L 2.6 3.467 C 2.8 3.733 3.2 3.733 3.4 3.467 Z"
                fill="currentColor"
              />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    );
  },
);

export default NumberComponent;

import React from 'react';

import cn from 'clsx';
import { motion } from 'framer-motion';

import { sleep } from '../utils';
import styles from './Number.module.scss';
import { NumberProps } from './Numeric.types';

const NumberComponent = React.forwardRef<HTMLInputElement, NumberProps>(
  (props, ref) => {
    const {
      className,
      style,
      value,
      step = 1,
      onChange,
      disabled,
      rounded,
      success,
      danger,
      warning,
      wrapperProps = {},
      ...rest
    } = props;

    // Share fresh state with setInterval
    // If use regular React.useState() hook state freezes to value when  setInterval called
    const update = React.useState<Date>()[1];
    const state = React.useRef<string | number>(value ?? 0);
    const setState = (newState: string | number) => {
      state.current = newState;
      update(new Date());
    };

    const tickerState = React.useRef<{ id: number; pressed: boolean } | null>(
      null,
    );

    const onTickerUp = () => {
      const parsedValue = Number(state.current);
      if (!Number.isNaN(parsedValue)) {
        setState(parsedValue + Number(step));
      } else {
        setState(Number(step));
      }
    };

    const onTickerDown = () => {
      const parsedValue = Number(state.current);
      if (!Number.isNaN(parsedValue)) {
        setState(parsedValue - Number(step));
      } else {
        setState(-Number(step));
      }
    };

    const onTickerUpPressed = () => {
      if (tickerState.current?.pressed) {
        onTickerUp();
        setTimeout(onTickerUpPressed, 50);
      }
    };

    const onTickerDownPressed = () => {
      if (tickerState.current?.pressed) {
        onTickerDown();
        setTimeout(onTickerDownPressed, 50);
      }
    };

    const onMouseDown = async (direction: 'up' | 'down') => {
      if (direction === 'up') {
        onTickerUp();
      } else {
        onTickerDown();
      }

      const dateId = Date.now();
      tickerState.current = { pressed: true, id: dateId };
      await sleep(450);

      if (
        tickerState.current?.id === dateId &&
        tickerState.current?.pressed === true
      ) {
        if (direction === 'up') {
          onTickerUpPressed();
        } else {
          onTickerDownPressed();
        }
      }
    };

    const onMouseUp = () => {
      tickerState.current = null;
      onChange?.(state.current);
    };

    React.useEffect(() => {
      if (!tickerState.current) {
        onChange?.(state.current);
      }
    }, [state.current]);

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
        {...wrapperProps}
      >
        <input
          ref={ref}
          type="number"
          className={styles.input}
          value={state.current}
          disabled={disabled}
          inputMode="numeric"
          {...rest}
          onChange={(e) => setState(e.target.value)}
        />
        <div
          className={styles.tickers_container}
          onMouseLeave={() => {
            tickerState.current = null;
            onChange?.(state.current);
          }}
        >
          <motion.button
            className={styles.ticker}
            disabled={disabled}
            whileTap={!disabled ? 'up' : undefined}
            onMouseDown={() => onMouseDown('up')}
            onMouseUp={onMouseUp}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
            >
              <motion.path
                initial={{ y: 2 }}
                variants={{ up: { y: 0 } }}
                d="M 5.4 3.2 C 5.647 3.53 5.412 4 5 4 L 1 4 C 0.588 4 0.353 3.53 0.6 3.2 L 2.6 0.533 C 2.8 0.267 3.2 0.267 3.4 0.533 Z"
                fill="currentColor"
              />
            </motion.svg>
          </motion.button>
          <motion.button
            className={styles.ticker}
            whileTap={!disabled ? 'down' : undefined}
            disabled={disabled}
            onMouseDown={() => onMouseDown('down')}
            onMouseUp={onMouseUp}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
            >
              <motion.path
                initial={{ y: 0 }}
                variants={{ down: { y: 2 } }}
                d="M 5.4 0.8 C 5.647 0.47 5.412 0 5 0 L 1 0 C 0.588 0 0.353 0.47 0.6 0.8 L 2.6 3.467 C 2.8 3.733 3.2 3.733 3.4 3.467 Z"
                fill="currentColor"
              />
            </motion.svg>
          </motion.button>
        </div>
      </motion.div>
    );
  },
);

export default NumberComponent;

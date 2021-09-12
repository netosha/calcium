import React from 'react';
import { motion } from 'framer-motion';
import cn from 'clsx';
import styles from './Range.module.scss';
import { RangeProps } from './Range.types';

const Range = React.forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
  const {
    className,
    value,
    onChange,
    min,
    max,
    style,
    disabled,
    success,
    danger,
    warning,
    ...rest
  } = props;

  const [state, setState] = React.useState<number>(Number(value ?? 50));

  const progress =
    Number(state - Number(min ?? 0)) / (Number(max ?? 100) - Number(min ?? 0));
  const styleWithProgress = {
    ...style,
    '--progress': `${progress * 100}%`,
  } as React.CSSProperties;

  return (
    <motion.input
      ref={ref}
      disabled={disabled}
      min={min}
      max={max}
      className={cn(className, styles.range, {
        [styles.disabled]: disabled,
        [styles.success]: success,
        [styles.danger]: danger,
        [styles.warning]: warning,
      })}
      type="range"
      {...rest}
      value={state}
      onChange={(e) => {
        onChange?.(e);
        setState(Number(e.target.value));
      }}
      style={styleWithProgress}
    />
  );
});

export default Range;

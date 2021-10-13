import React from 'react';

import cn from 'clsx';
import { motion, Transition } from 'framer-motion';

import { usePrevious } from '../utils';
import styles from './Calendar.module.scss';
import { CalendarProps } from './Calendar.types';

const getWeekDaysLocaled = (locale: string) =>
  Array.from({ length: 7 }).map((_, i) =>
    new Date(2001, 8, 10 + i)
      .toLocaleString(locale, {
        weekday: 'short',
      })
      .slice(0, 2),
  );

const getDaysAmount = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOffset = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return new Date(year, month, 0).getDay();
};

const monthTransition: Transition = {
  type: 'twin',
  duration: 0.15,
  ease: [0.44, 0, 0.56, 1],
};

const normalizeDate = (d: Date) => {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
};

const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (props, ref) => {
    const {
      className,
      value = new Date(),
      onChange,
      locale,
      daysProps = {},
      selectedDayProps = {},
      highlighted = [],
      ...rest
    } = props;

    const [year, setYear] = React.useState<number>(value.getFullYear());

    const [month, setMonth] = React.useState<number>(value.getMonth());
    const prevMonth = usePrevious(month);
    const [day, setDay] = React.useState<number>(value.getDate());
    // SSR  default locale: en-us
    const currentLocale = locale ?? window?.navigator?.language ?? 'en-us';

    const weekDaysLocaled = getWeekDaysLocaled(currentLocale);

    const normalizedHighlightedDates = highlighted.map(normalizeDate);

    const { className: daysClassName, ...restDayProps } = daysProps;
    const { className: selectedDayClassName, ...restSelectedDayProps } =
      selectedDayProps;

    React.useEffect(() => {
      onChange?.(new Date(Number(year), month, day));
    }, [year, month, day]);

    const onNextMonth = () => {
      if (month === 11) {
        setYear((y) => y + 1);
        setMonth(0);
        return;
      }

      setMonth((v) => v + 1);
    };

    const onPrevMonth = () => {
      if (month === 0) {
        setYear((y) => y - 1);
        setMonth(11);
        return;
      }

      setMonth((v) => v - 1);
    };

    return (
      <motion.div
        ref={ref}
        className={cn(styles.calendar, className)}
        {...rest}
      >
        <div className={styles.header}>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={styles.month_button}
            width="20"
            height="20"
            whileTap="left"
            onClick={onPrevMonth}
          >
            <motion.path
              variants={{ left: { x: -4 } }}
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </motion.svg>
          <span className={styles.month_title}>
            {new Date(year, month).toLocaleString(locale, { month: 'long' })}
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={styles.month_button}
            fill="currentColor"
            width="20"
            height="20"
            whileTap="right"
            onClick={onNextMonth}
          >
            <motion.path
              variants={{ right: { x: 4 } }}
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </motion.svg>
        </div>
        <div className={styles.labels}>
          {weekDaysLocaled.map((x, i) => (
            <div
              key={x}
              className={cn(
                styles.label,
                [5, 6].includes(i) && styles.label_weekend,
              )}
            >
              {x}
            </div>
          ))}
        </div>
        <motion.div
          initial={{ x: month - Number(prevMonth) > 0 ? '2rem' : '-2rem' }}
          animate={{ x: 0 }}
          exit={{ x: month - Number(prevMonth) > 0 ? '2rem' : '-2rem' }}
          className={styles.days}
          key={`${month}`}
          transition={monthTransition}
        >
          {Array.from({
            length: getFirstDayOffset(new Date(Number(year), month, day)),
          }).map((_, i) => (
            <div key={`offset-${i + 1}`} />
          ))}
          {Array.from({
            length: getDaysAmount(new Date(Number(year), month, day)),
          }).map((_, i) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              key={`${year}-${month}-${i + 1}`}
              className={cn(
                styles.day,
                daysClassName,
                i + 1 === day && cn(styles.current_day, selectedDayClassName),
              )}
              onClick={() => setDay(i + 1)}
              {...restDayProps}
              {...(i + 1 === day ? restSelectedDayProps : {})}
            >
              {i + 1}
              {normalizedHighlightedDates.findIndex(
                (d) => d === new Date(Number(year), month, i + 1).getTime(),
              ) !== -1 && <div className={styles.active} />}
            </div>
          ))}
        </motion.div>
      </motion.div>
    );
  },
);

export default Calendar;

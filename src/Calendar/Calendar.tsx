import React from 'react';

import cn from 'clsx';
import { motion, Transition } from 'framer-motion';

import styles from './Calendar.module.scss';
import { CalendarProps } from './Calendar.types';

const getMonthsLocaled = (locale: string) =>
  Array.from({ length: 12 }).map((x, i) =>
    new Date(2001, i, 1).toLocaleString(locale, { month: 'short' }),
  );

const getWeekDaysLocaled = (locale: string) =>
  Array.from({ length: 7 }).map((x, i) =>
    new Date(2001, 8, 10 + i).toLocaleString(locale, {
      weekday: 'short',
    }),
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
      value,
      onChange,
      locale,
      daysProps = {},
      selectedDayProps = {},
      highlighted = [],
      ...rest
    } = props;

    const [year, setYear] = React.useState<number | string>(
      value.getFullYear(),
    );

    const [month, setMonth] = React.useState<number>(value.getMonth());
    const [day, setDay] = React.useState<number>(value.getDate());
    // SSR  default locale: en-us
    const currentLocale = locale ?? window?.navigator?.language ?? 'en-us';

    const monthsLocaled = getMonthsLocaled(currentLocale);
    const weekDaysLocaled = getWeekDaysLocaled(currentLocale);

    const normalizedHighlightedDates = highlighted.map(normalizeDate);

    const { className: daysClassName, ...restDayProps } = daysProps;
    const { className: selectedDayClassName, ...restSelectedDayProps } =
      selectedDayProps;

    React.useEffect(() => {
      onChange(new Date(Number(year), month, day));
    }, [year, month, day]);

    return (
      <motion.div
        ref={ref}
        className={cn(styles.calendar, className)}
        {...rest}
      >
        <div className={styles.header}>
          <select
            className={styles.month_select}
            onChange={(e) => setMonth(Number(e.target.value))}
            value={month}
          >
            {monthsLocaled.map((x, i) => (
              <option className={styles.month_option} value={i}>
                {x}
              </option>
            ))}
          </select>
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={styles.year_input}
          />
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
          initial={{ y: month - value.getMonth() > 0 ? '1rem' : '-1rem' }}
          animate={{ y: 0 }}
          exit={{ y: month - value.getMonth() > 0 ? '-1rem' : '1rem' }}
          className={styles.days}
          key={`${month}`}
          transition={monthTransition}
        >
          {Array.from({
            length: getFirstDayOffset(new Date(Number(year), month, day)),
          }).map((v, i) => (
            <div key={`offset-${i + 1}`} />
          ))}
          {Array.from({
            length: getDaysAmount(new Date(Number(year), month, day)),
          }).map((v, i) => (
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

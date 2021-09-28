import * as React from 'react';

import { Calendar } from '../index';

export default {
  title: 'Calendar',
};

export const Default = () => {
  // const date = new Date(2001, 2, 14);
  const [date, setDate] = React.useState<Date>(new Date(2001, 2, 11));
  return (
    <div>
      <Calendar value={date} locale="en" onChange={(d) => setDate(d)} />
      {`${date?.toLocaleTimeString()} ${date?.toLocaleDateString()}`}
    </div>
  );
};

export const WithActiveDates = () => {
  const now = new Date();
  const [date, setDate] = React.useState<Date>(new Date());
  const highlightedDates = [
    new Date(now.getFullYear(), now.getMonth(), 5),
    new Date(now.getFullYear(), now.getMonth(), 10),
    new Date(now.getFullYear(), now.getMonth(), 6),
  ];

  return (
    <div>
      <Calendar
        value={date}
        highlighted={highlightedDates}
        locale="en"
        onChange={(d) => setDate(d)}
      />
      {`${date?.toLocaleTimeString()} ${date?.toLocaleDateString()}`}
    </div>
  );
};

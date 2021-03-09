import { FC } from 'react';

import Button from '../ui/button';
import classes from './event-search.module.css';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const EventsSearch: FC = () => {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month">
            {MONTHS.map((month, i) => (
              <option key={i} value={`${i + 1}`}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button onClick={() => {}}>Find Events</Button>
    </form>
  );
};

export default EventsSearch;

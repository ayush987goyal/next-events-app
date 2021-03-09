import { FC, FormEvent, useRef } from 'react';

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

export interface EventsSearchProps {
  onSearch: (selectedYear: string, selectedMonth: string) => void;
}

const EventsSearch: FC<EventsSearchProps> = ({ onSearch }) => {
  const yearInputRef = useRef<HTMLSelectElement>();
  const monthInputRef = useRef<HTMLSelectElement>();

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    onSearch(selectedYear, selectedMonth);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
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

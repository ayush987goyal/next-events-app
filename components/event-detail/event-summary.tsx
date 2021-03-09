import { FC } from 'react';

import classes from './event-summary.module.css';

export interface EventSummaryProps {
  title: string;
}

const EventSummary: FC<EventSummaryProps> = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;

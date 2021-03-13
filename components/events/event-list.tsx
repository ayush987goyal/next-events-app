import { FC } from 'react';

import { Event } from '../../services/model';
import EventItem from './event-item';
import classes from './event-list.module.css';

export interface EventListProps {
  events: Event[];
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;

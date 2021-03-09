import { FC } from 'react';
import { Event } from '../../data/data';
import EventItem from './event-item';

export interface EventListProps {
  events: Event[];
}

const EventList: FC<EventListProps> = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;

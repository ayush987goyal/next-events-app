import { FC } from 'react';
import Link from 'next/link';
import { Event } from '../../data/data';

export interface EventItemProps {
  event: Event;
}

const EventItem: FC<EventItemProps> = ({ event }) => {
  const humanReadableDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
  const formattedAddress = event.location.replace(', ', '\n');
  const exploreLink = `/events/${event.id}`;

  return (
    <li>
      <img src={`/${event.image}`} alt={event.title} />
      <div>
        <div>
          <h2>{event.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

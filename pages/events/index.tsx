import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../data/data';

const AllEventsPage = () => {
  const router = useRouter();
  const allEvents = getAllEvents();

  const searchEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEventsPage;

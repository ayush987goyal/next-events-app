import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../data/data';

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={allEvents} />
    </>
  );
};

export default AllEventsPage;

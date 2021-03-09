import EventList from '../../components/events/event-list';
import { getAllEvents } from '../../data/data';

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList events={allEvents} />
    </div>
  );
};

export default AllEventsPage;

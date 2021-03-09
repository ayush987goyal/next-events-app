import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../data/data';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;

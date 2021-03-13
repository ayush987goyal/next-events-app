import { GetStaticProps } from 'next';

import EventList from '../components/events/event-list';
import { fetchFeaturedEvents } from '../services/events-service';
import { Event } from '../services/model';

interface HomePageProps {
  featuredEvents: Event[];
}

const HomePage = ({ featuredEvents }: HomePageProps) => {
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await fetchFeaturedEvents();

  return {
    props: { featuredEvents: events },
  };
};

export default HomePage;

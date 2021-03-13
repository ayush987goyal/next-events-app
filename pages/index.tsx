import { GetStaticProps } from 'next';
import Head from 'next/head';

import EventList from '../components/events/event-list';
import { fetchFeaturedEvents } from '../services/events-service';
import { Event } from '../services/model';

interface HomePageProps {
  featuredEvents: Event[];
}

const HomePage = ({ featuredEvents }: HomePageProps) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventList events={featuredEvents} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await fetchFeaturedEvents();

  return {
    props: { featuredEvents: events },
    revalidate: 1800,
  };
};

export default HomePage;

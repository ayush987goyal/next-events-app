import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';
import { fetchAllEvents } from '../../services/events-service';
import { Event } from '../../services/model';

interface AllEventsPageProps {
  events: Event[];
}

const AllEventsPage = ({ events }: AllEventsPageProps) => {
  const router = useRouter();

  const searchEventsHandler = (year: string, month: string) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={searchEventsHandler} />
      <EventList events={events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allEvents = await fetchAllEvents();

  return {
    props: { events: allEvents },
    revalidate: 60,
  };
};

export default AllEventsPage;

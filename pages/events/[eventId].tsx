import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import {
  fetchEventById,
  fetchFeaturedEvents,
} from '../../services/events-service';
import { Event } from '../../services/model';

interface EventDetailPageProps {
  event: Event;
}

const EventDetailPage = ({ event }: EventDetailPageProps) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const eventId = params.eventId as string;
  const event = await fetchEventById(eventId);

  return {
    props: { event },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const featuredEvents = await fetchFeaturedEvents();

  return {
    paths: featuredEvents.map((event) => ({
      params: { eventId: event.id },
    })),
    fallback: 'blocking',
  };
};

export default EventDetailPage;

import { GetStaticProps, GetStaticPaths } from 'next';

import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/ui/error-alert';
import { fetchAllEvents, fetchEventById } from '../../services/events-service';
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

  return { props: { event } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allEvents = await fetchAllEvents();

  return {
    paths: allEvents.map((event) => ({
      params: { eventId: event.id },
    })),
    fallback: false,
  };
};

export default EventDetailPage;

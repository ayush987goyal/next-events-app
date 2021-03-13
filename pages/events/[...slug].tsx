import { GetServerSideProps } from 'next';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
import { fetchFilteredEvents } from '../../services/events-service';
import { Event } from '../../services/model';

interface FilteredEventsPageProps {
  hasError?: boolean;
  filteredEvents: Event[];
  year: number;
  month: number;
}

const FilteredEventsPage = ({
  hasError,
  filteredEvents,
  year,
  month,
}: FilteredEventsPageProps) => {
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events ">Show All Events</Button>
        </div>
      </>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filters!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events ">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const filterData = params.slug;

  const [filterYear, filterMonth] = filterData as string[];
  const year = +filterYear;
  const month = +filterMonth;

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await fetchFilteredEvents({ year, month });
  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
};

export default FilteredEventsPage;

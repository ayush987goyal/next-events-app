import { GetServerSideProps } from 'next';
import Head from 'next/head';

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
  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta name="description" content={`All events for ${month}/${year}`} />
    </Head>
  );

  if (hasError) {
    return (
      <>
        {pageHeadData}
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
        {pageHeadData}
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
      {pageHeadData}
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

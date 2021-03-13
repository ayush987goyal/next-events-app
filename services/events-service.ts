import { Event, EventWithoutId } from './model';

const API_URL = 'https://next-course-85ef6-default-rtdb.firebaseio.com/';

export async function fetchAllEvents() {
  const response = await fetch(`${API_URL}/events.json`);
  const data: Record<string, EventWithoutId> = await response.json();

  const events: Event[] = Object.entries(data).map(([id, value]) => ({
    id,
    ...value,
  }));

  return events;
}

export async function fetchFeaturedEvents() {
  const allEvents = await fetchAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function fetchEventById(id: string) {
  const response = await fetch(`${API_URL}/events/${id}.json`);
  const data: EventWithoutId = await response.json();

  const event: Event = data ? { id, ...data } : null;

  return event;
}

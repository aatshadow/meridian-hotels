/* A tiny decoupled bus between the booking dock and the enquiry form.
   The dock emits the chosen dates/room/guests; the Contact form listens
   and pre-fills, then the page scrolls to #contact. */

export type Enquiry = {
  checkin: string;
  checkout: string;
  room: string; // room id or "" for any
  guests: number;
};

const EVENT = "calypso:enquiry";

export function emitEnquiry(detail: Enquiry) {
  window.dispatchEvent(new CustomEvent<Enquiry>(EVENT, { detail }));
}

export function onEnquiry(cb: (e: Enquiry) => void) {
  const handler = (ev: Event) => cb((ev as CustomEvent<Enquiry>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

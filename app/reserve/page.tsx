import Script from "next/script";

export default function ReservePage() {
  return (
    <>
      <a
        className="resos-booking-widget"
        href="https://abasto.resos.com/booking"
        data-lang="it"
        data-restaurant-id="QzkanTzqLErTncNfP"
        data-domain="abasto.resos.com"
      >
        Prenota un tavolo
      </a>

      <Script
        src="https://abasto.resos.com/embed/booking/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}

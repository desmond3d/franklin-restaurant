export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      {/* Reservation band */}
      <div
        id="book"
        className="scroll-mt-24 border-b border-white/10 bg-linear-to-r from-amber-700 to-amber-600"
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <div>
            <h2 className="font-serif text-2xl tracking-wide sm:text-3xl">
              Book a Table
            </h2>
            <p className="mt-1 text-sm text-amber-100">
              Reservations for lunch &amp; dinner, seven days a week.
            </p>
          </div>
          <a
            href={`https://wa.me/2349090267533?text=${encodeURIComponent(
              "Hi Franklin! 👋 I'd like to reserve a table."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-50"
          >
            Reserve on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-amber-600 to-amber-800 text-base font-semibold text-amber-50">
              F
            </span>
            <span className="font-serif text-xl tracking-[0.2em]">FRANKLIN</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
            Bold flavours, fresh ingredients, and a seat at the table you&apos;ll
            want to come back to.
          </p>
        </div>

        {/* Location */}
        <div id="location" className="scroll-mt-24">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Location
          </h3>
          <address className="mt-4 not-italic text-sm leading-relaxed text-neutral-400">
            Behind ugbromo market
            <br />
            warri, Delta
            <br />
            Nigeria
          </address>
          <p className="mt-4 text-sm text-neutral-400">
            <span className="text-neutral-200">Mon–Sun</span> · 9am – 10pm
          </p>
        </div>

        {/* Contact */}
        <div id="contact" className="scroll-mt-24">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>
              <a
                href="tel:+2349090267533"
                className="transition hover:text-white"
              >
                +234 909 026 7533
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@franklin.com"
                className="transition hover:text-white"
              >
                hello@franklin.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className=" mx-auto max-w-6xl px-4 py-6 text-center text-xs text-neutral-500 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <span>© {2026} Franklin. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Franklin on Facebook"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-500/40 hover:bg-white/5 hover:text-white"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Franklin on Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-500/40 hover:bg-white/5 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Franklin on TikTok"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition hover:border-amber-500/40 hover:bg-white/5 hover:text-white"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </footer>
  );
}

/* ---------- Social icons ---------- */

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.95c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07zm0 3.32a4.57 4.57 0 1 0 0 9.14 4.57 4.57 0 0 0 0-9.14zm0 7.54a2.97 2.97 0 1 1 0-5.94 2.97 2.97 0 0 1 0 5.94zm5.82-7.74a1.07 1.07 0 1 1-2.14 0 1.07 1.07 0 0 1 2.14 0z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.89-4.6V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 1 0 16.4 15.7V8.66a8.16 8.16 0 0 0 4.78 1.53V6.74a4.85 4.85 0 0 1-1.59-.05z" />
    </svg>
  );
}

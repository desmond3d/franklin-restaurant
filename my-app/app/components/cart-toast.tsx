"use client";

import { useEffect, useState } from "react";
import { useCart } from "./cart-context";

export default function CartToast() {
  const { notification, openCart } = useCart();
  const [dismissedKey, setDismissedKey] = useState<number | null>(null);

  // Auto-hide the current toast after a moment (only setState inside the timer).
  useEffect(() => {
    if (!notification) return;
    const timer = setTimeout(() => setDismissedKey(notification.key), 2600);
    return () => clearTimeout(timer);
  }, [notification]);

  const visible = !!notification && notification.key !== dismissedKey;

  return (
    <div
      aria-live="polite"
      className={`fixed left-1/2 top-20 z-[60] -translate-x-1/2 transition-all duration-300 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      {notification && (
        <div className="flex items-center gap-3 rounded-full border border-emerald-500/30 bg-neutral-900/95 py-2.5 pl-3 pr-2 text-sm text-white shadow-xl shadow-black/30 backdrop-blur">
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
            <CheckIcon />
          </span>
          <span className="max-w-[60vw] truncate">
            <span className="font-semibold">{notification.name}</span> added to
            your order
          </span>
          <button
            onClick={() => {
              setDismissedKey(notification.key);
              openCart();
            }}
            className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/20"
          >
            View
          </button>
        </div>
      )}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

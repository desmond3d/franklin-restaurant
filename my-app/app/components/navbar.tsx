"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./cart-context";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#contact" },
];

// Franklin's WhatsApp line — international format, digits only (no +, spaces or leading 0).
const WHATSAPP_NUMBER = "2349090267533";

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export default function Navbar() {
  const {
    items: cart,
    itemCount,
    subtotal,
    drawerOpen: cartOpen,
    openCart,
    closeCart,
    updateQty,
    removeItem,
  } = useCart();

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Bridge the shared drawer state to the existing JSX handlers.
  const setCartOpen = (open: boolean) => (open ? openCart() : closeCart());

  // Hand the order off to WhatsApp with a pre-filled, itemised message.
  const orderOnWhatsApp = () => {
    if (cart.length === 0) return;
    const lines = cart.map(
      (item, i) =>
        `${i + 1}. ${item.name} ×${item.qty} — ${naira(item.price * item.qty)}`
    );
    const message = [
      "🍽️ *New Order — Franklin*",
      "",
      ...lines,
      "",
      `*Total: ${naira(subtotal)}*`,
      "",
      "Name: ",
      "Delivery address: ",
      "Notes: ",
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Elevate the bar once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while an overlay is open, and close on Escape.
  useEffect(() => {
    const open = cartOpen || menuOpen;
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCart();
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [cartOpen, menuOpen, closeCart]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "border-b border-transparent bg-neutral-950/40 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="-ml-2 inline-flex items-center justify-center rounded-full p-2 text-neutral-200 transition hover:bg-white/10 md:hidden"
          >
            <BurgerIcon open={menuOpen} />
          </button>

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-amber-600 to-amber-800 text-base font-semibold text-white shadow-sm">
              F
            </span>
            <span className="font-display text-xl tracking-[0.2em]">FRANKLIN</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative text-sm font-medium tracking-wide transition-colors hover:text-white ${
                      active ? "text-white" : "text-neutral-300"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-amber-500 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/menu"
              className="hidden rounded-full bg-linear-to-r from-amber-600 to-amber-500 px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-md shadow-amber-600/30 transition hover:from-amber-500 hover:to-amber-400 sm:inline-flex"
            >
              Order Now
            </Link>

            {/* Cart / order button */}
            <button
              aria-label={`Open order, ${itemCount} items`}
              onClick={() => setCartOpen(true)}
              className="relative inline-flex items-center justify-center rounded-full p-2.5 text-white transition hover:bg-white/10"
            >
              <BagIcon />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-amber-600 px-1 text-[11px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className={`overflow-hidden border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl transition-[max-height] duration-300 ease-out md:hidden ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="block border-b border-white/5 py-3 text-sm font-medium tracking-wide text-neutral-200 last:border-b-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/menu"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-linear-to-r from-amber-600 to-amber-500 py-2.5 text-center text-sm font-semibold text-white"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* ---------- Order drawer ---------- */}
      {/* Overlay */}   
      <div
        onClick={() => setCartOpen(false)}
        className={`fixed inset-0 z-50 bg-stone-950/40 backdrop-blur-sm transition-opacity duration-300 ${
          cartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Your order"
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-neutral-950 text-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <h2 className="font-display text-lg tracking-wide text-white">
              Your Order
            </h2>
            <p className="text-xs uppercase tracking-widest text-amber-400/80">
              {itemCount} {itemCount === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            aria-label="Close order"
            onClick={() => setCartOpen(false)}
            className="rounded-full p-2 text-neutral-400 transition hover:bg-white/10 hover:text-white"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/5 text-neutral-500">
                <BagIcon />
              </span>
              <p className="text-sm text-neutral-400">Your order is empty.</p>
              <Link
                href="/menu"
                onClick={() => setCartOpen(false)}
                className="text-sm font-medium text-amber-400 underline underline-offset-4"
              >
                Browse the menu
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {cart.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <span className="grid h-20 w-20 shrink-0 place-items-center rounded-xl bg-white/5 text-3xl">
                    {item.image}
                  </span>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <h3 className="text-sm font-medium text-white">
                        {item.name}
                      </h3>
                      <button
                        aria-label={`Remove ${item.name}`}
                        onClick={() => removeItem(item.id)}
                        className="text-neutral-500 transition hover:text-white"
                      >
                        <CloseIcon small />
                      </button>
                    </div>
                    <p className="mt-0.5 text-sm text-neutral-400">
                      {naira(item.price)}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-white/15">
                        <button
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(item.id, -1)}
                          className="grid h-8 w-8 place-items-center rounded-full text-neutral-300 transition hover:bg-white/10"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-white">
                          {item.qty}
                        </span>
                        <button
                          aria-label="Increase quantity"
                          onClick={() => updateQty(item.id, 1)}
                          className="grid h-8 w-8 place-items-center rounded-full text-neutral-300 transition hover:bg-white/10"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {naira(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-white/10 px-6 py-5">
            <div className="mb-1 flex items-center justify-between text-sm text-neutral-400">
              <span>Subtotal</span>
              <span>{naira(subtotal)}</span>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-base font-medium text-white">Total</span>
              <span className="font-display text-xl text-white">
                {naira(subtotal)}
              </span>
            </div>
            <p className="mb-4 text-center text-xs text-neutral-500">
              You&apos;ll confirm your order &amp; delivery details on WhatsApp.
            </p>
            <button
              onClick={orderOnWhatsApp}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

/* ---------- Icons ---------- */

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.488-.91zm5.422-6.474c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function CloseIcon({ small = false }: { small?: boolean }) {
  const s = small ? 16 : 20;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      {open ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M3 6h18" />
          <path d="M3 12h18" />
          <path d="M3 18h18" />
        </>
      )}
    </svg>
  );
}

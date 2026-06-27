"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

/** What a menu page passes to `addItem` — qty defaults to 1. */
type NewItem = Omit<CartItem, "qty"> & { qty?: number };

/** A transient "added to order" toast. `key` changes on every add so the toast re-triggers. */
type Notification = { key: number; name: string };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  drawerOpen: boolean;
  notification: Notification | null;
  addItem: (item: NewItem) => void;
  updateQty: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "franklin-cart";

/** Read the persisted cart (client only); returns [] on the server or on any error. */
function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);
  const nonce = useRef(0);
  const loaded = useRef(false);

  // Hydrate from localStorage once on mount. Starting empty (matching the
  // server render) avoids a hydration mismatch; the saved cart loads a tick later.
  useEffect(() => {
    queueMicrotask(() => {
      const stored = readStoredCart();
      if (stored.length) setItems(stored);
      loaded.current = true;
    });
  }, []);

  // Persist on every change — but only after the initial load, so we never
  // clobber the saved cart with the empty starting state.
  useEffect(() => {
    if (!loaded.current) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore quota / private-mode write failures.
    }
  }, [items]);

  const addItem = useCallback((item: NewItem) => {
    const add = item.qty ?? 1;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + add } : i
        );
      }
      return [...prev, { ...item, qty: add }];
    });
    // Fire a toast instead of popping the drawer.
    nonce.current += 1;
    setNotification({ key: nonce.current, name: item.name });
  }, []);

  const updateQty = useCallback((id: number, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setDrawerOpen(true), []);
  const closeCart = useCallback(() => setDrawerOpen(false), []);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.qty * i.price, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      subtotal,
      drawerOpen,
      notification,
      addItem,
      updateQty,
      removeItem,
      clearCart,
      openCart,
      closeCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      drawerOpen,
      notification,
      addItem,
      updateQty,
      removeItem,
      clearCart,
      openCart,
      closeCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a <CartProvider>");
  }
  return ctx;
}

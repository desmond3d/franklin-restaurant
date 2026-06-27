import type { Metadata } from "next";
import MenuSection from "../components/menu-section";

export const metadata: Metadata = {
  title: "Menu · Franklin",
  description: "Explore the full Franklin menu — shawarma, burgers, rice & more.",
};

export default function MenuPage() {
  return <MenuSection />;
}

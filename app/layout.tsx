// app/layout.tsx
import type { ReactNode } from "react";
import { getHeaderSettings } from "@/lib/header";
import { getPrimaryMenu } from "@/lib/menu";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { MenuItem as StrictMenuItem } from "@/types/menu";
import "./globals.css";

/** Raw menu shape coming from WP */
type RawMenuItem = {
  id: string;
  label?: string;
  path?: string;
  childItems?: {
    nodes?: RawMenuItem[];
  };
};

/** Convert loose WP data → strict app type */
function normalizeMenu(items: RawMenuItem[]): StrictMenuItem[] {
  return items.map((item) => ({
    id: item.id,
    label: item.label ?? "Untitled",
    path: item.path ?? "#",
    childItems: item.childItems?.nodes?.length
      ? { nodes: normalizeMenu(item.childItems.nodes) }
      : undefined,
  }));
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headerData = await getHeaderSettings();
  const rawMenu: RawMenuItem[] = await getPrimaryMenu();

  // Remove items that are already children (avoid duplicates in top level)
  const deduped = rawMenu.filter(
    (item) =>
      !rawMenu.some((parent) =>
        parent.childItems?.nodes?.some((child) => child.id === item.id)
      )
  );

  // Convert to strict safe type for the UI
  const menu: StrictMenuItem[] = normalizeMenu(deduped);

  return (
    <html lang="en">
      <body>
        <Navbar headerData={headerData} menu={menu} />
        <main className="pt-[132px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

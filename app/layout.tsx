// app/layout.tsx
import { getHeaderSettings } from "@/lib/header";
import { getPrimaryMenu } from "@/lib/menu";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export default async function RootLayout({ children }) {
  const headerData = await getHeaderSettings();
  const rawMenu = await getPrimaryMenu();

  // 🔥 REMOVE DUPLICATES (only root items)
  const menu = rawMenu.filter(
    item =>
      !rawMenu.some(parent =>
        parent.childItems?.nodes?.some(child => child.id === item.id)
      )
  );

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

// components/NavbarWrapper.tsx
import { getHeaderSettings } from "@/lib/header";
import { getPrimaryMenu } from "@/lib/menu";
import Navbar from "./layout/Navbar";

interface MenuItem {
  id: string;
  label: string;
  path: string;
  childItems?: {
    nodes?: MenuItem[];
  };
}

export default async function NavbarWrapper() {
  const headerData = await getHeaderSettings();
  const rawMenu: MenuItem[] = await getPrimaryMenu();

  const menu: MenuItem[] = rawMenu.filter((item: MenuItem) =>
    !rawMenu.some((parent: MenuItem) =>
      parent.childItems?.nodes?.some((child: MenuItem) => child.id === item.id)
    )
  );

  if (!headerData) return null;

  return <Navbar headerData={headerData} menu={menu} />;
}

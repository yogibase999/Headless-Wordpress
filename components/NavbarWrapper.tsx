// components/NavbarWrapper.tsx

import { getHeaderSettings } from "@/lib/header";
import Navbar from "./layout/Navbar";
export default async function NavbarWrapper() {
  const headerData = await getHeaderSettings();
  return <Navbar headerData={headerData} />;
}

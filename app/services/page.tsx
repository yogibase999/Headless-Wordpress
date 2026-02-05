import ServicesSection from "@/components/home/ServicesSection";
import { getHomeServicesSection } from "@/lib/home";

export const metadata = {
  title: "Services | East Bay Pharmacy",
};

export default async function ServicesPage() {
  const data = await getHomeServicesSection();
  return <ServicesSection data={data} />;
}

import FormsSection from "@/components/home/FormsSection";
import { getHomeFormsSection } from "@/lib/home";

export const metadata = {
  title: "Forms | East Bay Pharmacy",
};

export default async function FormsPage() {
  const data = await getHomeFormsSection();
  return <FormsSection data={data} />;
}

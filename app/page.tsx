/*import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FormsSection from "@/components/home/FormsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FormsSection />
      <CTASection />
    </Layout>
  );
}
*/
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";
import FormsSection from "@/components/home/FormsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";


import {
  getHomeHeroSection,
  getHomeAboutSection,
  getHomeFeaturesSection,getHomeCtaSection,getHomeFormsSection,getHomeServicesSection,getHomeTestimonialsSection
} from "@/lib/home";

export default async function Home() {
  const heroData = await getHomeHeroSection();
  const aboutData = await getHomeAboutSection();
  const featuresData = await getHomeFeaturesSection();
  const ctaData = await getHomeCtaSection();
  const formdata = await getHomeFormsSection();
  const serviceData = await getHomeServicesSection();
  const testiMonialData = await getHomeTestimonialsSection();
  return (
    <>
      <HeroSection data={heroData} />
	   <ServicesSection data={serviceData} />
      <AboutSection data={aboutData} />
      <FeaturesSection data={featuresData} />
	  <TestimonialsSection data={testiMonialData} />
	  <FormsSection data={formdata} />
	  <CTASection data={ctaData} />
	  
    </>
  );
}


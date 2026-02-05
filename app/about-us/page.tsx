import { getAboutPageData } from "@/lib/about";
import Link from "next/link";

export const metadata = {
  title: "About Us | East Bay Pharmacy",
};

export default async function AboutPage() {
  const data = await getAboutPageData();
  if (!data) return null;

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.heroTitle}</h1>
          <p className="text-xl text-primary-foreground/90">
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
              {data.storyTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.storyHeading}</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>{data.storyPara1}</p>
              <p>{data.storyPara2}</p>
              <p>{data.storyPara3}</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={data.storyImage?.node?.sourceUrl}
              alt="Our Story"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.aboutStats?.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">What Guides Us Every Day</h2>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.aboutValues?.map((value, i) => (
            <div key={i} className="text-center p-6">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img
              src={data.teamImage?.node?.sourceUrl}
              alt="Team"
              className="w-full h-[400px] object-cover"
            />
          </div>

          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm mb-4">
              {data.teamTag}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{data.teamHeading}</h2>

            <div className="space-y-6">
              {data.teamRoles?.map((role, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{role.name}</h3>
                    <p className="text-muted-foreground">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{data.ctaHeading}</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            {data.ctaDescription}
          </p>
          <Link
            href={data.ctaButtonLink?.url || "#"}
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold"
          >
            {data.ctaButtonText}
          </Link>
        </div>
      </section>
    </>
  );
}

export type AboutStat = {
  value: string;
  label: string;
};

export type AboutValue = {
  title: string;
  description: string;
};

export type TeamRole = {
  name: string;
  description: string;
};

export type AboutPageData = {
  heroTitle: string;
  heroDescription: string;

  storyTag: string;
  storyHeading: string;
  storyPara1: string;
  storyPara2: string;
  storyPara3: string;
  storyImage?: { node?: { sourceUrl: string } };

  aboutStats?: AboutStat[];
  aboutValues?: AboutValue[];

  teamTag: string;
  teamHeading: string;
  teamImage?: { node?: { sourceUrl: string } };

  teamRoles?: TeamRole[];

  ctaHeading: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonLink?: { url: string };
};

export async function getAboutPageData(): Promise<AboutPageData | null> {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query AboutPage {
          page(id: "about-us", idType: URI) {
            aboutPage {
              heroTitle
              heroDescription

              storyTag
              storyHeading
              storyPara1
              storyPara2
              storyPara3
              storyImage { node { sourceUrl } }

              aboutStats {
                value
                label
              }

              aboutValues {
                title
                description
              }

              teamTag
              teamHeading
              teamImage { node { sourceUrl } }

              teamRoles {
                name
                description
              }

              ctaHeading
              ctaDescription
              ctaButtonText
              ctaButtonLink { url }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.aboutPage || null;
}

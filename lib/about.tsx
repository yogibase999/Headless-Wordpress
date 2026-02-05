export async function getAboutPageData() {
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

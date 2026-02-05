export async function getHomeAboutSection() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query HomeAbout {
          page(id: "/", idType: URI) {
            homeAboutSection {
              aboutTagline
              aboutHeading
              aboutHeadingHighlight
              aboutPara1
              aboutPara2
              aboutImage {
                node {
                  sourceUrl
                }
              }
              stat1Value
              stat1Label
              stat2Value
              stat2Label
              stat3Value
              stat3Label
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data.page.homeAboutSection;
}

export async function getHomeHeroSection() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query HeroSection {
          page(id: "/", idType: URI) {
            heroSection {
              heroBadgeText
              heroHeading
              heroHeadingHighlight
              heroDescription
              heroBackgroundImage {
                node { sourceUrl }
              }
              heroButton1    {
                link {
                  target
                  title
                  url
                }
                text
              }
              heroButton2    {
                link {
                  target
                  title
                  url
                }
                text
              }
              heroFeatures {
                title
                description
                icon
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data.page.heroSection;
}
export async function getHomeFeaturesSection() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query FeaturesSection {
          page(id: "home", idType: URI) {
            homeFeaturesSection {
              featuresTagline
              featuresHeading
              featuresHeadingHighlight
              featuresDescription
              featuresList {
                title
                description
                icon
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.homeFeaturesSection || null;
}

export async function getHomeCtaSection() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query CTASection {
          page(id: "home", idType: URI) {
            homeCtaSection {
              ctaHeading
              ctaHeadingHighlight
              ctaDescription
              ctaBtn1Text
              ctabtn1link
              ctaBtn2Text
              ctaBtn2Link
              ctaFooterText
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.homeCtaSection || null;
}
export async function getHomeFormsSection() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query FormsSection {
          page(id: "home", idType: URI) {
            homeFormsSection {
              formsTagline
              formsHeading
              formsHeadingHighlight
              formsDescription
              formsList {
                title
                description
                link
                icon
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.homeFormsSection || null;
}
export async function getHomeServicesSection() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query ServicesSection {
          page(id: "home", idType: URI) {
            homeServicesSection {
              servicesTagline
              servicesHeading
              servicesHeadingHighlight
              servicesDescription
              servicesList {
                title
                description
                link
                icon
                features {
                  text
                }
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.homeServicesSection || null;
}
export async function getHomeTestimonialsSection() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query TestimonialsSection {
          page(id: "/", idType: URI) {
            homeTestimonialsSection {
              testimonialsTagline
              testimonialsHeading
              testimonialsHeadingHighlight
              testimonialsList {
                quote
                author
                role
                organization
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.homeTestimonialsSection;
}

export async function getFooterData() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query FooterData {
          footerSettings {
		  footernewSettings{
            footerLogo { node { sourceUrl } }
            footerDescription
            facebookUrl
            linkedinUrl

            quickLinks {
              label
              url
            }

            serviceLinks {
              label
              url
            }

            footerAddress
            footerPhone
            footerEmail
            footerHours
            footerHoursHighlight
          }
		  }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.footerSettings.footernewSettings || null;
}

import { HeaderData } from "@/types/global";
export async function getHeaderSettings() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetHeader {
          headerSettings {
            headergraph {
              phoneNumber
              pharmacistText
              logo {
                node {
                  sourceUrl
                }
              }
              navigationLinks {
                name
                path
              }
              portalLink {
                title
                url
                target
              }
              billpayLink {
                title
                url
                target
              }
              ctaText
              ctaLink {
                title
                url
                target
              }
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.headerSettings?.headergraph || null;
}

export async function getContactPageData() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query ContactPage {
          page(id: "contact", idType: URI) {
            contactPage {
              heroTitle
              heroDescription

              addressTitle
              addressLine1
              addressLine2

              phoneTitle
              phoneNumber
              phoneNote

              emailTitle
              emailAddress

              hoursTitle
              hoursText

              mapText
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json?.data?.page?.contactPage || null;
}

// lib/menu.ts
export async function getPrimaryMenu() {
  const res = await fetch(process.env.NEXT_PUBLIC_WP_GRAPHQL_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query PrimaryMenu {
  menu(id: "primary", idType: LOCATION) {
    menuItems {
      nodes {
        id
        label
        path
        parentId
        childItems {
          nodes {
            id
            label
            path
            parentId
            childItems {
              nodes {
                id
                label
                path
              }
            }
          }
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
  return json.data.menu.menuItems.nodes;
}

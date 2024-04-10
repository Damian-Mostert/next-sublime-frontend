import "@styles";

import { builder } from "@builder.io/sdk";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

import metaDetails from "../default_meta_details.json";

export async function generateMetadata({ params }) {
  return await new Promise((Resolve) => {
    builder
      .get("page", {
        userAttributes: {
          urlPath: "/" + params.page.join("/"),
        },
      })
      .then((res) => {
        if (res) {
          Resolve(res.data);
        } else {
          Resolve(metaDetails);
        }
      });
  });
}

export default async function Layout({ children }) {
  return <>{children}</>;
}

import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export default builder;

export function makeMetaDetails(slug) {
  return async function generateMetadata({ params }) {
    return await new Promise((Resolve) => {
      builder
        .get("page", {
          userAttributes: {
            urlPath: slug ? slug : "/" + params.page.join("/"),
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
  };
}


import "@styles";

import services from "@services/server";

import metaDetails from "../default_meta_details.json";

export async function generateMetadata({ params }) {
  return await new Promise((Resolve) => {
    services.page
      .getMetadata({ slug: "register" })
      .then((response) => response.success && [Resolve(response.data)])
      .then((error) => {
        Resolve(metaDetails);
      });
  });
}

export default async function Layout({ children }) {
  return <>{children}</>;
}

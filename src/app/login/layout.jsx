
import "@styles";

import services from "@/vendor/services/server/server";

import metaDetails from "../default_meta_details.json";

export async function generateMetadata({ params }) {
  return await new Promise((Resolve) => {
    services.page
      .getMetadata({ slug: "login" })
      .then((response) => response.success && [Resolve(response.data)])
      .then((error) => {
        Resolve(metaDetails);
      });
  });
}

export default async function Layout({ children }) {
  return <>{children}</>;
}

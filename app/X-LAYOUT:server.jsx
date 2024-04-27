"use server";
import { Popup } from "../@vendor/lib/components/popup/popup";
import services from "../@vendor/lib/services/server/server";
import metaDetails from "@application/default-meta-details.json";

export async function generateMetadata({ params }) {
  const Services = await services();
  const SLUG = params.slugs?.length ? "/" + params?.slugs?.join("/") : "/";

  return await new Promise((Resolve) => {
    Services.page
      .getMetadata({ slug: SLUG, cache: true })
      .then((response) => {
        if (response.success) {
          Resolve(response.data);
        } else {
          Resolve(metaDetails);
        }
      })
      .then((error) => {
        Resolve(metaDetails);
      });
  });
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Popup />
      </body>
    </html>
  );
}

export async function SubLayout({ children }) {
  return <>{children}</>;
}

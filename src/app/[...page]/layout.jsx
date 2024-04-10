import "@styles";

import builder, { makeMetaDetails } from "@builder/server";

import metaDetails from "../default_meta_details.json";

export const generateMetadata = makeMetaDetails();

export default async function Layout({ children }) {
  return <>{children}</>;
}

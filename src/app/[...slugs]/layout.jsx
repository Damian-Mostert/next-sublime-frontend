"use server";

import { MakeGenerateMetadata } from "@web/server";

export const generateMetadata = MakeGenerateMetadata();

export default async function Layout({ children }) {
  return <>{children}</>;
}

"use server";

import { MakeGenerateMetadata } from "@app/server";

export const generateMetadata = MakeGenerateMetadata();

export default async function Layout({ children }) {
  return <>{children}</>;
}

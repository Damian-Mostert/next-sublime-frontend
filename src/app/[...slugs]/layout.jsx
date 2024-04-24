"use server";

import { MakeGenerateMetadata } from "../server";

export const generateMetadata = MakeGenerateMetadata();

export default async function DynamicLayout({ children }) {
  return <>{children}</>;
}

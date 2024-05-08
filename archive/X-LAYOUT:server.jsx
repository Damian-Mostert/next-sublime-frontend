"use server";

import { getMetadata } from "@services/page/page";
import Popup from "./X-LAYOUT:server-client";

export async function generateMetadata({ params }) {
  const slug = params?.slugs?.join("/");

  return await getMetadata("/" + slug);
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Popup/>
    </html>
  );
}

export async function SubLayout({ children }) {
  return <>{children}</>;
}

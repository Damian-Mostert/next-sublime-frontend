"use server";

import { Header } from "@/lib/components/navigation/header/header";
import { BreadCrumb } from "@/lib/components/navigation/breadcrumb/breadcrumb";
import { Footer } from "@/lib/components/navigation/footer/footer";

import { Popup } from "@components";

import "@styles";

import services from "@services/server";

import metaDetails from "./default_meta_details.json";

export async function generateMetadata({ params }) {
  return await new Promise((Resolve) => {
    services.page
      .getMetaData({ slug: "/" })
      .then((response) => response.success && [Resolve(response.data)])
      .then((error) => {
        Resolve(metaDetails);
      });
  });
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/image/bg.avif" />
      </head>
      <body>
        <Header />
        <BreadCrumb />
        <main>{children}</main>
        <Footer />
        <Popup />
      </body>
    </html>
  );
}

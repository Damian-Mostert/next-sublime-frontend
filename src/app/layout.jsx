"use server";

import { Header } from "@navigation/header";
import { BreadCrumb } from "@navigation/breadcrumb";
import { Footer } from "@navigation/footer";

import { Popup } from "@/vendor/components";

import "@styles";

import services from "@services/server";

import metaDetails from "./default_meta_details.json";

export async function generateMetadata({ params }) {
  return await new Promise((Resolve) => {
    services.page
      .getMetadata({ slug: "/" })
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

"use server";

import { Header } from "@navigation/header";
import { BreadCrumb } from "@navigation/breadcrumb";
import { Footer } from "@navigation/footer";

import { Popup } from "@/vendor/components";

import "@styles";

import { makeMetaDetails } from "@builder/server";

export const generateMetadata = makeMetaDetails("/");

export default async function RootLayout({ children }) {
  return (

      <html lang="en">
        <head>
          <link rel="preload" as="image" href="/assets/image/bg.avif" />
        </head>
        <body>
          <Header />
          <BreadCrumb />
          <main>
            {children}
            <Popup />
          </main>
          <Footer />
        </body>
      </html>
  );
}

"use server";

import { Header } from "@navigation/header";
import { BreadCrumb } from "@navigation/breadcrumb";
import { Footer } from "@navigation/footer";
import { SessionProvider } from "next-auth/react";

import { Popup } from "@/vendor/components";

import "@styles";

import metaDetails from "./default_meta_details.json";

import { builder } from "@builder.io/sdk";
import SessionWrapper from "./api/auth/[...nextAuth]/sessionWrapper";
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

export async function generateMetadata({ params }) {
  return await new Promise((Resolve) => {
    builder
      .get("page", {
        userAttributes: {
          urlPath: "/",
        },
      })
      .then((res) => {
        if (res) {
          Resolve(res.data);
        } else {
          Resolve(metaDetails);
        }
      });
  });
}
export default async function RootLayout({ children }) {
  return (
    <SessionWrapper>
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
    </SessionWrapper>
  );
}

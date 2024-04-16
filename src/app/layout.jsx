"use server";

import "@styles";

import { Header } from "@web/navigation/header";
import { BreadCrumb } from "@web/navigation/breadcrumb";
import { Popup } from "@vendor/components";
import { Footer } from "@web/navigation/footer";

import { MakeGenerateMetadata } from "@web/server";
export const generateMetadata = MakeGenerateMetadata("/");

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <BreadCrumb />
        <main>{children}</main>
        <Footer />
      </body>
      <Popup />
    </html>
  );
}

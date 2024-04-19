"use server";

import "@styles";

import { Header } from "@candy/navigation/header/header";
import { BreadCrumb } from "@candy/navigation/breadcrumb/breadcrumb";
import { Popup } from "@vendor/components";
import { Footer } from "@candy/navigation/footer/footer";

import { MakeGenerateMetadata } from "@app/server";
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

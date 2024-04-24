"use server";

import "@styles";

import { Header } from "../../application/navigation/header/header";
import { BreadCrumb } from "../../application/navigation/breadcrumb/breadcrumb";
import { Popup } from "../lib/components";
import { Footer } from "../../application/navigation/footer/footer";

import { MakeGenerateMetadata } from "./server";
export const generateMetadata = MakeGenerateMetadata("/");

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {process.env.NEXT_PUBLIC_USE_HEADER && <Header />}
        {process.env.NEXT_PUBLIC_USE_BREADCRUMBS && <BreadCrumb />}
        <main>{children}</main>
        {process.env.NEXT_PUBLIC_USE_FOOTER && <Footer />}
      </body>
      <Popup />
    </html>
  );
}

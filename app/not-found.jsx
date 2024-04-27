"use client";

import { Layout } from "../@vendor/lib/components/layout/layout";
import { Text } from "../@vendor/lib/components/text/text";
import { Footer } from "./navigation/footer/footer";
import { Header } from "./navigation/header/header";

export default function NotFound() {
  return (
    <>
      <Header />
      <Layout type="center" className="min-h-screen items-center">
        <Text
          icon="warn"
          title={{
            text: "404 page not found",
            align: "center",
            className: "w-full",
          }}
        />
      </Layout>
      <Footer />
    </>
  );
}

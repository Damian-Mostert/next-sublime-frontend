"use client";

import { Layout } from "sublime-components";
import { Text } from "sublime-components";
import { Footer } from "../@application/navigation/footer/footer";
import { Header } from "../@application/navigation/header/header";

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

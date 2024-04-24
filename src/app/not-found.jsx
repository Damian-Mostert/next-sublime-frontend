"use client";

import { Layout, Text } from "../lib/components";

export default function NotFound() {
  return (
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
  );
}

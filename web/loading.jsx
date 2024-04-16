"use client";

import { Layout, Icons } from "@components";

export default async function Loading() {
  return (
    <Layout type="center" className="min-h-screen items-center">
      <Icons icon={"loading"} />
    </Layout>
  );
}

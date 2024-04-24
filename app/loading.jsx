"use client";

import { Layout, Icons } from "../src/lib/components";

export default function Loading() {
  return (
    <Layout type="center" className="min-h-screen items-center">
      <Icons icon={"loading"} />
    </Layout>
  );
}

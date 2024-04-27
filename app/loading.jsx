"use client";

import { Layout } from "../@vendor/lib/components/layout/layout";
import { Icons } from "../@vendor/lib/components/icon/icon";

export default function Loading() {
  return (
    <Layout type="center" className="min-h-screen items-center">
      <Icons icon={"loading"} />
    </Layout>
  );
}

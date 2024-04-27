"use client";

import { Layout } from "../@vendor/lib/components/layout/layout";
import { Text } from "../@vendor/lib/components/text/text";

export default function Error() {
  return (
    <Layout type="center" className="min-h-screen items-center">
      <Text
        icon="warn"
        title={{
          text: "Whoops something went wrong.",
          align: "center",
          className: "w-full",
        }}
      />
    </Layout>
  );
}

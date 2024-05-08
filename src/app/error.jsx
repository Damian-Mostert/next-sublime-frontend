"use client";

import { Layout } from "sublime-components";
import { Text } from "sublime-components";

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

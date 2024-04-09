import { Icons } from "@components/popup/box/icons";

import { Layout } from "@components";

export default function Loading() {
  return (
    <Layout type="center" className="h-screen items-center">
      <Icons icon={"loading"}/>
    </Layout>
  );
}

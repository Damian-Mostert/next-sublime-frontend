"use client";

import { Button, Layout, Text } from "sublime-components";

export default function () {
  return (
    <>
      <Layout>
        <Text pre={"hello world"} extra="world" text="hello" />
        <Button label="hello"/>
      </Layout>
    </>
  );
}

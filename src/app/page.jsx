"use client";

import { Button, Form, Layout, Md, Text, Popup } from "@/utils/components";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Popup.fire({
      canClose: true,
      icon: "success",
      modal: function ({ Resolve }) {

        return (
          <div>
            <Button
              label="resolve"
              onClick={() => Resolve("some random message")}
            />
          </div>
        );
      },
      bg: "blur",
    }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <>
      <Form
        text={{
          title: {
            pre: "hello",
            text: "hello",
            extra: "test",
          },
        }}
        fields={[
          {
            type: "email",
            require: true,
          },
          {
            type: "image",
            require: true,
          },
          {
            type: "password",
            require: true,
          },
        ]}
        onSubmit={() => {}}
      />
      <Form
        text={{
          title: {
            pre: "hello",
            text: "hello",
            extra: "test",
          },
        }}
        fields={[
          {
            type: "email",
            require: true,
          },
          {
            type: "password",
            require: true,
          },
        ]}
        onSubmit={() => {}}
      />
    </>
  );
}

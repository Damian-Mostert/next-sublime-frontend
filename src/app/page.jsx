"use client";

import { Button, Layout, Md, Text } from "@components";

export default function Home() {
  return Layout({
    type: "split-left",
    children: [
      Text({
        title: {
          pre: "hehe",
          text: "WORLD",
          extra: "WORLD",
        },
        paragraphs: ["hello world", "hello world", "hello world"],
      }),
      <div className="bg-red-200 w-full h-full" />,
    ],
  });
}

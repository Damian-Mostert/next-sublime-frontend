"use client";

import { builder, Builder, BuilderComponent } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

import sections from "./lib/components/sections/sections";
import { useEffect, useState } from "react";
import Loading from "./app/loading";
import NotFound from "./app/not-found";
import components from "@/vendor/components";

Object.keys({ ...sections }).map((key) => {
  Builder.registerComponent({ ...components, ...sections }[key], {
    name: key,
  });
});
export default builder;
export function Build({ slug }) {
  const [content, setContent] = useState(null);
  const [contentNotFound, setContentNotFound] = useState(false);

  useEffect(() => {
    content && console.log(content);
  }, [content]);

  useEffect(() => {
    builder
      .get("page", { url: slug })
      .promise()
      .then((data) => {
        if (data) {
          setContent(data);
        } else {
          setContentNotFound(true);
        }
      });
  }, []);

  return (
    <>
      {content && <BuilderComponent model="page" content={content} />}
      {!content && !contentNotFound && <Loading />}
      {contentNotFound && <NotFound />}
    </>
  );
}

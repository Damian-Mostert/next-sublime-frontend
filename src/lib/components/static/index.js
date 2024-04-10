"use client";

import services from "@/vendor/services";
import { Banner } from "./banners/banners";
import { Section } from "./sections/sections";
import { useEffect, useState } from "react";

const Types = {
  Banner,
  Section,
};

export default function Static({ type, data }) {
  const Component = Types[type];
  return <Component data={data} />;
}

import Loading from "@/app/loading";

export function StaticPage(slug) {
  return () => {
    const [body, setBody] = useState(null);
    useEffect(() => {
      services.page.getPage(slug, { fire: false }).then((response) => {
        response.success && setBody(response.data);
      });
    });
    return (
      <>
        {body &&
          body.map((item, index) => {
            return <Static {...item} key={index} />;
          })}
        {!body && <Loading />}
      </>
    );
  };
}

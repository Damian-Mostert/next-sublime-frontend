"use client";

import { Banner } from "./banners/banners";
import { Section } from "./sections/sections";

const Types = {
  Banner,
  Section
};

export default function Static({ type, data }) {
  const Component = Types[type];
  return <Component data={data} />;
}

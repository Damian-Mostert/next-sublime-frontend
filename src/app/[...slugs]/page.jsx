"use client";

import { StaticPage } from "@static";

export default function Static({ params }) {
  return StaticPage(params.slugs.join("/"))();
}

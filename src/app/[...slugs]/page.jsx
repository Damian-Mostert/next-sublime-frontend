"use client";

import { StaticPage } from "@/lib/components/static/static";

export default function Static({ params }) {
  return StaticPage(params.slugs.join("/"))();
}

"use client";

import { Build } from "@builder/client";

export default function Static({ params }) {
  return <Build slug={"/" + params.page.join("/")} />;
}

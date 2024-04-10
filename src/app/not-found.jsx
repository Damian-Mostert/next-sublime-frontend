"use client";

import { useEffect } from "react";

export default function NotFound({ params }) {
  useEffect(() => {
    window.location.href = "/not-found";
  }, []);
  return <></>;
}

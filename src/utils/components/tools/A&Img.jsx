"use client";

import Image from "next/image";
import Link from "next/link";

export function Img({ ...props }) {
  return <Image {...props} />;
}

export function A(props) {
  return <Link {...props} />;
}

"use client";

import { usePathname } from "next/navigation";

import "./breadcrumbs.scss";
import { A } from "@components/tools/A&Img";

export function BreadCrumbs({ slug }) {
  const pathname = slug ? slug : usePathname();
  let p = "";
  return (
    <nav className="breadcrumbs">
      {pathname == "/" ? (
        <A href="/" className="breadcrumbs-item">
          HOME
        </A>
      ) : (
        pathname.split("/").map((item, key) => {
          p += item + "/";
          return item ? (
            <A href={p} className="breadcrumbs-item" key={key}>
              {item.replace(/-/g, " ")}
            </A>
          ) : undefined;
        })
      )}
    </nav>
  );
}

"use client";

import { Layout, Button, Img, Lg, Md } from "../../../@vendor/lib/components/index.js";
import { usePathname } from "next/navigation";

import links from "../links.json";
import Copyright from "./copyright.jsx";

export function Footer() {
  const pathname = usePathname();
  const Links = links;
  return (
    <footer className="bg-footer w-full ">
      <Layout type="split-left">
        <div className="w-full flex flex-wrap page:flex-nowrap justify-center py-8">
          {Links?.footer?.map((item, index) => {
            return (
              <div key={index}>
                <Button
                  href={item.href}
                  label={item.label}
                  className={"w-full"}
                  variant={`footer${pathname == item.href ? "-active" : ""}`}
                />
                {item.links &&
                  item.links.map((i, x) => {
                    return (
                      <Button
                        key={index + "-" + x}
                        href={i.href}
                        label={i.label}
                        className={"w-full"}
                        variant={`footer-light${
                          pathname == i.href ? "-active" : ""
                        }`}
                      />
                    );
                  })}
              </div>
            );
          })}
        </div>
        <div className="h-full flex flex-col items-center">
          <div className="w-full h-full items-center flex justify-center">
            <Img
              alt="logo"
              src={"/assets/app-icon."+process.env.NEXT_PUBLIC_APP_ICON_TYPE}
              width={100}
              height={100}
              className="p-4 h-20 h-20 object-contain"
            />
          </div>
        </div>
      </Layout>
      <Copyright />
    </footer>
  );
}
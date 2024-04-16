"use client";

import services from "@services";
import { useEffect, useState } from "react";
import defaultLinks from "./default_links.json";
export default function links() {
  const [links, setLinks] = useState(defaultLinks);
  useEffect(() => {
    services.nav.getNav().then(async (res) => {
      if (res.success) {
        setLinks({
          header: await (async function () {
            const header = JSON.parse(res.data.header);

            const new_menu = [];
            for (let i of header.menu) {
              if (typeof i == "string") {
                try {
                  new_menu.push((await services.nav[i]()).data);
                } catch (e) {
                  console.log(e);
                }
              }
              else{
                new_menu.push(i)
              }
            }

            header.menu = new_menu;
            return header;
          })(),
          footer: JSON.parse(res.data.footer),
        });
      }
    });
  }, []);
  return links;
}

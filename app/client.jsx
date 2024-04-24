"use client";

import services from "../src/lib/services";

import sections from "../src/load/components";
import { useEffect, useState } from "react";

import Loading from "./loading";
import NotFound from "./not-found";
import { Popup } from "../src/lib/components";
import popups from "../src/load/popups";

const cache = {};

export function StaticPage(slug) {
  return ({ params }) => {
    const [body, setBody] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const SLUG = slug ? slug : "/" + params.slugs.join("/");
    useEffect(() => {
      if (cache[SLUG]) {
        setBody(cache[SLUG]);
        setLoaded(true);
        return () => {};
      }
      services.page.getPopup({ slug: SLUG }).then((response) => {
        if (response.data && response.success) {
          Popup.fire({
            ...response.data,
            modal: popups[response.data.popup],
          });
        }
      });
      services.page.getPage({ slug: SLUG }).then((response) => {
        cache[SLUG] = response.data;
        response.success && setBody(response.data);
        setLoaded(true);
      });
      return () => {};
    }, []);

    return (
      <>
        {body &&
          body.map((item, index) => {
            const props = item.data;
            const Component = sections[item.type];
            return Component ? <Component key={index} {...props[item.type.toLowerCase()]} /> : null;
          })}
        {!body && !loaded && <Loading />}
        {loaded && !body && <NotFound />}
      </>
    );
  };
}

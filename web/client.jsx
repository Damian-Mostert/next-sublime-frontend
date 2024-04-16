"use client";

import services from "@vendor/services";

import sections from "./components/__load";
import { useEffect, useState } from "react";

import Loading from "@app/loading";
import NotFound from "@app/not-found";
import { Popup } from "@vendor/components";
import modals from "@web/modals/modals";

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
            modal:modals[response.data.modal],
          })
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
            const Component = sections[item.component];
            return <Component key={index} data={item.data} />;
          })}
        {!body && !loaded && <Loading />}
        {loaded && !body && <NotFound />}
      </>
    );
  };
}

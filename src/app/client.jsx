"use client";

import services from "@vendor/services";

import sections from "../../candy/components/__load";
import { useEffect, useState } from "react";

import Loading from "@app/loading";
import NotFound from "@app/not-found";
import { Popup } from "@vendor/components";
import popups from "@candy/popups/popups";

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
            modal: popups[response.data.modal],
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

    const fix = (data) => {
      const object = {};
      for (var item of data) {
        object[item.prop] = item.list?.length
          ? item.list.map((i) => i.value)
          : item.value;
      }
      return object;
    };

    return (
      <>
        {body &&
          body.map((item, index) => {
            const props = fix(item.data);
            console.log(props);
            console.log(item.data);
            const Component = sections[item.type];
            return <Component key={index} {...props} />;
          })}
        {!body && !loaded && <Loading />}
        {loaded && !body && <NotFound />}
      </>
    );
  };
}

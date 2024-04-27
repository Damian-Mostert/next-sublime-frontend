"use client";

import { useEffect, useState } from "react";

import services from "../@vendor/lib/services";
import { Popup } from "../@vendor/lib/components/popup/popup";

import sections from "@vendor/load/sections";
import popups from "@vendor/load/popups";

import Loading from "./loading";
import NotFound from "./not-found";

import { Header } from "./navigation/header/header";
import { BreadCrumbs } from "./navigation/breadcrumbs/breadcrumbs";
import { Footer } from "./navigation/footer/footer";

export const getPage = (slug) => {
  return function Page({ params }) {
    const [body, setBody] = useState(null);
    const [page, setPage] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const SLUG = slug ? slug : "/" + params.slugs.join("/");
    useEffect(() => {
      services.page.getPopup({ slug: SLUG }).then((response) => {
        if (response.data && response.success) {
          Popup.fire({
            ...response.data,
            modal: popups[response.data.popup],
          });
        }
      });
      services.page.getPage({ slug: SLUG }).then((response) => {
        response.success && setBody(response.data);
        setLoaded(true);
      });
      services.page.getMetadata({ slug: SLUG }).then((response) => {
        response.success && setPage(response.data);
        setLoaded(true);
      });
      return () => {};
    }, []);

    return (
      <>
        {Boolean(page?.use_header) && <Header />}
        {Boolean(page?.use_breadcrumbs) && <BreadCrumbs />}
        <main>
          {body &&
            body.map((item, index) => {
              const props = item.data;
              const Component = sections[item.type];
              return Component ? (
                <Component key={index} {...props[item.type.toLowerCase()]} />
              ) : null;
            })}
          {!body && !loaded && <Loading />}
          {loaded && !body && <NotFound />}
        </main>
        {Boolean(page?.use_footer) && <Footer />}
      </>
    );
  };
};

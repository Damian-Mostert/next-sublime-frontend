"use client";

import { useEffect, useState } from "react";

import { getPage as getPageService } from "@services/page/page";

import { Popup } from "sublime-components";

import sections from "../src/app/lib/load/sections";
import popups from "../src/app/lib/load/popups";

import Loading from "../src/app/loading";
import NotFound from "../src/app/not-found";

import { Header } from "../src/lib/navigation/header/header";
import { BreadCrumbs } from "../src/lib/navigation/breadcrumbs/breadcrumbs";
import { Footer } from "../src/lib/navigation/footer/footer";

export const getPage = (slug) => {
  return function Page({ params }) {
    slug = slug ? slug : "/" + params.slugs.join("/");

    const [body, setBody] = useState(null);
    const [page, setPage] = useState(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      getPageService(slug).then((response) => {
        setPage(response);
        setBody(response.sections);
        setLoaded(true);
        response.popup &&
          Popup.fire({
            ...response.popup,
            modal: popups[response.popup.popup],
          });
      });
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
                <Component key={index} {...(item.props ? item.props : {})} />
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

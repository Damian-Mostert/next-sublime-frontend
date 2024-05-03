"use server";

import { A } from "@components/tools/A&Img";

import DeleteSvg from "./view/delete-svg";

import DetailSvg from "./view/detail-svg";

import UpdateSvg from "./view/update-svg";

import { Button } from "@components/button/button";
import Search from "./search";
import Filter from "./filter";

export default async function Table({ params, data, fields }) {
  return (
    <>
      <div>
        <div className="flex items-center flex-wrap">
          <Search />
          <Button
            className={"ml-auto"}
            href={`/dashboard/create/${params.slug}`}
            label={`Create`}
          />
        </div>
      </div>
      <div className="mt-4 overflow-hidden">
        <Filter />
        <>
          <div className="w-full border-t border-primary flex ">
            {fields.map((field, key) => (
              <>
                {!field.dont_show_at_view && (
                  <div
                    className="w-full text-center p-3 overflow-auto"
                    style={{ textWrap: "nowrap" }}
                    key={key}
                  >
                    {field.title}
                  </div>
                )}
              </>
            ))}
            <div style={{ minWidth: "110px" }} />
          </div>
          <div style={{ minWidth: "110px" }} />
          <div className="w-full flex flex-wrap border-t border-primary">
            {data &&
              data.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="w-full flex w-full border-b border-primary"
                  >
                    {fields.map((field, key) => (
                      <>
                        {!field.dont_show_at_view && (
                          <A
                            className="w-full text-center p-3 overflow-hidden"
                            style={{ textWrap: "nowrap" }}
                            key={key}
                            href={`/dashboard/detail/${params.slug}/${item.id}`}
                          >
                            {field.view(item[field.key])}
                          </A>
                        )}
                      </>
                    ))}
                    <div style={{ minWidth: "110px" }}>
                      <div className="flex h-full items-center justify-center">
                        <A href={`/dashboard/detail/${params.slug}/${item.id}`}>
                          {DetailSvg}
                        </A>
                        <A href={`/dashboard/update/${params.slug}/${item.id}`}>
                          {UpdateSvg}
                        </A>
                        <A href={`/dashboard/delete/${params.slug}/${item.id}`}>
                          {DeleteSvg}
                        </A>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      </div>
    </>
  );
}

"use server";

import { A } from "sublime-components";
import { getGroups } from "../services/server";
export async function Nav({ params = {} }) {
  const titles = await getGroups();
  return (
    <div className="p-4 h-min w-full page:w-max page:pl-0">
      {titles.map((title, key) => {
        return (
          <div key={key}>
            <div
              className="w-full p-2 min-w-[140px]"
              style={{ borderBottom: "1px solid" }}
            >
              {title.title}
            </div>
            <div className="pl-4">
              {title?.titles?.map((title, key) => {
                return (
                  <div key={key}>
                    <div
                      className={`w-full p-2 min-w-[140px] w-full page:w-maxtext-sm`}
                      style={{ borderBottom: "1px solid" }}
                    >
                      <A
                        className={`w-full ${
                          params.slug == title.title ? "font-thick" : ""
                        } `}
                        href={`/dashboard/view/${title.title}`}
                      >
                        {title.title}
                      </A>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

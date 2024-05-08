"use client";

import { A } from "sublime-components";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const pathname = usePathname();
  const slug = pathname?.split("/")[pathname?.split("/").length - 2];
  const [value, setValue] = useState("");
  return (
    <div className="w-max h-max flex rounded-xl overflow-hidden border border-1 border-primary">
      <input
        className="w-[300px] text-primary px-4"
        placeholder="Search..."
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
      />
      <A href={`/dashboard/view/${slug}/search : ${value}`}>
        <svg
          className="w-8 h-8 p-2 border-l border-1 border-primary"
          fill="var(--color-primary)"
          height="800px"
          width="800px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488.4 488.4"
        >
          <g>
            <g>
              <path
                d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
    S381.9,104.65,381.9,203.25z"
              />
            </g>
          </g>
        </svg>
      </A>
    </div>
  );
}

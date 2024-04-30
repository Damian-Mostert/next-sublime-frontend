"use client";

import { useState } from "react";

export default function Filter() {
  const [show, setShow] = useState(false);
  return (
    <div
      className="w-full flex p-1 justify-end relative"
      style={{ zIndex: "10" }}
    >
      <svg
        onClick={() => (show ? setShow(false) : setShow(true))}
        className="p-1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="DESIGNS"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
      >
        <path
          d="M26,6v0.233l-8.487,9.43L17,16.233V17v7.764l-2-1V17v-0.767l-0.513-0.57L6,6.233V6H26 M28,4H4v3  l9,10v8l6,3V17l9-10V4L28,4z"
          style={{ fill: "var(--color-primary)" }}
        />
      </svg>
      {show && (
        <div
          onBlur={() => setShow()}
          onMouseLeave={() => setShow()}
          className="absolute top-full w-64 p-4 rounded-b-xl border border-1 border-primary"
          style={{ background: "var(--color-body)" }}
        >
          Filter
        </div>
      )}
    </div>
  );
}

"use client";

import "./accordion.scss";

import { useState } from "react";

export function Accordion({
  className = "",
  variant = "default",
  titles,
  children,
}) {
  const [TabIndex, setIndex] = useState(0);

  return (
    <>
      <div className={`accordion accordion-variant-${variant} ${className}`}>
        {children.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col ${
                TabIndex == index ? "h-full tab" : ""
              }`}
            >
              <div
                className={`w-full accordion-button ${
                  TabIndex == index ? "accordion-button-active" : ""
                }`}
                onClick={() =>
                  TabIndex != index ? setIndex(index) : setIndex(null)
                }
              >
                {titles[index]}
              </div>
              <div
                style={{
                  transition: "all 1s",
                  maxHeight: TabIndex == index ? "1000px" : "0px",
                  height: "100%",
                }}
              >
                {children[index]}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

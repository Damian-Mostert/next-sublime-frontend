"use client";

import "./nav.scss";

import { useState } from "react";

import { Popup } from "@/utils/components";

export function Nav({
  orientation = "left",
  children,
  variant = "default",
  warnOnExit,
  setWarnOnExit,
  className = "",
  titles = [],
}) {
  const [TabIndex, setIndex] = useState(0);
  return (
    <>
      <div
        className={`nav nav-orientation-${orientation} ${
          "nav-variant-" + variant
        } ${className}`}
      >
        <div className="nav-indexes">
          {titles.map((title, index) => {
            return (
              <div
                key={index}
                onClick={async () => {
                  if (warnOnExit) {
                    let result = await Popup.fire(warnOnExit);
                    if (result.confirmed) {
                      setIndex(index);
                      setWarnOnExit(false);
                    }
                  } else {
                    setIndex(index);
                  }
                }}
                className={`nav-index ${
                  index === TabIndex ? "nav-index-active" : ""
                }`}
              >
                {title}
              </div>
            );
          })}
        </div>
        <div className="nav-tab">
          <div className="nav-tab-body">{children[TabIndex]}</div>
        </div>
      </div>
    </>
  );
}

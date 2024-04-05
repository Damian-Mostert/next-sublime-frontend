"use client";

import "./title.scss";

export function Title({
  pre = null,
  text = "",
  extra = "",
  align = "left",
  variant = "default",
  className = "",
}) {
  return (
    <>
      {pre && (
        <h3
          className={`title-pre title-variant-${variant} ${className} `}
          style={{ textAlign: align }}
        >
          {pre}
        </h3>
      )}
      <h2
        className={`title title-variant-${variant} ${className} `}
        style={{ textAlign: align }}
      >
        {text}
        {extra && (
          <>
            {" "}
            <span className="title title-extra-text">{extra}</span>
          </>
        )}
      </h2>
    </>
  );
}

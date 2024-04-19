"use client";

import "./title.scss";

export function Title({
  pre = null,
  text = "",
  extra = "",
  align = "center",
  variant = "default",
  className = "",
}) {
  return (
    <div className={`title-variant-${variant} ${className}`}>
      {pre && (
        <pre
          className={`title-variant-${variant}-pre`}
          style={{ textAlign: align }}
        >
          {pre}
        </pre>
      )}
      <h2
        className={`title-variant-${variant}-text`}
        style={{ textAlign: align }}
      >
        {text}
        {extra && (
          <>
            <span className={`title-variant-${variant}-text-extra`}>{extra}</span>
          </>
        )}
      </h2>
    </div>
  );
}

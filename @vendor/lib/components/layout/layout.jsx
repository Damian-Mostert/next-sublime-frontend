"use client";

import "./layout.scss";

export function Layout({
  type = "default",
  variant = "default",
  children,
  className = "",
}) {
  //split layout;
  if (type.startsWith("split")) {
    return (
      <>
        <section
          className={`layout-${type} layout-variant-${variant} ${className}`}
        >
          {type.includes("right") && (
            <>
              <div className={`layout-${type}-container-a`}>{children[1]}</div>
              <div className={`layout-${type}-container-b`}>{children[0]}</div>
            </>
          )}
          {type.includes("left") && (
            <>
              <div className={`layout-${type}-container-a`}>{children[0]}</div>
              <div className={`layout-${type}-container-b`}>{children[1]}</div>
            </>
          )}
          {!type.includes("left") && !type.includes("right") && (
            <>
              <div className={`layout-${type}-container-a`}>{children[0]}</div>
              <div className={`layout-${type}-container-b`}>{children[1]}</div>
            </>
          )}
        </section>
        {children.length > 2 && (
          <Layout variant={variant} type={type} className={className}>
            {(function () {
              let newChildren = [];
              for (let i = 2; i < children.length; i++)
                newChildren.push(children[i]);
              return newChildren;
            })()}
          </Layout>
        )}
      </>
    );
  }
  //normal layout;
  return (
    <section className={`layout-${type} ${className}`}>
      <div className={`layout-${type}-container`}>{children}</div>
    </section>
  );
}

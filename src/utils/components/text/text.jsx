"use client";

import "./text.scss";

import { Title } from "@/utils/components";

export function Text({
  title,
  paragraphs = [],
  variant = "default",
  textAlign = "left",
  className = "",
}) {
  return (
    <div className={`text text-variant-${variant} ${className}`}>
      {title && <Title {...title} />}
      {paragraphs &&
        paragraphs.map((item, index) => {
          return (
            <p className="text-p" style={{ textAlign: textAlign }} key={index}>
              {item}
            </p>
          );
        })}
    </div>
  );
}

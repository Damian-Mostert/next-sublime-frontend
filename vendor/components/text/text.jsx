"use client";

import "./text.scss";

import { Icon, List, Title } from "@vendor/components";

export function Text({
  icon,
  title,
  pre,
  text,
  extra,
  paragraphs = [],
  variant = "default",
  align = "center",
  className = "",
  list,
}) {
  return (
    <div className={`text text-variant-${variant} ${className}`}>
      {icon && <Icon icon={icon} />}
      {(title || pre || text || extra) && (
        <Title pre={pre} text={text} extra={extra} {...(title ? title : [])} />
      )}
      {paragraphs &&
        paragraphs.map((item, index) => {
          return (
            <p className="text-p" style={{ textAlign: align }} key={index}>
              {item}
            </p>
          );
        })}
      {list && <List align={align} list={list} />}
    </div>
  );
}

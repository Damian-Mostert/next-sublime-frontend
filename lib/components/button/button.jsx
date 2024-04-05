"use client";

import "./button.scss";

import Link from "next/link";

export function Button({
  label,
  variant = "default",
  href = null,
  onClick = null,
  target = null,
  className,
  ...props
}) {
  return (
    <>
      {href && (
        <Link
          href={href}
          target={target || "_self"}
          className={`button button-variant-${variant} ${className}`}
          {...props}
        >
          <span />
          {label}
        </Link>
      )}
      {!href && !target && (
        <button
          className={`button button-variant-${variant} ${className}`}
          onClick={onClick}
          {...props}
        >
          <span />
          {label}
        </button>
      )}
      {!href && target && (
        <label
          className={`button button-variant-${variant} ${className}`}
          onClick={onClick}
          htmlFor={target}
          {...props}
        >
          <span />
          {label}
        </label>
      )}
    </>
  );
}

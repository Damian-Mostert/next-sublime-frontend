import { useState } from "react";
import { Button } from "@vendor/components";
import { DeepDropdown } from "./deep-dropdown";

export function DropDown({ label, links, pathname }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="w-full relative h-full flex items-center mx-2"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <Button variant={`header`} label={label} />
      <svg
        focusable="false"
        viewBox="0 0 25 24"
        aria-hidden="true"
        className="absolute right-2 h-full w-[10px] "
        style={{
          fill: !show
            ? "var(--color-header-text)"
            : "var(--color-header-text-active)",
          transform: `rotate(${show ? "0deg" : "90deg"})`,
          transition: "transform 0.5s",
        }}
      >
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
      <div className="absolute top-full left-0 w-full bg-header flex flex-wrap shadow-2xl">
        {show && (
          <div className=" py-2 header-fade-in">
            {links.map((item, index) => {
              return (
                <>
                  {item.links && (
                    <DeepDropdown key={index} {...item} pathname={pathname} />
                  )}
                  {!item.links && (
                    <Button
                      key={index}
                      href={item.href}
                      variant={`header${
                        pathname == item.href ? "-active" : ""
                      }`}
                      className={`w-full text-center `}
                      label={item.label}
                    />
                  )}
                </>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Button } from "../../../../src/lib/components";

export function MobileDropDown({ label, links, pathname }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="w-full header-title relative h-full items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <div className="relative flex">
        <Button variant={`header`} label={label} className={"w-full m-auto"} />
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
            transitionDelay: show ? "0s" : "1s",
          }}
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      </div>
      <div
        className="flex flex-wrap overflow-hidden bg-[#00000010] shadow-inner shadow-3xl"
        style={{
          maxHeight: show ? "100vh" : "0px",
          opacity: show ? "1" : "0px",
          transition: "max-height 3.5s, opacity 1.5s",
        }}
      >
        {links.map((item, index) => {
          return (
            <>
              {item.links && <>
                <MobileDropDown {...item} pathname={pathname} key={index}/>
              </>}
              {!item.links && (
                <>
                  <Button
                    key={"btn-" + index}
                    href={item.href}
                    variant={`header${pathname == item.href ? "-active" : ""}`}
                    className={`w-full text-center `}
                    label={item.label}
                  />
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

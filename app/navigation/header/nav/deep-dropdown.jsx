import { useState } from "react";
import { Button } from "../../../../@vendor/lib/components";

export function DeepDropdown({ label, links, pathname }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative"
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
          className="absolute right-2 top-0 h-full w-[10px] "
          style={{
            fill: !show
              ? "var(--color-header-text)"
              : "var(--color-header-text-active)",
            transform: `rotate(${show ? "-90deg" : "-270deg"})`,
            transition: "all 0.5s",
          }}
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
        </svg>
      {show && (
        <div className="left-full absolute top-0 bg-header header-deep-fade-in shadow-2xl">
          {links.map((item, index) => {
            return (
              <>
                {item.links && <DeepDropdown pathname={pathname} key={index} {...item} />}
                {!item.links && (
                  <Button
                    key={index}
                    href={item.href}
                    variant={`header${pathname == item.href ? "-active" : ""}`}
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
  );
}
/*

 <div
      className="w-full absolute h-full flex items-center mx-2"
      
    >
      <Button variant={`header`} label={label} />
      <div
        className="relative left-full top-0 w-full bg-header flex flex-wrap overflow-hidden shadow-2xl"
        style={{
          transition: "max-height 1s",
          zIndex: "100",
          maxHeight: show ? "300px" : "0px",
        }}
      >
        <div className="py-2">
          
        </div>
      </div>
    </div>
 */

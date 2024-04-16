"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { A, Img, Lg, Md, Button } from "@components";

import { useUser } from "@modules/useUser";

import { Burger } from "./burger/burger";
import { DropDown } from "./nav/dropdown";
import { MobileDropDown } from "./nav/mobile-dropdown";
import { Link } from "./nav/link";

import links from "../links.js";

import "./header.scss";

export function Header() {
  const pathname = usePathname();
  const user = useUser();

  const [showSideBar, setShowSideBar] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const Links = links();

  const user_navigation = Links.header;

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = "hidden";
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
      });
    } else {
      document.body.style.overflow = "";
    }
    let t;
    if (showSideBar) {
      setShowBlur(true);
    } else {
      t = setTimeout(() => {
        setShowBlur(false);
      }, 1500);
    }
    return () => {
      t && clearTimeout(t);
    };
  }, [showSideBar]);

  useEffect(() => {
    showSideBar && setShowSideBar(false);
  }, [pathname]);

  return (
    <header className="w-full bg-header shadow-2xl flex z-[999] relative h-auto">
      {/*ICON*/}
      <div className="h-full p-2">
        <A href="/">
          <Img
            alt="logo"
            src="/assets/app-icon.png"
            width={100}
            height={100}
            className="p-4 h-16 w-auto object-contain"
          />
        </A>
      </div>
      {/*DESKTOP*/}

      {user_navigation && (
        <>
          <nav className="h-30 flex items-center w-full z-10">
            <Lg>
              <div className="flex">
                {user_navigation.menu.map((item, index) =>
                  item.links ? (
                    <DropDown key={index} pathname={pathname} {...item} />
                  ) : (
                    <Link key={index} {...item} pathname={pathname} />
                  )
                )}
              </div>
              <div className="w-full" />
            </Lg>
            <div className="ml-auto" />
            <Md>
              <Burger open={showSideBar} setOpen={setShowSideBar} />
            </Md>
            <>
              <img
                onClick={() => setShowSideBar("User")}
                src={user ? user.pfp : "/assets/pfp.png"}
                className="h-10 mx-4 rounded-full"
              />
            </>
          </nav>
          <div className="absolute top-full left-0 w-full">
            {showBlur && (
              <div
                className="absolute top-0 left-0 w-screen h-screen"
                style={{
                  "--bg-blur": showSideBar ? "5px" : "0px",
                  transition: "all 1.5s",
                }}
                onClick={() => setShowSideBar(false)}
              />
            )}
            <div
              className={`absolute top-full right-0 ${
                showSideBar ? "w-1/2" : "w-0"
              }`}
              style={{
                transition: "all 0.5s",
                maxWidth: "300px",
              }}
            >
              <div
                className="bg-header text-black"
                style={{
                  marginLeft: "auto",
                  overflow: "auto",
                  maxWidth: showSideBar ? "300px" : "0px",
                  overflow: "auto",
                  transition: "max-width 0.5s",
                }}
              >
                <div className="h-screen">
                  {showSideBar === true &&
                    user_navigation.menu.map((item, index) => (
                      <div key={index} className="w-full">
                        {item.links ? (
                          <MobileDropDown
                            key={index}
                            pathname={pathname}
                            {...item}
                          />
                        ) : (
                          <Link key={index} {...item} pathname={pathname} />
                        )}
                      </div>
                    ))}
                  {showSideBar === "User" && (
                    <>
                      {user && <></>}

                      {!user && (
                        <>
                          <Button
                            href={
                              Links.login ? links.login : "/login-or-register"
                            }
                            label="Login or register"
                            variant="header"
                            className="w-full"
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

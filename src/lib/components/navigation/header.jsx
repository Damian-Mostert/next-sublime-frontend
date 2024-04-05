"use client";

import { usePathname } from "next/navigation";

import { A, Img, Button } from "@/vendor/components";
import { useEffect, useState } from "react";

import links from "./links.json";

const user_navigation = links.header;

export function Header() {
  const pathname = usePathname();



  const handleScroll = () => {
    const header = document.getElementById("header");
    if (window.scrollY > 0) {
      document.body.style.paddingTop =
        header.getBoundingClientRect().height + "px";
      header.style = "position:fixed;top:0px;left:0px;width:100%";
    } else {
      document.body.style.paddingTop = "";
      header.style = "";
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header
      id="header"
      className="w-full bg-white shadow-2xl flex z-[999] relative h-max"
    >
      <div className="h-full ">
        <Img
          alt="logo"
          src="/app-icon.svg"
          width={100}
          height={100}
          className="p-4 h-20 h-20"
        />
      </div>
      <nav className="h-30 flex items-center">
        {user_navigation.menu.map((item, index) =>
          item.links ? (
            <DropDown key={index} pathname={pathname} {...item} />
          ) : (
            <Link key={index} {...item} pathname={pathname} />
          )
        )}
      </nav>
      <div className="absolute right-4 flex items-center h-full">
        {/* {!auth?.user && <NoUserNav pathname={pathname} />}
        {auth?.user && <UserNav auth={auth} pathname={pathname} />} */}
      </div>
    </header>
  );
}

function Link({ href, label, pathname }) {
  return (
    <Button
      href={href}
      variant={`header${pathname == href ? "-active" : ""}`}
      label={label}
      className={`w-full`}
    />
  );
}

function DropDown({ label, links, pathname }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className="w-full header-title relative h-full flex items-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Button variant="header" label={label} />
      {show && (
        <div className="absolute top-full left-0 w-full bg-gray-300 flex flex-wrap overflow-hidden rounded-b-xl shadow-2xl py-2">
          {links.map((item, index) => {
            return (
              <Button
                key={index}
                href={item.href}
                variant={`header${pathname == item.href ? "-active" : ""}`}
                className={`w-full text-center `}
                label={item.label}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function UserNav({ auth, pathname }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div
      className="flex relative h-full items-center"
      onMouseEnter={() => setShowUserMenu(true)}
      onMouseLeave={() => setShowUserMenu(false)}
    >
      <A href={user_navigation.account}>
        <img src={auth.user.pfp} className="h-12 w-12 rounded-full" />
      </A>
      <Button
        variant={`header${
          pathname == user_navigation.account ? "-active" : ""
        }`}
        label={"Hi, " + auth.user.name}
        href={user_navigation.account}
      />
      {showUserMenu && (
        <div className="absolute top-full w-full bg-white overflow-hidden rounded-b-xl shadow-2xl py-2">
          <Button
            className={"w-full"}
            variant="header"
            label={"logout"}
            onClick={() => {
              auth.logout();
            }}
          />
        </div>
      )}
    </div>
  );
}

function NoUserNav({ pathname }) {
  return (
    <>
      <Button
        variant={`header${pathname == user_navigation.login ? "-active" : ""}`}
        label="Login"
        href={user_navigation.login}
      />
      <Button
        variant={`header${
          pathname == user_navigation.register ? "-active" : ""
        }`}
        label="Register"
        href={user_navigation.register}
      />
    </>
  );
}

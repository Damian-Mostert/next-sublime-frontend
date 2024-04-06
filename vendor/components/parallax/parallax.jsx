"use client";

import "./parallax.scss";

import { Parallax as Par, ParallaxProvider } from "react-scroll-parallax";

export function Parallax({
  className,
  children,
  variant = "default",
}){
  return (
    <ParallaxProvider>
      <div
        className={`overflow-hidden parallax-variant-{${variant}} ${className}`}
      >
        <Par speed={-20} className="w-full h-full">
          {children}
        </Par>
      </div>
    </ParallaxProvider>
  );
}

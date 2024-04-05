"use client";

import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.scss";

export function Slider({ variant = "default", children, config, className }) {
  return (
    <div className={`slider slider-${variant} ${className}`}>
      <Slick {...config}>{children}</Slick>
    </div>
  );
}

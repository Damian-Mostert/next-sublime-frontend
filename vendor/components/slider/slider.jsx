"use client";

import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.scss";

export function Slider({ variant = "default", slides, config, className }) {
  return (
    <div className={`slider slider-${variant} ${className}`}>
      <Slick {...config}>{slides}</Slick>
    </div>
  );
}

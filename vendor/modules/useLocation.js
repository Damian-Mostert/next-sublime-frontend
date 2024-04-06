"use client";

import { useEffect, useState } from "react";

export function useLocation({ enableHighAccuracy }) {
  const [pos, setPos] = useState({});
  useEffect(() => {
    navigator.geolocation.watchPosition(
      (success) => {
        setPos(success.coords);
      },
      (error) => {
        console.error(error);
        setPos();
      },
      {
        enableHighAccuracy,
      }
    );
  }, []);
  return pos;
}

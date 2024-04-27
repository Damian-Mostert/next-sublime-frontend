"use client";

import { useDevice } from "../../modules/useDevice";


export function Lg({ children }) {
  const device = useDevice();
  return <>{device.lg && <>{children}</>}</>;
}

export function Md({ children }) {
  const device = useDevice();
  return <>{device.md && <>{children}</>}</>;
}

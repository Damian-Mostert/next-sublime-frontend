import { NextResponse } from "next/server";

import sections from "@vendor/load/popups";

export function GET() {
  return NextResponse.json(
    Object.keys(sections).map((key) => {
      return key
    })
  );
}

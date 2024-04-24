import { NextResponse } from "next/server";

import sections from "../../../src/load/popups";

export function GET() {
  return NextResponse.json(
    Object.keys(sections).map((key) => {
      return key
    })
  );
}
import { NextResponse } from "next/server";

import sections from "@app/components/__load";

export function GET() {
  return NextResponse.json(
    Object.keys(sections).map((key) => {
      return {
        key,
        configuration: sections[key].configuration,
      };
    })
  );
}

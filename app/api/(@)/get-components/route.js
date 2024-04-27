import { NextResponse } from "next/server";

import sections from "@vendor/load/sections";
console.log(sections);
export function GET() {
    return NextResponse.json(
        Object.keys(sections).map((key) => {
            return {
                key,
                config: {
                  title: sections[key].title,
                  props: sections[key].props,
              },
            };
        })
    );
}

import { text, select, object } from "../../@vendor/lib/props";

import { Layout, Text } from "../../@vendor/lib/components";

import { props as TextProps } from "./Text";
import { props as BannerProps } from "./Banner";
import Banner from "./Banner";

//name the component
export const title = "Text And Banner";

//export props
export const props = [
  text("className").title("Tailwind css"),
  object("banner", BannerProps),
  object("text", TextProps),
  select("orientation").title("Align").options({
    left: "left",
    right: "right",
  }),
];
//export component
export default function Component({ className, banner, text, orientation }) {
  return (
    <Layout
      type={`split-${orientation ? orientation : "left"}`}
      className={className}
    >
      <div className="h-full flex items-center">
        <Text {...text} />
      </div>
      <Banner {...banner} />
    </Layout>
  );
}

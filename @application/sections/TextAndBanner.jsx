import { Layout } from "sublime-components";
import { Text as TextComponent } from "sublime-components";

import { props as TextProps } from "./Text";
import { props as BannerProps } from "./Banner";
import Banner from "./Banner";

//name the component
export const title = "Text And Banner";
import { Text } from "../../app/lib/props/Text";
import { Object } from "../../app/lib/props/Object";
import { Select } from "../../app/lib/props/Select";
//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Object("Banner", "banner", BannerProps),
  new Object("Text", "text", TextProps),
  new Select("Orientation","orientation").options([
    {
      label: "Left",
      value: "left",
    },
    {
      label: "Right",
      value: "right",
    }
  ]),
];
//export component
export default function Component({ className, banner, text, orientation }) {
  return (
    <Layout
      type={`split-${orientation ? orientation : "left"}`}
      className={className}
    >
      <div className="h-full flex items-center">
        <TextComponent {...text} />
      </div>
      <Banner {...banner} />
    </Layout>
  );
}

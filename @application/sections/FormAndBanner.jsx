import { Text } from "../../app/lib/props/Text";
import { Object } from "../../app/lib/props/Object";
import { Select } from "../../app/lib/props/Select";

import { Layout } from "sublime-components";
import { Form } from "sublime-components";

import { props as FormProps } from "./Form";
import { props as BannerProps } from "./Banner";
import Banner from "./Banner";
//name the component
export const title = "Text And Banner";

//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Object("Banner","banner", BannerProps),
  new Object("Form","form", FormProps),
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
export default function Component({ className, banner, form, orientation }) {
  return (
    <Layout
      type={`split-${orientation ? orientation : "left"}`}
      className={className}
    >
       {Form.new(form)}
      <Banner {...banner} />
    </Layout>
  );
}

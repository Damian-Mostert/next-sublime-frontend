import { Text } from "@props/Text";
import { Object } from "@props/Object";
import { Select } from "@props/Select";

import { Layout } from "../../@vendor/lib/components/layout/layout";
import { Form } from "../../@vendor/lib/components/form/form";

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
  new Select("Orientation","orientation").options({
    left: "left",
    right: "right",
  }),
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

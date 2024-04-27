import { text, select, object } from "../../@vendor/lib/props";

import { Layout } from "../../@vendor/lib/components/layout/layout";
import { Form } from "../../@vendor/lib/components/form/form";

import { props as FormProps } from "./Form";
import { props as BannerProps } from "./Banner";
import Banner from "./Banner";
//name the component
export const title = "Text And Banner";

//export props
export const props = [
  text("className").title("Tailwind css"),
  object("banner", BannerProps),
  object("form", FormProps),
  select("orientation").title("Align").options({
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

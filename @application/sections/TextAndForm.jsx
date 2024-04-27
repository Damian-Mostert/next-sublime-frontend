import { text, select, object } from "../../@vendor/lib/props";

import { Layout, Form, Text } from "../../@vendor/lib/components";

import { props as TextProps } from "./Text";
import { props as FormProps } from "./Form";

//name the component
export const title = "Text And Form";

//export props
export const props = [
  text("className").title("Tailwind css"),
  object("form", FormProps),
  object("text", TextProps),
  select("orientation").title("Align").options({
    left: "left",
    right: "right",
  }),
];
//export component
export default function Component({ className, form, text, orientation }) {
  return orientation == "left" ? (
    <Layout type={`split`} className={className}>
      {Form.new(form)}
      <Text {...text} />
    </Layout>
  ) : (
    <Layout type={`split`} className={className}>
      <Text {...text} />
      {Form.new(form)}
    </Layout>
  );
}

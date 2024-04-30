import { Text } from "@props/Text";
import { Object } from "@props/Object";
import { Select } from "@props/Select";

import { Layout } from "@components/layout/layout";
import { Text as TextComponent } from "@components/text/text";
import { Form } from "@components/form/form";

import { props as TextProps } from "./Text";
import { props as FormProps } from "./Form";

//name the component
export const title = "Text And Form";

//export props
export const props = [
  new Text("Tailwind css","className"),
  new Object("Form","form", FormProps),
  new Object("Text","text", TextProps),
  new Select("Orientation","orientation").options({
    left: "left",
    right: "right",
  }),
];
//export component
export default function Component({ className, form, text, orientation }) {
  return orientation == "left" ? (
    <Layout type={`split`} className={className}>
      {Form.new(form)}
      <TextComponent {...text} />
    </Layout>
  ) : (
    <Layout type={`split`} className={className}>
      <TextComponent {...text} />
      {Form.new(form)}
    </Layout>
  );
}

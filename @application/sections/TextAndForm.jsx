import { Text } from "../../app/lib/props/Text";
import { Object } from "../../app/lib/props/Object";
import { Select } from "../../app/lib/props/Select";

import { Layout } from "sublime-components";
import { Text as TextComponent } from "sublime-components";
import { Form } from "sublime-components";

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

import { Text } from "../../app/lib/props/Text";
import { Object } from "../../app/lib/props/Object";
import { Array } from "../../app/lib/props/Array";
import { Select } from "../../app/lib/props/Select";

import { Layout } from "sublime-components";
import { Form } from "sublime-components";

import { props as TextProps } from "./Text";
//name the component
export const title = "Form";
//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Select("Variant", "variant").options([
    {
      label: "Default",
      value: "default",
    },
  ]),
  new Text("Service", "onSubmit"),
  new Object("text", "text", TextProps),
  new Object("Success text", "success_text", TextProps),
  new Object("Button", "button", [
    new Select("Button variant", "variant").options([
      {
        value: "default",
        label: "Default",
      },
    ]),
    new Text("Button label", "label"),
  ]),
  new Array("Fields", "fields").rules([
    new Text("Name", "name"),
    new Text("Label", "label"),
    new Text("Placeholder", "placeholder"),
    new Select("Variant", "variant").options([
      {
        value: "default",
        label: "Default",
      },
    ]),
    new Select("Type", "type").options([
      {
        value: "text",
        label: "Text",
      },
      {
        value: "password",
        label: "Password",
      },
      {
        value: "cell",
        label: "Cell",
      },
      {
        value: "email",
        label: "Email",
      },
    ]),
    new Boolean("Require", "require"),
  ]),
];
//export component
export default function Component({
  className,
  variant,
  text,
  fields,
  onSubmit,
  successText,
  button,
}) {
  return (
    <Layout className={className}>
      {Form.new({
        variant,
        fields,
        text,
        button,
        onSubmit,
        successText,
        button,
      })}
    </Layout>
  );
}

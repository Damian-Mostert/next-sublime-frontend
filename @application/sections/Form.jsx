import { Text } from "@props/Text";
import { Object } from "@props/Object";
import { Array } from "@props/Array";
import { Select } from "@props/Select";

import { Layout } from "@components/layout/layout";
import { Form } from "@components/form/form";

import { props as TextProps } from "./Text";
//name the component
export const title = "Form";
//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Select("Variant", "variant").options({
    default: "default",
  }),
  new Text("Service", "onSubmit"),
  new Object("text", TextProps),
  new Object("successText", TextProps),
  new Object("button", [
    new Select("Button variant", "variant").options({
      default: "default",
    }),
    new Text("Button label", "label"),
  ]),
  new Array("Fields", "fields").rules([
    new Text("Name", "name"),
    new Text("Label", "label"),
    new Text("Placeholder", "placeholder"),
    new Select("Variant", "variant").options({
      default: "default",
    }),
    new Select("Type", "type").options({
      text: "text",
      password: "password",
      cell: "cell",
      email: "email",
    }),
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

import { text, list, select, object, listOf, boolean } from "../../@vendor/lib/props";

import { Layout, Form } from "../../@vendor/lib/components";

import { props as TextProps } from "./Text";
//name the component
export const title = "Form";
//export props
export const props = [
  text("className").title("Tailwind css"),
  select("variant").title("Variant").options({
    default: "default",
  }),
  text("onSubmit").title("Service"),
  object("text", TextProps),
  object("successText", TextProps),
  object("button", [
    select("variant").title("Button variant").options({
      default: "default",
    }),
    text("label").title("Button label"),
  ]),
  listOf("fields", [
    text("name").title("Name"),
    text("label").title("Label"),
    text("placeholder").title("Placeholder"),
    select("variant").title("Variant").options({
      default: "default",
    }),
    select("type").title("type").options({
      text: "text",
      password: "password",
      cell: "cell",
      email: "email",
    }),
    boolean("require").title("require"),
  ]).title("Fields"),
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

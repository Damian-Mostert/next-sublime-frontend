import { Text } from "@props/Text";
import { Object } from "@props/Object";


import { Layout } from "@components/layout/layout";
import { Form } from "@components/form/form";

//name the component
export const title = "Dual Form";

import { props as FormProps } from "./Form";

//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Object("First form", "form_a", FormProps),
  new Object("Second form", "form_b", FormProps),
];
//export component
export default function Component({ className, form_a, form_b }) {
  return (
    <Layout type="split" className={className}>
      {Form.new(form_a)}
      {Form.new(form_b)}
    </Layout>
  );
}

import { text, object } from "../../@vendor/lib/props";

import { Layout } from "../../@vendor/lib/components/layout/layout";
import { Form } from "../../@vendor/lib/components/form/form";

//name the component
export const title = "Dual Form";



import { props as FormProps } from "./Form";

//export props
export const props = [
  text("className").title("Tailwind css"),
  object("form_a", FormProps).title("First form"),
  object("form_b", FormProps).title("Second form"),
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




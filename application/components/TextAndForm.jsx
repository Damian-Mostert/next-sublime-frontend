import { text, select, object } from "@props";

import { Layout, Form, Text } from "@components";

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
    return (
        <Layout
            type={`split-${orientation ? orientation : "left"}`}
            className={className}
        >
            <Text {...text} />
            {Form.new(form)}
        </Layout>
    );
}

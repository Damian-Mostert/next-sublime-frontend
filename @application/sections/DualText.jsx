import { text, object } from "../../@vendor/lib/props";

import { Layout, Text } from "../../@vendor/lib/components";

//name the component
export const title = "Dual Text";

import { props as TextProps } from "./Text";

//export props
export const props = [
    text("className").title("Tailwind css"),
    object("text_a", TextProps),
    object("text_b", TextProps),
];
//export component
export default function Component({ className, text_a, text_b }) {
    return (
        <Layout type="split" className={className}>
            <Text {...text_a} />
            <Text {...text_b} />
        </Layout>
    );
}

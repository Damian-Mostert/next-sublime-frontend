import {
    text,
    select,
    listOf,
    boolean,
    number,
    image,
} from "@props";

import { Layout, Form } from "@components";

//name the component
export const title = "Banner";

//export props
export const props = [
    text("className").title("Tailwind css"),
    select("variant").title("variant").options({
        default: "default",
    }),
    boolean("autoplay").title("Autoplay"),
    number("autoplaySpeed").title("Autoplay speed"),
    listOf("slides", [
        image("image").title("Image"),
        text("title").title("Title"),
        text("url").title("Link"),
        text("text").title("Text"),
    ]),
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

import { text, list, select, object, listOf } from "../../@vendor/lib/props";

import { Layout, Text } from "../../@vendor/lib/components";

//name the component
export const title = "Text";

//export props
export const props = [
    text("className").title("Tailwind css"),
    select("align").title("Align").options({
        left: "left",
        right: "right",
        center: "center",
    }),
    text("pre").title("Pre"),
    text("text").title("Text"),
    text("extra").title("Extra"),
    list("paragraphs").title("Paragraphs"),
    list("list").title("List"),
];
//export component
export default function Component({
    className,
    align,
    pre,
    text,
    extra,
    paragraphs,
    list,
}) {
    return (
        <Layout className={className}>
            <Text
                align={align}
                pre={pre}
                text={text}
                extra={extra}
                paragraphs={paragraphs}
                list={list}
            />
        </Layout>
    );
}

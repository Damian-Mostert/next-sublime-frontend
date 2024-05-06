import { Text } from "@props/Text";
import { Select } from "@props/Select";
import { Array } from "@props/Array";

import { Layout } from "@components/layout/layout";
import { Text as TextComponent } from "@components/text/text";

//name the component
export const title = "Text";

//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Select("Align", "align").options([
    {
      label:"Left",
      value:"left"
    },
    {
      label:"Right",
      value:"right"
    },
    {
      label:"Center",
      value:"center"
    }
]),
  new Text("Pre", "pre"),
  new Text("Text", "text"),
  new Text("Extra", "extra"),
  new Array("Paragraphs", "paragraphs"),
  new Array("List", "list"),
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
      <TextComponent
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

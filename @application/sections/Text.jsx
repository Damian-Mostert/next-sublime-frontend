import { Text } from "../../app/lib/props/Text";
import { Select } from "../../app/lib/props/Select";
import { Array } from "../../app/lib/props/Array";

import { Layout } from "sublime-components";
import { Text as TextComponent } from "sublime-components";

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

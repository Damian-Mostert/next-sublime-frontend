import { Text } from "../../app/lib/props/Text";
import { Object } from "../../app/lib/props/Object";

import { Layout } from "sublime-components";
import { Text as TextComponent} from "sublime-components";

//name the component
export const title = "Dual Text";

import { props as TextProps } from "./Text";

//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Object("A", "text_a", TextProps),
  new Object("B", "text_b", TextProps),
];
//export component
export default function Component({ className, text_a, text_b }) {
  return (
    <Layout type="split" className={className}>
      <TextComponent {...text_a} />
      <TextComponent {...text_b} />
    </Layout>
  );
}

import { Text } from "@props/Text";
import { Object } from "@props/Object";

import { Layout } from "@components/layout/layout";
import { Text as TextComponent} from "@components/text/text";

//name the component
export const title = "Dual Text";

import { props as TextProps } from "./Text";

//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Object("Column 1", "text_a", TextProps),
  new Object("Column 2", "text_b", TextProps),
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

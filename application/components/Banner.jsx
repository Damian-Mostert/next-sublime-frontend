import { text, select, listOf, boolean, number, image, object } from "@props";

import { Slider } from "@components/slider/slider";

//name the component
export const title = "Banner";

//export props
export const props = [
  text("className").title("Tailwind css"),
  select("variant").title("variant").options({
    default: "default",
  }),
  object("config", [
    boolean("autoplay").title("Autoplay"),
    number("autoplaySpeed").title("Autoplay speed"),
    number("slidesToScroll").title("Slides to scroll"),
  ]),
  listOf("slides", [
    image("image").title("Image"),
    text("title").title("Title"),
    text("url").title("Link"),
    text("text").title("Text"),
  ]),
];
//export component
export default function Component({ className, variant, slides, config }) {
  return (
    <Slider
      variant={variant}
      className={className}
      slides={slides.map((slide, index) => {
        return <div key={index}></div>;
      })}
      config={config}
    />
  );
}

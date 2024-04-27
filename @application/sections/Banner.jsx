import { text, select, listOf, boolean, number, image, object } from "../../@vendor/lib/props";

import { Slider } from "../../@vendor/lib/components/slider/slider";
import { Layout } from "../../@vendor/lib/components/layout/layout";
import { Text } from "../../@vendor/lib/components/text/text";
import { Form } from "../../@vendor/lib/components/form/form";

import { props as TextProps } from "./Text";
import { props as FormProps } from "./Form";
//name the component
export const title = "Banner";

//export props

export const props = [

  text("className").title("Tailwind css"),
  boolean("bubble").title("Bubble"),
  object("text", TextProps),
  object("form", FormProps),
  select("variant").title("variant").options({
    default: "default",
  }),
  number("height").title("height"),
  object("config", [
    boolean("autoplay").title("Autoplay"),
    boolean("arrows").title("Arrows"),
    boolean("dots").title("Dots"),
    boolean("vertical").title("Vertical"),
    number("speed").title("Speed"),
    number("autoplaySpeed").title("Autoplay speed"),
    number("slidesToShow").title("Slides to show"),
    number("slidesToScroll").title("Slides to scroll"),
    boolean("rtl").title("Right to left"),
  ]),
  listOf("slides", [
    ...TextProps,
    image("image").title("Image"),
    text("url").title("Link"),
  ]),
];
//export component
export default function Component({
  bubble = "0",
  text,
  form,
  className,
  variant,
  slides,
  config,
  height,
}) {
  height = Number(height);
  console.log(config);
  const body = (
    <>
  
      <Slider
        style={{ height: height + (bubble == "1" ? 32 : 0 )}}
        variant={variant}
        className={className}
        slides={slides.map((slide, index) => {
          return (
            <div key={index}>
              <div
                className={`w-full flex ${
                  bubble == "1"
                    ? config.vertical == "1"
                      ? "py-4 mx-4"
                      : "px-4 my-4"
                    : ""
                }`}
              >
                <div
                  style={{ height }}
                  className={`relative w-full ${
                    bubble == "1"
                      ? "rounded-2xl overflow-hidden shadow-md"
                      : ""
                  }`}
                >
                  <img
                    alt={slide.alt}
                    style={{ height }}
                    className="w-full h-full object-cover"
                    src={"http://localhost:8000/storage/" + slide.image}
                  />
                  <Layout className="absolute top-0 left-0 w-full h-full items-center z-10">
                    {<Text {...slide} />}
                  </Layout>
                </div>
              </div>
            </div>
          );
        })}
        config={{
          arrows: config.arrows == "1",
          dots: config.dots == "1",
          arrows: config.arrows == "1",
          autoplay: config.autoplay == "1",
          rtl: config.rtl == "1",
          vertical: config.vertical == "1",
          speed: Number(config.speed),
          autoplaySpeed: Number(config.autoplaySpeed),
          slidesToShow: Number(config.slidesToShow),
          slidesToScroll: Number(config.slidesToScroll),
        }}
      />
      <Layout type ="split"  className="absolute top-0 left-0 w-full h-full items-center">
        {text && <Text {...text} />}
        {form?.fields && <> {Form.new(form)}</>}
      </Layout>
    </>
  );
  return bubble == "0" ? (
    <div className="w-full relative">{body}</div>
  ) : (
    <div className="w-full flex">
      <div className="w-full relative">
        <div className="overflow-hidden rounded-2xl w-full">{body}</div>
      </div>
    </div>
  );
}

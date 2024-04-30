import { Slider } from "@components/slider/slider";
import { Layout } from "@components/layout/layout";
import { Text as TextComponent } from "@components/text/text";
import { Form } from "@components/form/form";

import { props as TextProps } from "./Text";
import { props as FormProps } from "./Form";

import { Image } from "@props/Image";
import { Text } from "@props/Text";
import { Array } from "@props/Array";
import { Object } from "@props/Object";
import { Boolean } from "@props/Boolean";
import { Number } from "@props/Number";
import { Select } from "@props/Select";
//name the component
export const title = "Banner";

//export props

export const props = [
  new Text("Tailwind css", "className"),
  new Select("Variant", "variant").options({
    default: "default",
  }),
  new Boolean("Bubble"),
  new Object("Text", "text", TextProps),
  new Object("Form", "form", FormProps),
  new Number("Height", "height"),
  new Object("Config", "config", [
    new Boolean("Autoplay", "autoplay"),
    new Boolean("Arrows", "arrows"),
    new Boolean("Dots", "dots"),
    new Boolean("Vertical", "vertical"),
    new Number("Speed", "speed"),
    new Number("Autoplay speed", "autoplaySpeed"),
    new Number("Slides to show", "slidesToShow"),
    new Number("Slides to scroll", "slidesToScroll"),
    new Boolean("Right to left", "rtl"),
  ]),
  new Array("Slides", "slides").rules([
    new Object("Text", "text", TextProps),
    new Image("Image", "image"),
    new Text("Link", "url"),
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
        style={{ height: height + (bubble == "1" ? 32 : 0) }}
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
                    bubble == "1" ? "rounded-2xl overflow-hidden shadow-md" : ""
                  }`}
                >
                  <img
                    alt={slide.alt}
                    style={{ height }}
                    className="w-full h-full object-cover"
                    src={"http://localhost:8000/storage/" + slide.image}
                  />
                  {slide.text && (
                    <Layout className="absolute top-0 left-0 w-full h-full items-center z-10">
                      <TextComponent {...slide.text} />
                    </Layout>
                  )}
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
      <Layout
        type="split"
        className="absolute top-0 left-0 w-full h-full items-center"
      >
        {text && <TextComponent {...text} />}
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

import { text, number, image, object } from "../../@vendor/lib/props";
//name the component
export const title = "Splash";

//export props
export const props = [
  text("className").title("Tailwind css"),
  image("image").title("Image"),
  object("style", [
    number("scale").title("Scale"),
    text("left").title("Left"),
    text("top").title("Top"),
    text("width").title("Width"),
    text("height").title("Height"),
    text("transform").title("Transform"),

  ]),
];
//export component
export default function Component({ image, style }) {
  console.log(style)
  return (
    <div className="overflow-hidden absolute w-full h-full top-0 left-0 flex justify-center items-center">
      <img
        className="relative object-contain"
        style={style}
        src={"http://localhost:8000/storage/" + image}
      />
    </div>
  );
}

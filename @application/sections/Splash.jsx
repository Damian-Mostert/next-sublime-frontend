import { Text } from "../../app/lib/props/Text";
import { Image } from "../../app/lib/props/Image";
import { Number } from "../../app/lib/props/Number";
import { Object } from "../../app/lib/props/Object";

//name the component
export const title = "Splash";

//export props
export const props = [
  new Text("Tailwind css", "className"),
  new Image("Image", "image"),
  new Object("Style", "style", [
    new Number("Scale", "scale"),
    new Text("Left", "left"),
    new Text("Top", "top"),
    new Text("Width", "width"),
    new Text("Height", "height"),
    new Text("Transform", "transform"),
  ]),
];
//export component
export default function Component({ image, style }) {
  return (
    <div className="overflow-hidden absolute w-full h-full top-0 left-0 flex justify-center items-center">
      <img
        className="relative object-contain"
        style={style}
        src={image}
      />
    </div>
  );
}

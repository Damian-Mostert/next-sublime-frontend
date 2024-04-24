# Usage

make a file, js jsx or tsx. the filename must have no spaces, this will be the components key.


```jsx

import { number, image } from "@props";

//name the component
export const title = "Title for dashboard";

//build and export props
export const props = [
    number("top").title("Top"),
    number("bottom").title("Bottom"),
    number("left").title("Left"),
    number("right").title("Right"),
    image("image").title("Image"),
];
//export component
export default function Component({ top, bottom, left, right, image }) {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <img className="absolute" style={{ top, bottom, left, right }} src={image} />
        </div>
    );
}

```
import "./list.scss";

import { Text } from "@/vendor/components";

export function List({
  text,
  variant = "default",
  className = "",
  items = [],
  dots = false,
  arrows = false,
}) {
  if (!dots && !arrows) dots = true;
  return (
    <div className="list-container">
      {text && <Text {...text} />}
      <ul
        className={`list list-variant-${variant} ${
          dots ? "list-dots" : arrows ? "list-arrows" : ""
        } ${className}`}
      >
        {items.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

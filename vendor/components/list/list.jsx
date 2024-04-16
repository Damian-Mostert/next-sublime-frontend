import "./list.scss";

export function List({
  variant = "default",
  className = "",
  list = [],
  dots = false,
  arrows = false,
  align
}) {
  if (!dots && !arrows) dots = true;
  return (
    <div className="list-container" style={{textAlign:align}}>
      <ul
        className={`list list-variant-${variant} ${
          dots ? "list-dots" : arrows ? "list-arrows" : ""
        } ${className}`}
      >
        {list.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

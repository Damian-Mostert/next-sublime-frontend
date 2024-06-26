
import { Button } from "sublime-components";

export function Link({ href, label, pathname }) {
    return (
      <Button
        href={href}
        variant={`header${pathname == href ? "-active" : ""}`}
        label={label}
        className={`w-full`}
      />
    );
  }
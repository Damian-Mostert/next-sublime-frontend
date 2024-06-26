import { Input } from "sublime-components";
import { Prop } from "./lib/Prop";

export class Number extends Prop {
  constructor(title, key) {
    super(key);
    this.title = title;
    return this;
  }

  edit = (value, update) => {
    return (
      <div>
        <Input
          value={value}
          label={this.title}
          require={this.require}
          type={"number"}
          onChange={update}
        />
      </div>
    );
  };
}

import { Input } from "sublime-components";
import { Prop } from "./lib/Prop";

export class Select extends Prop {
  constructor(title, key) {
    super(key);
    this.title = title;
    return this;
  }

  //type of input;
  default_value = "";

  opp = [];

  options = (ops) => {
    this.opp = ops;
    return this;
  };

  edit = (value, update) => {
    return (
      <div>
        <Input
          value={value}
          label={this.title}
          require={this.require}
          type={"select"}
          options={this.opp}
          placeholder={"Please select a option."}
          onChange={update}
        />
      </div>
    );
  };
}

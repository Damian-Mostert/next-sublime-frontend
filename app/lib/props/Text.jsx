import { Input } from "sublime-components";
import { Prop } from "./lib/Prop";

export class Text extends Prop {
  constructor(title, key) {
    super(key);
    this.title = title;
    return this;
  }
  default_value = "";
  //type of input;
  mime_type = "text";

  type = (type) => {
    this.mime_type = type;
    return this;
  };

  edit = (value, update) => {
    return (
      <div>
        <Input
          value={value}
          label={this.title}
          require={this.require}
          type={this.mime_type}
          onChange={update}
        />
      </div>
    );
  };
}

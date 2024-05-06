import { Input } from "@components/input/input";
import { Prop } from "./lib/Prop";
import { img } from "@components/tools/A&img";

export class Image extends Prop {
  constructor(title, key) {
    super(key);
    this.title = title;
    return this;
  }
  view = (input) => {
    return (
      <div>
        <img className="w-12 h-12" src={input} />
      </div>
    );
  };
  detail = (input) => {
    return (
      <div>
        <div>{this.title}</div>
        <img style={{ height: "100px", width: "auto" }} src={input} />
      </div>
    );
  };
  edit = (value, update) => {
    return (
      <div>
        <Input
          value={value}
          label={this.title}
          require={this.require}
          type={"image"}
          onChange={update}
        />
      </div>
    );
  };
}

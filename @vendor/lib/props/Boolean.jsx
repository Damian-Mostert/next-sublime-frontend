import { Input } from "@components/input/input";
import { Prop } from "./Prop";

export class Boolean extends Prop {
  constructor(title, key) {
    super(key);
    this.title = title;
    return this;
  }

  view = (input) => {
    return (
      <div
        className="w-full h-full flex justify-center items-center"
        style={{
          color:
            typeof input == "undefined" ? "purple" : input ? "red" : "blue",
        }}
      >
        {String(input)}
      </div>
    );
  };
  detail = (input) => {
    return (
      <div>
        <div>{this.title}</div>
        <div
          style={{
            color:
              typeof input == "undefined" ? "purple" : input ? "red" : "blue",
          }}
        >
          {String(input)}
        </div>
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
          type={"boolean"}
          onChange={update}
        />
      </div>
    );
  };
}

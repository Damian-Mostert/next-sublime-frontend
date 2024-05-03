import { Input } from "@components/input/input";
import { Prop } from "./lib/Prop";

export class Boolean extends Prop {
  constructor(title, key) {
    super(key);
    this.title = title;
    return this;
  }

  view = (input) => {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div
         style={{
          background: input ? "#42db99" : "#db7a42",
        }}
          className="p-2 rounded-full"
        />
      </div>
    );
  };
  detail = (input) => {
    return (
      <div>
        <div>{this.title}</div>
        <div className={`flex justify-start items-center`}>
          <div
            style={{
              background: input ? "#42db99" : "#db7a42",
            }}
            className="p-2 rounded-full"
          />
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

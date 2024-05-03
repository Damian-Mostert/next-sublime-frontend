import { Input } from "@components/input/input";
import { Prop } from "./lib/Prop";
import { Img } from "@components/tools/A&Img";

export class Image extends Prop {
  constructor(title, key) {
    super(key);
    this.title = title;
    return this;
  }
  view = (input) => {
    return (
      <div>
        <Img className="w-12 h-12" src={input}/>    
      </div>
    );
  };
  detail = (input) => {
    return (
      <div>
        <Img className="w-60 h-60" src={input}/>    
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
          type={this.mime_type}
          onChange={update}
        />
      </div>
    );
  };
}

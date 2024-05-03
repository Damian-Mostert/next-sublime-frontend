import { Prop } from "./lib/Prop";
import { MakeEdit } from "./BelongsTo/client";

export class Array extends Prop {
  constructor(title, key, model) {
    super(key);
    this.title = title;
    this.model = model;
    return this;
  }
  detail = async (value) => {
    return (
      <div>
        <div>{this.title}</div>
        <div>{value}</div>
      </div>
    );
  };
  rules = () =>{
    
  }
  view = async (value) => {
    let options = await this.getOptions();
    return <>{options.filter((i) => i.value == value)?.[0]?.label}</>;
  };
  edit = (value, update) => {
    const Edit = MakeEdit(
      this.title,
      value,
      this.require,
      update,
      this.getOptions
    );
    return <Edit />;
  };
}

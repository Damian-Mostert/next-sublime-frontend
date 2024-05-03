import { Prop } from "./lib/Prop";
import { MakeEdit } from "./BelongsTo/client";

export class BelongsTo extends Prop {
  constructor(title, key, model) {
    super(key);
    this.title = title;
    this.model = model;
    return this;
  }

  key_to_use = null;
  getOptions = async () => {
    return (await new this.model().model().get()).map((item) => ({
      label: item[this.key_to_use],
      value: item.id,
    }));
  };
  displayUsing = (key) => {
    this.key_to_use = key;
    return this;
  };
  detail = async (value) => {
    let options = await this.getOptions();
    return (
      <div>
        <div>{this.title}</div>
        <div>{options.filter((i) => i.value == value)?.[0]?.label}</div>
      </div>
    );
  };
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

import { Input } from "@components/input/input";
import { Prop } from "./lib/Prop";
import { Title } from "@components/title/title";
import Table from "../../../app/dashboard/components/table";

export class HasMany extends Prop {
  constructor(title, key, model) {
    super(key);
    this.key = key;
    this.model = model;
    this.title = title;
    return this;
  }

  outside = true;

  mime_type = "text";

  dont_show_at_view = true;

  view = () => {};

  edit = (value, update) => {};

  detail = async (input) => {
    const data = await this.model.model().where(this.key, "==", input.id).get();

    return (
      <div className="w-full mt-4">
        <Title align="left" text={this.title} />
        <Table
          params={{ slug: this.model.title }}
          data={data}
          fields={this.model.fields({}, data[0])}
        />
      </div>
    );
  };
}

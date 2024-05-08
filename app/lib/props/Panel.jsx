import { Input } from "sublime-components";
import { Prop } from "./lib/Prop";
import { Title } from "sublime-components";
import Table from "../../dashboard/components/table";

export class Panel extends Prop {
  constructor(title, model, key) {
    super(key);
    this.model = model;
    this.title = title;
    return this;
  }

  outside = true;

  dont_show_at_view = true;

  view = () => {};

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
  detail = async (input) => {
    return (
      <div className="w-full mt-4">
        <Title text={this.title} />
        <Table
          params={{ slug: new this.model().title }}
          data={await this.model().where(this.key, "==", input).first()}
          fields={this.model().fields()}
        />
      </div>
    );
  };
}

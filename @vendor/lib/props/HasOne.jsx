import { Input } from "@components/input/input";
import { Prop } from "./Prop";
import { Title } from "@components/title/title";
import Table from "../../../app/dashboard/components/table";
import { Viewer } from "../../../app/dashboard/viewer";
import { Popups } from "@application/dashboard/popups";

export class HasOne extends Prop {
  constructor(title, key, model) {
    super(key);
    this.key = key;
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
    const data = await this.model
      .model()
      .where(this.key, "==", input.id)
      .first();

    console.log("h-one", this.model.model, this.key, input, data);
    return (
      <div className="w-full mt-4">
        <Title align="left" text={this.title} />
        {data && (
          <Viewer
            params={{ slug: this.model.title }}
            //preview={this.model.preview(data)}
            data={data}
            fields={this.model.fields()}
          />
        )}
        {!data && <div className="w-full h-full flex items-center justify-center">
            No content
        </div>}
      </div>
    );
  };
}

import { Input } from "@components/input/input";
import { Prop } from "./lib/Prop";
import { Viewer } from "../../../app/dashboard/viewer";
export class Object extends Prop {
  constructor(title, key, fields) {
    super(key);
    this.fields = fields;
    this.title = title;
    return this;
  }
  default_value = {};
  detail = (input) => {
    console.log(input, this.fields);
    return (
      <div className="flex flex-wrap">
        <div className="w-full text-2xl pt-2">{this.title}</div>
        <div className="pl-4 w-full">
          <Viewer params={{}} data={input} fields={this.fields} />
        </div>
      </div>
    );
  };

  edit = (data = {}, update) => {
    var keys = data;
    this.fields.map((field, key) => {
      if (!data[field?.key]) {
        keys[field?.key] = field?.default_value;
      }
    });
    const newUpdate = (key) => {
      return (value) => {
        const newData = { ...keys };
        newData[key] = value;
        update(newData);
      };
    };
    return (
      data && (
        <div className="flex flex-wrap">
          <div className="w-full text-2xl pt-8">{this.title}</div>
          <div className="pl-4 w-full">
            {this.fields.map((field, key) => {
              return field.edit(keys?.[field.key], newUpdate(field.key));
            })}
          </div>
        </div>
      )
    );
  };
}

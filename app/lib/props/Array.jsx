import { Prop } from "./lib/Prop";
import { Edit } from "./Array/client";

export class Array extends Prop {
  constructor(title, key, model) {
    super(key);
    this.title = title;
    this.model = model;
    return this;
  }
  detail = async (value = []) => {
    return (
      <div>
        <div>{this.title}</div>
        <div className="pl-4">
          {!this.Rules &&
            value.map((item, key) => {
              return (
                <>
                  <div key={key}>{item}</div>
                  <div className="w-full my-2 border-b border-primary" />
                </>
              );
            })}
          {this.Rules &&
            value.map((item, key) => {
              field = Rules.filter(rule=>rule.key == item)
              return (
                <>
                  <div key={key}>{item}</div>
                  <div className="w-full my-2 border-b border-primary" />
                </>
              );
            })}
        </div>
      </div>
    );
  };
  Rules = null;
  rules = (rules) => {
    this.Rules = rules;
    return this;
  };
  view = async (value = []) => {};
  edit = (value, update) => {
    if (!value) update([]);
    return (
      <Edit
        value={value}
        title={this.title}
        update={update}
        rules={this.Rules}
      />
    );
  };
}

import { Prop } from "./lib/Prop";

export class Id extends Prop {
  constructor(key) {
    super(key ? key : "id");
    this.title = key ? key : "id";
    return this;
  }
  edit = (value, update) => {};
}

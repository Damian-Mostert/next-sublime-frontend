import { Model, Blueprint } from "@vendor/lib/database";

export default function page() {
  return Model("Pages", {
    title:String,
    slug:String
  });
}

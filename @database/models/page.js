import { Model, Blueprint } from "@vendor/lib/database";

export default function page() {
  return Model(
    "Pages",
    class extends Blueprint {
      constructor() {
        this.useId();
      }
      title = String();
      description = String();
      slug = String();
      active = Boolean();
    }
  );
}

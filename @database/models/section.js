import { Model, Blueprint } from "@vendor/lib/database";

export default function section() {
  return Model(
    "Sections",
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

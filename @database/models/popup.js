import { Model, Blueprint } from "@vendor/lib/database";

export default function popup() {
  return Model(
    "Popups",
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

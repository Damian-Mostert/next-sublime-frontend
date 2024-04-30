import { Model } from "@vendor/lib/database";

const pageSection = () =>
  new Model("Sections", (blueprint) => {
    blueprint.id();
    blueprint.string("title").require();
    blueprint.string("description").require();
    blueprint.string("page_id").require();
    blueprint.object("data");
  });

export default pageSection;

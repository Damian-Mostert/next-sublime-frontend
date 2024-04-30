import { Model } from "@vendor/lib/database";

const page = () =>
  new Model("Pages", (blueprint) => {
    blueprint.id();
    blueprint.string("title").require();
    blueprint.string("description").require();
    blueprint.string("slug").require();
    blueprint.boolean("active").require();
  });

export default page;

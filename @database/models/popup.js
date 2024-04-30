import { Model } from "@vendor/lib/database";

const popup = () =>
  new Model("Popups", (blueprint) => {
    blueprint.id();
    blueprint.string("page_id");
    blueprint.object("", (blueprint) => {
      blueprint;
    });
  });

export default popup;

import { Model } from "@vendor/lib/database";

const users = () =>
  new Model("Users", (blueprint) => {
    blueprint.id();
    blueprint.string("name");
    blueprint.string("surname");
    blueprint.string("mobile_number");
    blueprint.object("", (blueprint) => {
      blueprint;
    });
  });

export default users;

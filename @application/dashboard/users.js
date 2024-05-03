import { Text } from "@props/Text";
import { Id } from "@props/Id";

import user from "@database/models/user";
import { Dashboard } from "@props/lib/Dashboard";

export class Users extends Dashboard {
  group = "Authentication";
  title = "Users";
  model = user;

  //build fields
  fields = (user) => {
    return [
      new Id(),
      new Text("Name", "name").require(),
      new Text("Surname", "surname").require(),
      new Text("Email", "email").type("email").require(),
    ];
  };
}

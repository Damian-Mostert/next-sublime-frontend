import { Model, Blueprint } from "database-funnel";

export default function user() {
  return Model("Users", {
    name: ["string"],
    surname: ["string"],
    email: ["string"],
    mobileNumber: ["string"],
    password: ["string"],
    gender: ["string"],
    sendUpdates: ["boolean"],
  });
}

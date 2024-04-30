import { Pages } from "./pages";
import { PageSections } from "./page-sections";
import { Users } from "./users";
import { Popups } from "./popups";

export default [new Pages(), new PageSections(), new Users(), new Popups()];

export const getUser = async () => {
  //return next auth user;
};

export const authenticate = async (user) => {
  return user.type == "admin";
};

export const login = async (credentials) => {
  return credentials;
};

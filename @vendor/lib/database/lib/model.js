import { FireStoreModel } from "./model/FireStore";
import { MongoDBModel } from "./model/MongoDB";
import { MysqlModel } from "./model/Mysql";

export function Model(name, rules, databaseType) {
  if (databaseType) return getModel(databaseType, name, rules);
  return getModel(process.env.NEXT_PUBLIC_DATABASE_TYPE, name, rules);
}

const getModel = (CASE, name, rules) => {
  switch (CASE) {
    case "FireStore":
      return new FireStoreModel(name, rules);
    case "Mysql":
      return new MysqlModel(name, rules);
    case "MongoDB":
      return new MongoDBModel(name, rules);
  }
};

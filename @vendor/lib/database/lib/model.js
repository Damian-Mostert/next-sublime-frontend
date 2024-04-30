import { FireStoreModel } from "./model/FireStore";

function MysqlModel(name, rules) {
  this.table_name = name;
  this.query = [];
  this.where = (a, b, c) => {
    return this;
  };
  this.get = () => {};
  this.update = () => {};
  this.delete = () => {};
}

function MongoDBModel(name, rules) {
  this.model_name = name;
  this.query = [];
  this.where = (a, b, c) => {
    return this;
  };
  this.get = () => {};
  this.update = () => {};
  this.delete = () => {};
}

export function Model(name, rules) {
  switch (process.env.NEXT_PUBLIC_DATABASE_TYPE) {
    case "FireStore":
      return new FireStoreModel(name, rules);
    case "Mysql":
      return new  MysqlModel(name, rules);
    case "MongoDB":
      return new MongoDBModel(name, rules);
  }
}

import { DatabaseModel } from "./lib/database-model";
import mongoose, { Schema } from "mongoose";

const makeSchemaFromBlueprint = (blueprint) => {
  const rules = {
    id: String,
    ...blueprint,
  };

  let schema = new Schema(rules);
  return schema;
};

export class MongoDBModel extends DatabaseModel {
  constructor(name, blueprint) {
    super(name, blueprint);

    mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    if (mongoose.connection.models[name]) {
      this.model = mongoose.connection.models[name];
    } else {
      this.model = mongoose.model(name, makeSchemaFromBlueprint(blueprint));
    }
  }

  query = null;

  where = (a, b, c) => {
    if (a == "id") a = "_id";
    if (!this.query) this.query = {};
    this.query[a] =  c ;
    return this;
  };

  get = async () => {
    try {
      if (this.query) {
        const results = await this.model.find(this.query);
        this.query = null;
        return results.map((res) => ({ ...res, id: String(res._id), _id: String(res._id) }));
      } else {
        return await this.model.find();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  first = async () => {
    const docs = await this.get();
    return docs[0];
  };

  delete = async () => {
    if (!this.query) throw new Error("No query called before delete.");

    await this.model.deleteMany(this.query);
    this.query = null;
  };

  update = async (data) => {
    if (!this.query) throw new Error("No query called before update.");

    await this.model.updateMany(this.query, data);
    this.query = null;
  };

  make = async (data) => {
    let res = await this.model.create(data);
    this.query = null;
    return String(res._id);
  };
}

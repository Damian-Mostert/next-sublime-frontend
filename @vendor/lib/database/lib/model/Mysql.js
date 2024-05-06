import { DatabaseModel } from "./lib/database-model";
import mysql from "mysql2/promise";

const migrate = (table, rules) => {};

export class MysqlModel extends DatabaseModel {
  constructor(table, rules) {
    migrate(table, rules);
    super();
    this.table = table;
    this.connection = null;
    this.init();
  }

  async init() {
    if (!this.connection) {
      this.connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
      });
    }
  }

  async get() {
    try {
      await this.init();
      const [results] = await this.connection.query(
        "SELECT * FROM ?? " + this.query,
        [this.table]
      );
      return results;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  async first() {
    const docs = await this.get();
    return docs[0];
  }

  where(column, operator, value) {
    if (!this.query) {
      this.query = " WHERE ?? " + operator + " ?";
    } else {
      this.query += " AND ?? " + operator + " ?";
    }
    this.queryValues.push(column, value);
    return this;
  }

  async update(data) {
    for (let key of Object.keys(data)) {
      const [results] = await this.connection.query(
        "UPDATE " +
          key +
          " = " +
          "`" +
          data[key] +
          "`" +
          this.table +
          " SET " +
          built[this.table]
      );
    }
    this.query = null;
  }

  async delete() {
    const [results] = await this.connection.query(
      "DELETE FROM " + this.table + this.query,
      [this.table]
    );
    this.query = null;
  }

  async make(data) {
    const [results] = await this.connection.query(
      "INSERT INTO " +
        this.table +
        "(" +
        Object.keys(data)
          .map((item) => `'${item}' `)
          .join(",") +
        ")",
      [this.table]
    );
    // Implement make logic
  }
}

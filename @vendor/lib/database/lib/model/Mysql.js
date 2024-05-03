import { DatabaseModel } from "./lib/database-model";

/* import mysql from "mysql2";

mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
 */
const migrate = (rules) => {};

export class MysqlModel extends DatabaseModel {
  constructor(table, rules) {
    this.table = table;
    migrate(rules);
  }
  query = [];
  reset = () => {
    this.query = [];
  };

  where = (a, b, c) => this.query.push(a, b, c);
  make = (data) => {};
}

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "test",
  password: "test",
  database: "rentx"
})
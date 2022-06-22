import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_ignite",
  username: "docker",
  password: "ignite",
  database: "rentx",
  entities: ["Category"],
  migrations: ["1654826967781-CreateCategories"]
})

export function createConnection(): void {
  AppDataSource.initialize().then(() => {
    console.log("DB connected")
  }).catch(err => console.log(err));
}

import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_ignite",
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrationsRun: true,
  migrations: [__dirname + "/migrations/**/*{.js,.ts}"]
})

export function createConnection(): Promise<DataSource> {
  return AppDataSource.initialize();
}

export default AppDataSource
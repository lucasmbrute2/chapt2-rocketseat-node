import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "database_ignite",
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrationsRun: true,
  migrations: [__dirname + "/migrations/**/*{.js,.ts}"]
})

export async function createConnection(): Promise<DataSource> {
  return await AppDataSource.initialize();
}

export default AppDataSource
import { DataSource } from "typeorm";
import { Ring } from "../../features/ring/entities/type-orm";
import { env } from "../../env";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.DATABASE_HOST,
  port: 5432,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [Ring],
  synchronize: true,
  logging: false,
});

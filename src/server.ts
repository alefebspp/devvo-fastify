import "dotenv/config";
import "reflect-metadata";

import { AppDataSource } from "./database/typeorm";
import app from "./app";

const start = async () => {
  try {
    await AppDataSource.initialize();
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

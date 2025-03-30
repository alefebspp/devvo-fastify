import { AppDataSource } from "../../../database/typeorm";
import { Ring } from "../../../features/ring/entities/type-orm";
import { ringSeed } from "./ring.data";

async function seed() {
  const connection = await AppDataSource.initialize();
  const ringRepo = connection.getRepository(Ring);

  console.log("🔄 Clearing rings table...");
  await ringRepo.clear();

  console.log("🌱 Inserting rings...");
  await ringRepo.save(ringSeed);

  console.log("✅ Seed completed!");
  await connection.destroy();
}

seed().catch((err) => {
  console.error("Erro ao executar o seed:", err);
  process.exit(1);
});

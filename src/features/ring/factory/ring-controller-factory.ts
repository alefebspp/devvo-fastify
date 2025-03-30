import RingController from "../controllers/ring-controller";
import { TypeOrmRingRepository } from "../repositories/type-orm-ring-repository";
import RingService from "../services/ring-service";

export default function ringControllerFactory() {
  const ringRepository = new TypeOrmRingRepository();
  const ringService = new RingService(ringRepository);
  const controller = new RingController(ringService);

  return {
    create: controller.create.bind(controller),
    updated: controller.updated.bind(controller),
    findById: controller.findById.bind(controller),
    findAll: controller.findAll.bind(controller),
    remove: controller.remove.bind(controller),
  };
}

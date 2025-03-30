import { z } from "zod";

import {
  createRingSchema,
  idSchema,
  updateRingSchema,
} from "@/features/ring/schemas";
import { FastifyTypedInstance } from "@/types";
import ringControllerFactory from "@/features/ring/factory/ring-controller-factory";

export default async function ringRoutes(app: FastifyTypedInstance) {
  const ringController = ringControllerFactory();

  app.post(
    "/",
    {
      schema: {
        operationId: "createRing",
        description: "Create ring",
        tags: ["rings"],
        body: createRingSchema,
        response: {
          201: z.object({ message: z.string() }),
        },
      },
    },
    ringController.create
  );

  app.patch(
    "/:id",
    {
      schema: {
        operationId: "updateRing",
        description: "Update ring",
        tags: ["rings"],
        body: updateRingSchema,
        params: idSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
      },
    },
    ringController.updated
  );

  app.get(
    "/",
    {
      schema: {
        operationId: "getRings",
        description: "Find all rings",
        tags: ["rings"],
        response: {
          200: z.object({
            rings: z.array(
              z
                .object({
                  id: z.string(),
                  createdAt: z.date(),
                  updatedAt: z.date(),
                })
                .merge(createRingSchema)
            ),
          }),
        },
      },
    },
    ringController.findAll
  );

  app.get(
    "/:id",
    {
      schema: {
        operationId: "getRing",
        description: "Find ring",
        tags: ["rings"],
        params: idSchema,
        response: {
          200: z
            .object({
              id: z.string(),
              createdAt: z.date(),
              updatedAt: z.date(),
            })
            .merge(createRingSchema),
        },
      },
    },
    ringController.findById
  );

  app.delete(
    "/:id",
    {
      schema: {
        operationId: "deleteRing",
        description: "Remove ring",
        tags: ["rings"],
        params: idSchema,
        response: {
          200: z.object({ message: z.string() }),
        },
      },
    },
    ringController.remove
  );
}

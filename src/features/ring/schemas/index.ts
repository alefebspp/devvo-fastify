import z from "zod";

export const createRingSchema = z.object({
  name: z.string(),
  power: z.string(),
  carrier: z.string(),
  forgedBy: z.enum(["men", "elves", "dwarves", "sauron"]),
  imageUrl: z.string().url(),
});

export const updateRingSchema = createRingSchema.partial();

export const idSchema = z.object({
  id: z.string().uuid(),
});

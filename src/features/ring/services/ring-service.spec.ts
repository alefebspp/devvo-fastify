import { describe, it, expect } from "vitest";
import Ring from "../entities";
import { InMemoryRingRepository } from "../repositories/in-memory-ring-repository";
import RingService, { ForgedByMax } from "./ring-service";
import { AppError } from "@/error/AppError";

function sut({ forgedByMax }: { forgedByMax?: ForgedByMax } = {}) {
  const ringRepository = new InMemoryRingRepository();
  const ringService = new RingService(ringRepository, forgedByMax);

  return {
    ringRepository,
    ringService,
  };
}

describe("Ring service", () => {
  it("should be able to create a new ring", async () => {
    const { ringRepository, ringService } = sut();
    const data: Omit<Ring, "id" | "createdAt" | "updatedAt"> = {
      name: "ring",
      power: "create fire",
      carrier: "random",
      forgedBy: "men",
      imageUrl: "",
    };

    await ringService.create(data);

    expect(ringRepository.rings.length).toEqual(1);
  });

  it("should should throw if max forged rings limit is reachead", async () => {
    const { ringService } = sut({
      forgedByMax: { men: 1, elves: 2, dwarves: 3, sauron: 4 },
    });

    const data: Omit<Ring, "id" | "createdAt" | "updatedAt"> = {
      name: "ring",
      power: "create fire",
      carrier: "random",
      forgedBy: "men",
      imageUrl: "",
    };

    await ringService.create(data);
    await expect(ringService.create(data)).rejects.toBeInstanceOf(AppError);
  });
});

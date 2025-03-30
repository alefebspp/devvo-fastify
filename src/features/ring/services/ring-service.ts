import { AppError } from "@/error/AppError";
import Ring, { ForgedBy } from "../entities";
import { RingRepository } from "../repositories";

export type ForgedByMax = Record<ForgedBy, number>;

export default class RingService {
  private forgedByMax: ForgedByMax;

  constructor(
    private readonly ringRepository: RingRepository,
    forgedByMax?: ForgedByMax
  ) {
    if (forgedByMax) {
      this.forgedByMax = forgedByMax;
    } else {
      this.forgedByMax = {
        elves: 3,
        dwarves: 7,
        men: 9,
        sauron: 1,
      };
    }
  }

  private async throwIfForgedByMaxIsReached({
    forgedBy,
    onUpdate,
  }: {
    forgedBy: ForgedBy;
    onUpdate?: boolean;
  }) {
    const max = this.forgedByMax[forgedBy];

    const foundRings = await this.ringRepository.findAll({ forgedBy });

    let shouldThrow = foundRings.length === max;

    if (onUpdate) {
      shouldThrow = foundRings.length > max + 1;
    }

    if (shouldThrow) {
      throw new AppError(`Reached maximum number of ${forgedBy} rings`, 400);
    }
  }

  async create(data: Omit<Ring, "id" | "createdAt" | "updatedAt">) {
    const forgedBy = data.forgedBy;

    await this.throwIfForgedByMaxIsReached({ forgedBy });

    await this.ringRepository.create(data);
  }

  async findById(id: string) {
    const ring = await this.ringRepository.findById(id);

    if (!ring) {
      throw new AppError("Ring not found", 400);
    }

    return ring;
  }

  async findAll() {
    const rings = await this.ringRepository.findAll();

    return rings;
  }

  async update({ id, data }: { id: string; data: Partial<Ring> }) {
    await this.findById(id);

    if (data.forgedBy) {
      const forgedBy = data.forgedBy;

      await this.throwIfForgedByMaxIsReached({ forgedBy, onUpdate: true });
    }

    await this.ringRepository.update({ id, data });
  }

  async remove(id: string) {
    await this.findById(id);

    await this.ringRepository.delete(id);
  }
}

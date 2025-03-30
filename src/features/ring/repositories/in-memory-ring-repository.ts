import Ring from "@/features/ring/entities";
import { RingRepository } from "@/features/ring/repositories";

export class InMemoryRingRepository implements RingRepository {
  public rings: Ring[] = [];

  async findAll(): Promise<Ring[]> {
    return [...this.rings];
  }

  async findById(id: string): Promise<Ring | null> {
    return this.rings.find((ring) => ring.id === id) ?? null;
  }

  async create(
    data: Omit<Ring, "id" | "createdAt" | "updatedAt">
  ): Promise<Ring> {
    const newRing: Ring = {
      id: crypto.randomUUID(),
      name: data.name,
      power: data.power,
      carrier: data.carrier,
      forgedBy: data.forgedBy,
      imageUrl: data.imageUrl,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.rings.push(newRing);
    return newRing;
  }

  async update({
    id,
    data,
  }: {
    id: string;
    data: Partial<Ring>;
  }): Promise<Ring | null> {
    const index = this.rings.findIndex((ring) => ring.id === id);

    if (index === -1) return null;

    const updated: Ring = {
      ...this.rings[index],
      ...data,
      id: this.rings[index].id,
      updatedAt: new Date(),
    };

    this.rings[index] = updated;
    return updated;
  }

  async delete(id: string): Promise<void> {
    this.rings = this.rings.filter((ring) => ring.id !== id);
  }
}

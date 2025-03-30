import Ring, { ForgedBy } from "@/features/ring/entities";

export interface FindAllRingsParams {
  forgedBy?: ForgedBy;
}

export interface RingRepository {
  findAll(params?: FindAllRingsParams): Promise<Ring[]>;
  findById(id: string): Promise<Ring | null>;
  create(ring: Omit<Ring, "id" | "createdAt" | "updatedAt">): Promise<Ring>;
  update(data: { id: string; data: Partial<Ring> }): Promise<Ring | null>;
  delete(id: string): Promise<void>;
}

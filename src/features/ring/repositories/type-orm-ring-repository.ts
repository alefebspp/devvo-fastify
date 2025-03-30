import { Ring } from "@/features/ring/entities/type-orm";
import {
  FindAllRingsParams,
  RingRepository,
} from "@/features/ring/repositories";
import { AppDataSource } from "@/database/typeorm";

export class TypeOrmRingRepository implements RingRepository {
  private ringRepository = AppDataSource.getRepository(Ring);

  async findAll(params: FindAllRingsParams): Promise<Ring[]> {
    const where = {};

    if (params?.forgedBy) {
      Object.assign(where, {
        forgedBy: params.forgedBy,
      });
    }
    return await this.ringRepository.find({ where });
  }

  async findById(id: string): Promise<Ring | null> {
    return await this.ringRepository.findOneBy({ id });
  }

  async create(ring: Partial<Ring>): Promise<Ring> {
    const newRing = this.ringRepository.create(ring);
    return await this.ringRepository.save(newRing);
  }

  async update({
    id,
    data,
  }: {
    id: string;
    data: Partial<Ring>;
  }): Promise<Ring | null> {
    await this.ringRepository.update(id, data);
    return await this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.ringRepository.delete(id);
  }
}

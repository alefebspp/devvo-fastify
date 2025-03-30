import { FastifyReply, FastifyRequest } from "fastify";
import RingService from "../services/ring-service";
import { createRingSchema, idSchema } from "../schemas";

export default class RingController {
  constructor(private readonly ringService: RingService) {}

  async create(request: FastifyRequest, reply: FastifyReply) {
    const body = createRingSchema.parse(request.body);

    await this.ringService.create(body);

    return reply.status(201).send({ message: "Successfully created ring" });
  }

  async updated(request: FastifyRequest, reply: FastifyReply) {
    const body = createRingSchema.parse(request.body);
    const { id } = idSchema.parse(request.params);

    await this.ringService.update({ id, data: body });

    return reply.status(200).send({ message: "Successfully updated ring" });
  }

  async findById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = idSchema.parse(request.params);

    const ring = await this.ringService.findById(id);

    return reply.status(200).send({ ...ring });
  }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    const rings = await this.ringService.findAll();

    return reply.status(200).send({ rings });
  }

  async remove(request: FastifyRequest, reply: FastifyReply) {
    const { id } = idSchema.parse(request.params);

    await this.ringService.remove(id);

    return reply.status(200).send({ message: "Successfully removed ring" });
  }
}

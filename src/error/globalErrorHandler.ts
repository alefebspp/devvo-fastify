import { FastifyInstance } from "fastify";
import {
  hasZodFastifySchemaValidationErrors,
  isResponseSerializationError,
} from "fastify-type-provider-zod";

import { AppError } from "./AppError";

export default function globalErrorHandler(app: FastifyInstance) {
  app.setErrorHandler(function (error, request, reply) {
    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        error: {
          message: error.message,
          statusCode: error.statusCode,
        },
      });
    }

    if (hasZodFastifySchemaValidationErrors(error)) {
      return reply.code(400).send({
        error: {
          message: "Request doesn't match the schema",
          statusCode: 400,
        },
        details: {
          issues: error.message,
          method: request.method,
          url: request.url,
        },
      });
    }

    if (isResponseSerializationError(error)) {
      return reply.code(500).send({
        error: {
          message: "Response doesn't match the schema",
          statusCode: 500,
        },
        details: {
          issues: error.cause.issues,
          method: error.method,
          url: error.url,
        },
      });
    }
  });
}

import type { FastifyReply, FastifyRequest } from 'fastify';
import * as mockData from '../mock/get-convo-mock.json' with { type: 'json' };
import type { FastifyReplyType } from 'fastify/types/type-provider.js';

export async function getConvo(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as { id: string }
  console.log(`Fetching conversation with id: ${id}`);
  return { data: mockData.default }
}
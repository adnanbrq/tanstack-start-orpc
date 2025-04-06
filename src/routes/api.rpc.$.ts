import { RPCHandler } from '@orpc/server/fetch';
import { createAPIFileRoute } from '@tanstack/react-start/api';
import { orpcRouter } from '~/backend/infrastructure/http/orpc/orpc-router';

const handler = new RPCHandler(orpcRouter);
const handle = async ({ request }: { request: Request }) => {
  const { response } = await handler.handle(request, {
    prefix: '/api/rpc',
    context: {},
  });
  return response ?? new Response(null, { status: 500 });
};

export const APIRoute = createAPIFileRoute('/api/rpc/$')({
  GET: handle,
  POST: handle,
  PUT: handle,
  PATCH: handle,
  DELETE: handle,
});

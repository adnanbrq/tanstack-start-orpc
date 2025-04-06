import { z } from 'zod';

export type RequestUser = z.infer<typeof SchemaRequestUser>;
export type ReceiveUser = z.infer<typeof SchemaReceiveUser>;

export const SchemaRequestUser = z.object({ id: z.string() });
export const SchemaReceiveUser = z.object({ id: z.string(), name: z.string() });

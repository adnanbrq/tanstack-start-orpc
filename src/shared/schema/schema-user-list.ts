import { z } from "zod";
import { SchemaReceiveUser } from "./schema-user";

export type RequestUserList = z.infer<typeof SchemaRequestUserList>;
export type ReceiveUserList = z.infer<typeof SchemaReceiveUserList>;

export const SchemaRequestUserList = z.object({ name: z.string().default("") });
export const SchemaReceiveUserList = SchemaReceiveUser.array();

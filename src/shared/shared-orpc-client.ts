import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { ContractRouterClient } from "@orpc/contract";
import { createORPCReactQueryUtils } from "@orpc/react-query";
import { isServer } from "@tanstack/react-query";
import { getHeaders } from "@tanstack/react-start/server";
import { orpcContract } from "~/backend/infrastructure/http/orpc/orpc-contract";

const link = new RPCLink({
  url: "http://localhost:3000/api/rpc",
  headers: () => (isServer ? getHeaders() : {}),
});

export const orpcClient: ContractRouterClient<typeof orpcContract> =
  createORPCClient(link);
export const orpcQueryUtils = createORPCReactQueryUtils(orpcClient);

import { implement } from "@orpc/server";
import { orpcContractUsers } from "./orpc-contract-users";

export const orpcContract = {
  users: orpcContractUsers,
};
export const orpcRouterContract = implement(orpcContract);

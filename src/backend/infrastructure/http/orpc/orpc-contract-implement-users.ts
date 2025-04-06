import { ORPCError } from "@orpc/server";
import { ReceiveUser } from "~/shared/schema/schema-user";
import { ReceiveUserList } from "~/shared/schema/schema-user-list";
import { orpcRouterContract } from "./orpc-contract";

const users: ReceiveUserList = [
  { id: "1", name: "First" },
  { id: "2", name: "Second" },
];

export const rpcUsersGet = orpcRouterContract.users.get.handler(({ input }) => {
  const user = users.find((u) => u.id === input.id);

  if (user) {
    return user satisfies ReceiveUser;
  }

  throw new ORPCError("NOT_FOUND", { message: "User not found" });
});

export const rpcUsersList = orpcRouterContract.users.list.handler(
  ({ input }) => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(input.name.toLowerCase())
    );
  }
);

import { orpcRouterContract } from './orpc-contract';
import { rpcUsersGet, rpcUsersList } from './orpc-contract-implement-users';

export const orpcRouter = orpcRouterContract.router({
  users: {
    get: rpcUsersGet,
    list: rpcUsersList,
  },
});

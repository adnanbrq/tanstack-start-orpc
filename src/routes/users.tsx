import {
  createFileRoute,
  Outlet,
  stripSearchParams,
} from "@tanstack/react-router";
import { UserList } from "~/components/user-list";
import { UserListFilter } from "~/components/user-list-filter";
import { fnTest } from "~/fn/fn-test";
import { SchemaRequestUserList } from "~/shared/schema/schema-user-list";
import { orpcQueryUtils } from "~/shared/shared-orpc-client";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
  validateSearch: SchemaRequestUserList,
  search: { middlewares: [stripSearchParams({ name: "" })] },
  beforeLoad: async () => {
    await fnTest();
  },
  loaderDeps: ({ search }) => ({ name: search.name }),
  loader: async ({ context, deps }) => {
    await context.queryClient.ensureQueryData(
      orpcQueryUtils.users.list.queryOptions({ input: deps })
    );

    return {};
  },
});

function RouteComponent() {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col space-y-4 p-4 border-r border-zinc-200">
        <UserListFilter />
        <UserList />
      </div>

      <Outlet />
    </div>
  );
}

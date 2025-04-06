import { useQuery } from "@tanstack/react-query";
import { Link, useSearch } from "@tanstack/react-router";
import { orpcQueryUtils } from "~/shared/shared-orpc-client";

export function UserList() {
  const name = useSearch({ from: "/users", select: (s) => s.name });
  const q = useQuery(
    orpcQueryUtils.users.list.queryOptions({ input: { name } })
  );

  return (
    <div className="flex flex-col space-y-2">
      {(q.data ?? []).map((user) => (
        <div key={user.id}>
          <Link
            to="/users/$id"
            search={(old) => old}
            params={{ id: user.id }}
            className="p-2 rounded-md block"
            inactiveProps={{
              className: "bg-zinc-50 hover:bg-zinc-100 border-zinc-200",
            }}
            activeProps={{
              className: "bg-zinc-200",
            }}
          >
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

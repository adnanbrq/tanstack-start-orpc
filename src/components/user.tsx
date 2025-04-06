import { useQuery } from "@tanstack/react-query";
import { orpcQueryUtils } from "~/shared/shared-orpc-client";

export function User({ id }: { id: string }) {
  const q = useQuery(orpcQueryUtils.users.get.queryOptions({ input: { id } }));

  return (
    <div>
      <p>ID: {q.data?.id}</p>
      <p>Name: {q.data?.name}</p>
    </div>
  );
}

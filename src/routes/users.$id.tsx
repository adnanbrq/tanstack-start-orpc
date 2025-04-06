import { createFileRoute, Outlet } from "@tanstack/react-router";
import { orpcQueryUtils } from "~/shared/shared-orpc-client";

export const Route = createFileRoute("/users/$id")({
  component: RouteComponent,
  loader: async ({ context, params }) => {
    await context.queryClient.ensureQueryData(
      orpcQueryUtils.users.get.queryOptions({ input: params })
    );
  },
});

function RouteComponent() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}

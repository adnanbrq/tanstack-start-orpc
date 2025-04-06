import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <h3 className="text-md font-medium">Users</h3>
      <p className="text-sm text-zinc-500">Select a user</p>
    </div>
  );
}

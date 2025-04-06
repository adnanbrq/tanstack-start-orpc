import { createFileRoute, Link } from "@tanstack/react-router";
import { User } from "~/components/user";

export const Route = createFileRoute("/users/$id/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <div className="flex flex-col space-y-4">
      <Link
        to="/users"
        className="bg-black rounded-full h-12 w-12 text-white text-xs font-medium flex items-center justify-center"
      >
        Back
      </Link>

      <User id={id} />
    </div>
  );
}

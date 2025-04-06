import { dehydrate, hydrate } from '@tanstack/react-query';
import { routerWithQueryClient } from '@tanstack/react-router-with-query';
import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { getQueryClient } from './shared/shared-query-client';

export function createRouter() {
  const queryClient = getQueryClient();
  const router = createTanStackRouter({
    routeTree,
    defaultPreload: false,
    scrollRestoration: false,
    context: { queryClient },
    dehydrate: () => ({ queryClientState: dehydrate(queryClient) }),
    hydrate: (dehydrated) => hydrate(queryClient, dehydrated.queryClientState),
  });

  return routerWithQueryClient(router, queryClient);
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

import { IoMoonOutline } from 'react-icons/io5';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="h-screen min-h-screen w-full max-w-full overflow-auto bg-light-gray">
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <p>Where in the world?</p>
        <button className="flex items-center gap-2 text-sm">
          <IoMoonOutline /> Dark Mode
        </button>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});

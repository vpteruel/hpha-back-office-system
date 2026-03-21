import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { AdminLayout } from "./components/AdminLayout";
import { DashboardContent } from "./components/DashboardContent";
import { LoginPage } from "./pages/auth/LoginPage";

// Root route (contains no UI wrapper)
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Admin layout wrapper
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "admin",
  component: () => (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  ),
});

// Login
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

// Dashboard
const indexRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/",
  component: DashboardContent,
});

// Create route tree
const adminRouteTree = adminRoute.addChildren([indexRoute]);

const routeTree = rootRoute.addChildren([loginRoute, adminRouteTree]);

// Create and export router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

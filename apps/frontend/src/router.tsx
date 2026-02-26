import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { DashboardContent } from "./components/DashboardContent";
import { ModernAdminLayout } from "./components/ModernAdminLayout";
import { CateringDetail } from "./pages/forms/catering/CateringDetail";
import { CateringForm } from "./pages/forms/catering/CateringForm";
import { CateringList } from "./pages/forms/catering/CateringList";
import { PersonalExpenseDetail } from "./pages/forms/personal-expense/PersonalExpenseDetail";
import { PersonalExpenseForm } from "./pages/forms/personal-expense/PersonalExpenseForm";
import { PersonalExpenseList } from "./pages/forms/personal-expense/PersonalExpenseList";
import { PurchaseDetail } from "./pages/forms/purchase/PurchaseDetail";
import { PurchaseForm } from "./pages/forms/purchase/PurchaseForm";
import { PurchaseList } from "./pages/forms/purchase/PurchaseList";
import { SurveillanceDetail } from "./pages/forms/surveillance/SurveillanceDetail";
import { SurveillanceForm } from "./pages/forms/surveillance/SurveillanceForm";
import { SurveillanceList } from "./pages/forms/surveillance/SurveillanceList";
import { TravelExpenseDetail } from "./pages/forms/travel-expense/TravelExpenseDetail";
import { TravelExpenseForm } from "./pages/forms/travel-expense/TravelExpenseForm";
import { TravelExpenseList } from "./pages/forms/travel-expense/TravelExpenseList";
import { SettingsPage } from "./pages/settings/SettingsPage";
import { UsersPage } from "./pages/users/UsersPage";

// Root route with AdminLayout
const rootRoute = createRootRoute({
  component: () => (
    <ModernAdminLayout>
      <Outlet />
    </ModernAdminLayout>
  ),
});

// Dashboard
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: DashboardContent,
});

// Users
const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: UsersPage,
});

// Catering routes
const cateringRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/catering",
  component: CateringList,
});

const cateringNewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/catering/new",
  component: CateringForm,
});

const cateringDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/catering/$id",
  component: CateringDetail,
});

// Surveillance routes
const surveillanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/surveillance",
  component: SurveillanceList,
});

const surveillanceNewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/surveillance/new",
  component: SurveillanceForm,
});

const surveillanceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/surveillance/$id",
  component: SurveillanceDetail,
});

// Purchase routes
const purchaseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/purchase",
  component: PurchaseList,
});

const purchaseNewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/purchase/new",
  component: PurchaseForm,
});

const purchaseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/purchase/$id",
  component: PurchaseDetail,
});

// Personal Expense routes
const personalExpenseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/personal-expense",
  component: PersonalExpenseList,
});

const personalExpenseNewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/personal-expense/new",
  component: PersonalExpenseForm,
});

const personalExpenseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/personal-expense/$id",
  component: PersonalExpenseDetail,
});

// Travel Expense routes
const travelExpenseRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/travel-expense",
  component: TravelExpenseList,
});

const travelExpenseNewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/travel-expense/new",
  component: TravelExpenseForm,
});

const travelExpenseDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms/travel-expense/$id",
  component: TravelExpenseDetail,
});

// Settings
const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  usersRoute,
  cateringRoute,
  cateringNewRoute,
  cateringDetailRoute,
  surveillanceRoute,
  surveillanceNewRoute,
  surveillanceDetailRoute,
  purchaseRoute,
  purchaseNewRoute,
  purchaseDetailRoute,
  personalExpenseRoute,
  personalExpenseNewRoute,
  personalExpenseDetailRoute,
  travelExpenseRoute,
  travelExpenseNewRoute,
  travelExpenseDetailRoute,
  settingsRoute,
]);

// Create and export router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

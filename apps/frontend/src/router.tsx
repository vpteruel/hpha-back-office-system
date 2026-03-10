import {
    createRootRoute,
    createRoute,
    createRouter,
    Outlet,
} from "@tanstack/react-router";
import { DashboardContent } from "./components/DashboardContent";
import { ModernAdminLayout } from "./components/ModernAdminLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { AutomationDetail } from "./pages/automations/AutomationDetail";
import { AutomationList } from "./pages/automations/AutomationList";
import { ClosedPositionDetails } from "./pages/automations/closed-positions/ClosedPositionDetails";
import { ClosedPositionsList } from "./pages/automations/closed-positions/ClosedPositionsList";
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

// Root route (contains no UI wrapper)
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Admin layout wrapper
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "admin",
  component: () => (
    <ModernAdminLayout>
      <Outlet />
    </ModernAdminLayout>
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

// Automations
const automationsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/automations",
  component: AutomationList,
});

const automationDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/automations/$id",
  component: AutomationDetail,
});

const closedPositionsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/automations/closed-positions",
  component: ClosedPositionsList,
});

const closedPositionDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/automations/closed-positions/$id",
  component: ClosedPositionDetails,
});

// Users
const usersRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/users",
  component: UsersPage,
});

// Catering routes
const cateringRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/catering",
  component: CateringList,
});

const cateringNewRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/catering/new",
  component: CateringForm,
});

const cateringDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/catering/$id",
  component: CateringDetail,
});

// Surveillance routes
const surveillanceRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/surveillance",
  component: SurveillanceList,
});

const surveillanceNewRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/surveillance/new",
  component: SurveillanceForm,
});

const surveillanceDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/surveillance/$id",
  component: SurveillanceDetail,
});

// Purchase routes
const purchaseRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/purchase",
  component: PurchaseList,
});

const purchaseNewRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/purchase/new",
  component: PurchaseForm,
});

const purchaseDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/purchase/$id",
  component: PurchaseDetail,
});

// Personal Expense routes
const personalExpenseRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/personal-expense",
  component: PersonalExpenseList,
});

const personalExpenseNewRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/personal-expense/new",
  component: PersonalExpenseForm,
});

const personalExpenseDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/personal-expense/$id",
  component: PersonalExpenseDetail,
});

// Travel Expense routes
const travelExpenseRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/travel-expense",
  component: TravelExpenseList,
});

const travelExpenseNewRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/travel-expense/new",
  component: TravelExpenseForm,
});

const travelExpenseDetailRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/forms/travel-expense/$id",
  component: TravelExpenseDetail,
});

// Settings
const settingsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/settings",
  component: SettingsPage,
});

// Create route tree
const adminRouteTree = adminRoute.addChildren([
  indexRoute,
  automationsRoute,
  automationDetailRoute,
  closedPositionsRoute,
  closedPositionDetailRoute,
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

const routeTree = rootRoute.addChildren([
  loginRoute,
  adminRouteTree
]);

// Create and export router
export const router = createRouter({ routeTree });

// Register router for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

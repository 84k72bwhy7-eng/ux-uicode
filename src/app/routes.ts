import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { LoginPage } from "./components/LoginPage";
import { DashboardPage } from "./components/dashboard";
import { ClientsPage } from "./components/clients";
import { SalesPage } from "./components/sales";
import { Payments } from "./components/Payments";
import { UsersPage } from "./components/UsersPage";
import { ActivityHistory } from "./components/ActivityHistory";
import { SettingsPage } from "./components/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "clients", Component: ClientsPage },
      { path: "sales", Component: SalesPage },
      { path: "payments", Component: Payments },
      { path: "users", Component: UsersPage },
      { path: "activity", Component: ActivityHistory },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);

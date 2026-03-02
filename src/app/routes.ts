import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { LoginPage } from "./components/LoginPage";
import { Dashboard } from "./components/Dashboard";
import { Clients } from "./components/Clients";
import { Sales } from "./components/Sales";
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
      { index: true, Component: Dashboard },
      { path: "clients", Component: Clients },
      { path: "sales", Component: Sales },
      { path: "payments", Component: Payments },
      { path: "users", Component: UsersPage },
      { path: "activity", Component: ActivityHistory },
      { path: "settings", Component: SettingsPage },
    ],
  },
]);

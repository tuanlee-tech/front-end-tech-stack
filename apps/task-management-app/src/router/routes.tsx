import { createRootRoute, createRoute, createRouter, Outlet } from "@tanstack/react-router";
import { lazy } from "react";
import { AuthProvider } from '../contexts/AuthContext';

// Sử dụng lazy() để tải các component một cách bất đồng bộ
const Home = lazy(() => import("../pages/Home"));
const Tasks = lazy(() => import("../pages/Tasks"));
const TaskDetail = lazy(() => import("../pages/TaskDetail"));

const rootRoute = createRootRoute({
  component: () => (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const tasksRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tasks',
  component: Tasks,
});

const taskDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tasks/$id',
  component: TaskDetail,
});

const routeTree = rootRoute.addChildren([homeRoute, tasksRoute, taskDetailRoute]);

export const router = createRouter({ routeTree });
// React is used in JSX transformations even when not explicitly referenced
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Report } from "./pages/Report";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/report",
    element: <Report />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

// Router provider with Query client
export function Routes() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

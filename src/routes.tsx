// React is used in JSX transformations even when not explicitly referenced
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Report } from "./pages/Report";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { Layout } from "./components/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    },
  },
});

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/report",
    element: (
      <Layout>
        <Report />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/privacy-policy",
    element: (
      <Layout>
        <PrivacyPolicy />
      </Layout>
    ),
  },
  {
    path: "/terms-of-service",
    element: (
      <Layout>
        <TermsOfService />
      </Layout>
    ),
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

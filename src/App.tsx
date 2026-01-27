import ErrorPage from "./pages/ErrorPage";
import { Routes } from "./routes";
import { ErrorBoundary } from "react-error-boundary";

export function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Routes />
    </ErrorBoundary>
  );
}

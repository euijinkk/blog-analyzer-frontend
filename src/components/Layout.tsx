import { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Footer } from "./Footer";
import { usePageView } from "../analytics/amplitude";
import ErrorPage from "../pages/ErrorPage";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  usePageView();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans">
      <main className="flex-1">
        <ErrorBoundary fallback={<ErrorPage />}>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

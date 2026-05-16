import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/lib/auth";
import { useEffect, type ReactNode } from "react";

import LandingPage from "@/pages/landing";
import LoginPage from "@/pages/auth/login";
import SignupPage from "@/pages/auth/signup";
import DashboardPage from "@/pages/dashboard";
import ProjectsPage from "@/pages/projects/index";
import ProjectDetailPage from "@/pages/projects/detail";
import UploadPage from "@/pages/upload";
import ExportsPage from "@/pages/exports";
import SettingsPage from "@/pages/settings";
import PricingPage from "@/pages/pricing";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
    },
  },
});

function RequireAuth({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) return null;
  return <>{children}</>;
}

function RedirectIfAuthed({ children }: { children: ReactNode }) {
  const { user, isLoading } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLoading && user) {
      navigate("/dashboard");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (user) return null;
  return <>{children}</>;
}

function AppRouter() {
  return (
    <Switch>
      <Route path="/">
        <RedirectIfAuthed>
          <LandingPage />
        </RedirectIfAuthed>
      </Route>
      <Route path="/login">
        <RedirectIfAuthed>
          <LoginPage />
        </RedirectIfAuthed>
      </Route>
      <Route path="/signup">
        <RedirectIfAuthed>
          <SignupPage />
        </RedirectIfAuthed>
      </Route>
      <Route path="/dashboard">
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      </Route>
      <Route path="/upload">
        <RequireAuth>
          <UploadPage />
        </RequireAuth>
      </Route>
      <Route path="/projects">
        <RequireAuth>
          <ProjectsPage />
        </RequireAuth>
      </Route>
      <Route path="/projects/:projectId">
        <RequireAuth>
          <ProjectDetailPage />
        </RequireAuth>
      </Route>
      <Route path="/exports">
        <RequireAuth>
          <ExportsPage />
        </RequireAuth>
      </Route>
      <Route path="/settings">
        <RequireAuth>
          <SettingsPage />
        </RequireAuth>
      </Route>
      <Route path="/pricing">
        <RequireAuth>
          <PricingPage />
        </RequireAuth>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <AppRouter />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

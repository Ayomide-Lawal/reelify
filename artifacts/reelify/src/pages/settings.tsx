import { useQuery } from "@tanstack/react-query";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { getAuthHeaders } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Crown, CreditCard, User, Shield } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;
function getApiUrl(path: string) { return `${BASE_URL}api${path}`; }

export default function SettingsPage() {
  const { user, logout } = useAuth();
  const { toast } = useToast();

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch(getApiUrl("/auth/profile"), { headers: getAuthHeaders() });
      if (!res.ok) throw new Error("Failed to load profile");
      return res.json();
    },
  });

  const handleUpgrade = async () => {
    const res = await fetch(getApiUrl("/billing/checkout"), {
      method: "POST",
      headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        successUrl: window.location.origin + "/dashboard?upgraded=true",
        cancelUrl: window.location.origin + "/settings",
      }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else toast({ title: "Error", description: "Could not start checkout", variant: "destructive" });
  };

  const handleBillingPortal = async () => {
    const res = await fetch(getApiUrl("/billing/portal"), {
      method: "POST",
      headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({ returnUrl: window.location.origin + "/settings" }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else toast({ title: "Error", description: "Could not open billing portal", variant: "destructive" });
  };

  const plan = profile?.plan ?? "free";
  const exportsUsed = profile?.exportsUsedThisMonth ?? 0;
  const exportLimit = plan === "free" ? 3 : null;

  return (
    <AppShell>
      <div className="p-8 max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground text-sm mt-0.5">Manage your account and subscription</p>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <User size={18} className="text-muted-foreground" />
              <h2 className="font-semibold">Account</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Email</span>
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Name</span>
                <span>{user?.fullName ?? "Not set"}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">User ID</span>
                <span className="font-mono text-xs text-muted-foreground">{user?.id?.slice(0, 16)}...</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <Crown size={18} className="text-yellow-400" />
              <h2 className="font-semibold">Plan</h2>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium">
                  {plan === "pro" ? "Pro" : "Free"} Plan
                </p>
                <p className="text-sm text-muted-foreground">
                  {exportLimit != null
                    ? `${exportsUsed}/${exportLimit} exports used this month`
                    : "Unlimited exports"}
                </p>
              </div>
              {plan !== "pro" && (
                <Button onClick={handleUpgrade} className="gap-2">
                  <Crown size={14} /> Upgrade to Pro
                </Button>
              )}
            </div>
            {plan === "free" && exportLimit != null && (
              <div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${Math.min(100, (exportsUsed / exportLimit) * 100)}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {Math.max(0, exportLimit - exportsUsed)} exports remaining this month
                </p>
              </div>
            )}
            {plan === "pro" && (
              <Button variant="outline" size="sm" onClick={handleBillingPortal} className="gap-2">
                <CreditCard size={14} /> Manage billing
              </Button>
            )}
          </div>

          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={18} className="text-muted-foreground" />
              <h2 className="font-semibold">Privacy & Security</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Your data is stored securely and never shared with third parties.
            </p>
            <Button
              variant="outline"
              className="text-destructive border-destructive/30 hover:bg-destructive/10"
              onClick={() => {
                if (confirm("Log out of Reelify?")) logout();
              }}
            >
              Log out
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}

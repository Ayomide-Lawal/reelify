import { useLocation } from "wouter";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { getAuthHeaders } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Check, Crown, Zap } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;
function getApiUrl(path: string) { return `${BASE_URL}api${path}`; }

const FREE_FEATURES = [
  "3 exports per month",
  "All 4 platforms",
  "AI captions included",
  "Basic platform optimization",
];

const PRO_FEATURES = [
  "Unlimited exports",
  "All 4 platforms",
  "AI captions included",
  "Advanced platform optimization",
  "Priority processing",
  "Export history",
];

export default function PricingPage() {
  const { user } = useAuth();
  const [, navigate] = useLocation();
  const { toast } = useToast();

  const handleUpgrade = async () => {
    if (!user) {
      navigate("/signup");
      return;
    }
    const res = await fetch(getApiUrl("/billing/checkout"), {
      method: "POST",
      headers: { ...getAuthHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        successUrl: window.location.origin + "/dashboard?upgraded=true",
        cancelUrl: window.location.origin + "/pricing",
      }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
    else toast({ title: "Error", description: "Could not start checkout", variant: "destructive" });
  };

  return (
    <AppShell>
      <div className="p-8 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">Simple, creator-friendly pricing</h1>
          <p className="text-muted-foreground">Start free. Upgrade when you're ready to scale.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={18} className="text-muted-foreground" />
              <h2 className="font-semibold text-lg">Free</h2>
            </div>
            <div className="mb-5">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <ul className="space-y-2 mb-6">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-muted-foreground flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full" onClick={() => navigate("/signup")}>
              Get started free
            </Button>
          </div>

          <div className="bg-primary/5 border-2 border-primary rounded-2xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most popular
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Crown size={18} className="text-yellow-400" />
              <h2 className="font-semibold text-lg">Pro</h2>
            </div>
            <div className="mb-5">
              <span className="text-4xl font-bold">$12</span>
              <span className="text-muted-foreground text-sm">/month</span>
            </div>
            <ul className="space-y-2 mb-6">
              {PRO_FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={14} className="text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Button className="w-full gap-2" onClick={handleUpgrade}>
              <Crown size={14} /> Upgrade to Pro
            </Button>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          Prices in USD. Cancel anytime. No hidden fees.
        </p>
      </div>
    </AppShell>
  );
}

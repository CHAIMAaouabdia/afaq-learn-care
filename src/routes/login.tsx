import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Mail, Lock, ArrowLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { useAuth, dashboardPath, type Role } from "@/lib/auth";
import { LogoMark } from "@/components/site/Logo";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "تسجيل الدخول — آفاق" }] }),
  component: LoginPage,
});

const quickRoles: { id: Role; t: string; email: string }[] = [
  { id: "parent", t: "ولي أمر", email: "parent@afaq.dz" },
  { id: "specialist", t: "مختص", email: "specialist@afaq.dz" },
  { id: "admin", t: "إدارة", email: "admin@afaq.dz" },
];

function LoginPage() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) return setError("يرجى إدخال البريد وكلمة المرور.");
    setLoading(true);
    try {
      const u = await login(email, password);
      nav({ to: dashboardPath(u.role) });
    } finally {
      setLoading(false);
    }
  }

  async function quick(role: Role, em: string) {
    setLoading(true);
    const u = await login(em, "demo", role);
    nav({ to: dashboardPath(u.role) });
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary via-accent to-mint p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <LogoMark size={48} tone="light" />
            <span className="text-xl font-bold">آفاق</span>
          </Link>
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">مرحباً بعودتك. متابعة طفلك تنتظرك.</h1>
            <p className="mt-4 max-w-md text-white/85">
              ادخل إلى لوحة التحكم لمتابعة آخر تقارير الجلسات، الرسائل من المختصين، والتمارين المنزلية.
            </p>
          </div>
          <div className="text-xs text-white/70">© 2026 آفاق — جميع الحقوق محفوظة</div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center justify-between lg:hidden">
              <Link to="/" className="inline-flex items-center gap-2 text-primary">
                <ArrowLeft size={16} /> الرئيسية
              </Link>
              <LogoMark size={40} />
            </div>
            <h2 className="text-3xl font-extrabold">تسجيل الدخول</h2>
            <p className="mt-2 text-sm text-muted-foreground">أدخل بياناتك للدخول إلى حسابك.</p>

            <form onSubmit={submit} className="mt-8 space-y-5">
              <Field icon={Mail} type="email" label="البريد الإلكتروني" placeholder="email@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)} />
              <Field icon={Lock} type="password" label="كلمة المرور" placeholder="••••••••"
                value={password} onChange={(e) => setPassword(e.target.value)} />

              {error && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">{error}</p>}

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="size-4 accent-[var(--primary)]" /> تذكّرني
                </label>
                <Link to="/forgot-password" className="font-semibold text-primary hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <button
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-bold text-primary-foreground shadow-lg shadow-primary/25 disabled:opacity-60"
              >
                {loading && <Loader2 size={16} className="animate-spin" />}
                دخول
              </button>
            </form>

            <div className="mt-8">
              <div className="mb-3 text-center text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                دخول سريع تجريبي
              </div>
              <div className="grid grid-cols-3 gap-2">
                {quickRoles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => quick(r.id, r.email)}
                    className="rounded-xl border border-border bg-card px-3 py-2.5 text-xs font-bold transition-colors hover:border-primary hover:bg-primary-soft"
                  >
                    {r.t}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link to="/register" className="font-bold text-primary hover:underline">إنشاء حساب جديد</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  icon: Icon, label, ...rest
}: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="relative">
        <Icon size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          {...rest}
          className="w-full rounded-xl border border-input bg-secondary/50 py-3 pr-11 pl-4 text-sm outline-none transition-all placeholder:text-muted-foreground/70 focus:bg-card focus:ring-2 focus:ring-primary/40"
        />
      </div>
    </div>
  );
}

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { User, Mail, Lock, Hash, ArrowLeft, Loader2, Users, Stethoscope, Shield } from "lucide-react";
import { useAuth, dashboardPath, type Role } from "@/lib/auth";
import { LogoMark } from "@/components/site/Logo";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "إنشاء حساب — آفاق" }] }),
  component: RegisterPage,
});

const roles: { id: Role; t: string; d: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
  { id: "parent", t: "ولي أمر", d: "متابعة تطور طفلي", icon: Users },
  { id: "specialist", t: "مختص", d: "إدارة الجلسات والتقارير", icon: Stethoscope },
  { id: "admin", t: "إدارة المركز", d: "إشراف ومتابعة شاملة", icon: Shield },
];

function RegisterPage() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [role, setRole] = useState<Role>("parent");
  const [form, setForm] = useState({ first: "", last: "", email: "", password: "", code: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.first || !form.email || !form.password) return setError("يرجى تعبئة الحقول الإلزامية.");
    setLoading(true);
    try {
      const u = await register({ name: `${form.first} ${form.last}`.trim(), email: form.email, role });
      nav({ to: dashboardPath(u.role) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={16} /> العودة للرئيسية
          </Link>
          <LogoMark size={40} />
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-7 shadow-sm md:p-10">
          <h1 className="text-3xl font-extrabold">إنشاء حساب جديد</h1>
          <p className="mt-2 text-sm text-muted-foreground">انضم إلى منصة آفاق لمتابعة أفضل وأكثر دقة.</p>

          <div className="mt-8">
            <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-muted-foreground">نوع الحساب</label>
            <div className="grid gap-3 md:grid-cols-3">
              {roles.map((r) => {
                const active = role === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRole(r.id)}
                    className={`flex flex-col gap-2 rounded-2xl border p-4 text-right transition-all ${
                      active
                        ? "border-primary bg-primary-soft shadow-sm ring-2 ring-primary/20"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <span className={`grid size-9 place-items-center rounded-xl ${active ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground/70"}`}>
                      <r.icon size={16} />
                    </span>
                    <div className="font-bold">{r.t}</div>
                    <div className="text-[11px] text-muted-foreground">{r.d}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={submit} className="mt-8 grid gap-5 md:grid-cols-2">
            <Field icon={User} label="الاسم" placeholder="اسمك" value={form.first} onChange={set("first")} />
            <Field icon={User} label="اللقب" placeholder="لقبك" value={form.last} onChange={set("last")} />
            <div className="md:col-span-2">
              <Field icon={Mail} type="email" label="البريد الإلكتروني" placeholder="email@example.com" value={form.email} onChange={set("email")} />
            </div>
            <Field icon={Lock} type="password" label="كلمة المرور" placeholder="••••••••" value={form.password} onChange={set("password")} />
            <Field icon={Hash} label="رقم التسجيل بالمركز (اختياري)" placeholder="AFQ-2026-..." value={form.code} onChange={set("code")} />

            {error && (
              <p className="md:col-span-2 rounded-lg bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">{error}</p>
            )}

            <button
              disabled={loading}
              className="md:col-span-2 mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-bold text-primary-foreground shadow-lg shadow-primary/25 disabled:opacity-60"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              إنشاء الحساب
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            لديك حساب؟ <Link to="/login" className="font-bold text-primary hover:underline">تسجيل الدخول</Link>
          </p>
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

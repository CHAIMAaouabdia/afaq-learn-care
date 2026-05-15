import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { User, Mail, Lock, Hash, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "إنشاء حساب — آفاق" }] }),
  component: RegisterPage,
});

const roles = [
  { id: "parent", t: "ولي أمر", d: "متابعة تطور طفلي" },
  { id: "specialist", t: "مختص", d: "إدارة جلسات وتقارير" },
  { id: "admin", t: "إدارة", d: "إدارة المركز" },
];

function RegisterPage() {
  const [role, setRole] = useState("parent");
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <Link to="/" className="inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={16} /> العودة للرئيسية
        </Link>
        <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <h1 className="text-3xl font-extrabold">إنشاء حساب جديد</h1>
          <p className="mt-2 text-sm text-muted-foreground">انضم إلى منصة آفاق لمتابعة أفضل.</p>

          <div className="mt-8">
            <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">نوع الحساب</label>
            <div className="grid gap-3 md:grid-cols-3">
              {roles.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className={`rounded-2xl border p-4 text-right transition-all ${
                    role === r.id
                      ? "border-primary bg-primary-soft ring-soft"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div className="font-bold">{r.t}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.d}</div>
                </button>
              ))}
            </div>
          </div>

          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <Field icon={User} label="الاسم" placeholder="اسمك" />
            <Field icon={User} label="اللقب" placeholder="لقبك" />
            <div className="md:col-span-2"><Field icon={Mail} type="email" label="البريد الإلكتروني" placeholder="email@example.com" /></div>
            <Field icon={Lock} type="password" label="كلمة المرور" placeholder="••••••••" />
            <Field icon={Hash} label="رقم التسجيل بالمركز" placeholder="AFQ-2026-..." />
            <button className="md:col-span-2 mt-2 w-full rounded-2xl bg-primary py-4 font-bold text-primary-foreground shadow-lg shadow-primary/25">
              إنشاء الحساب
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            لديك حساب؟{" "}
            <Link to="/login" className="font-bold text-primary hover:underline">تسجيل الدخول</Link>
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
          className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 pe-11 text-sm outline-none transition-all focus:bg-card focus:ring-2 focus:ring-primary/40"
        />
      </div>
    </div>
  );
}

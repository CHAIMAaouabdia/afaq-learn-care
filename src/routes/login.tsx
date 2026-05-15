import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "تسجيل الدخول — آفاق" }] }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary via-accent to-mint p-12 text-white lg:flex lg:flex-col lg:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl bg-white/15 backdrop-blur text-xl font-bold">آ</div>
            <span className="text-xl font-bold">آفاق</span>
          </Link>
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              مرحباً بعودتك. متابعة طفلك تنتظرك.
            </h1>
            <p className="mt-4 max-w-md text-white/80">
              ادخل إلى لوحة التحكم لتطلع على آخر تقارير الجلسات، الرسائل من المختصين، والتمارين المنزلية.
            </p>
          </div>
          <div className="text-xs text-white/60">© 2026 آفاق — جميع الحقوق محفوظة</div>
        </div>

        <div className="flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <Link to="/" className="inline-flex items-center gap-2 text-primary">
                <ArrowLeft size={16} /> العودة للرئيسية
              </Link>
            </div>
            <h2 className="text-3xl font-extrabold">تسجيل الدخول</h2>
            <p className="mt-2 text-sm text-muted-foreground">أدخل بياناتك للدخول إلى حسابك.</p>

            <form className="mt-8 space-y-4">
              <Input icon={Mail} type="email" label="البريد الإلكتروني" placeholder="email@example.com" />
              <Input icon={Lock} type="password" label="كلمة المرور" placeholder="••••••••" />
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="size-4 accent-[var(--primary)]" /> تذكّرني
                </label>
                <Link to="/forgot-password" className="text-primary font-semibold hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <button className="mt-2 w-full rounded-2xl bg-primary py-4 font-bold text-primary-foreground shadow-lg shadow-primary/25">
                دخول
              </button>
            </form>

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

function Input({
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

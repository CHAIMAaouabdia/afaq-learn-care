import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "استعادة كلمة المرور — آفاق" }] }),
  component: () => (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-md px-6 py-16">
        <Link to="/login" className="inline-flex items-center gap-2 text-primary">
          <ArrowLeft size={16} /> العودة لتسجيل الدخول
        </Link>
        <div className="mt-8 rounded-3xl border border-border bg-card p-8">
          <h1 className="text-2xl font-extrabold">نسيت كلمة المرور؟</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            أدخل بريدك الإلكتروني وسنرسل لك رابط استعادة كلمة المرور.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">البريد الإلكتروني</label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 pe-11 text-sm outline-none focus:bg-card focus:ring-2 focus:ring-primary/40"
                />
              </div>
            </div>
            <button className="w-full rounded-2xl bg-primary py-4 font-bold text-primary-foreground shadow-lg shadow-primary/25">
              إرسال رابط الاستعادة
            </button>
          </form>
        </div>
      </div>
    </div>
  ),
});

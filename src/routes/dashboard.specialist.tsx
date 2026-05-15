import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Calendar, FileText, Users, ClipboardList, Plus, Send } from "lucide-react";

export const Route = createFileRoute("/dashboard/specialist")({
  head: () => ({ meta: [{ title: "لوحة المختص — آفاق" }] }),
  component: SpecialistDashboard,
});

function SpecialistDashboard() {
  return (
    <DashboardShell role="specialist" title="مرحباً د. ليلى — جدول اليوم">
      <div className="grid gap-5 md:grid-cols-4">
        <Card icon={Users} label="الأطفال المتابعون" value="24" />
        <Card icon={Calendar} label="جلسات اليوم" value="6" />
        <Card icon={ClipboardList} label="تقارير معلقة" value="3" />
        <Card icon={FileText} label="ملفات للمراجعة" value="2" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold">جدول اليوم</h3>
            <button className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-bold text-primary-foreground">
              <Plus size={14}/> جلسة جديدة
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-right text-sm">
              <thead className="bg-secondary/50 text-xs">
                <tr>
                  <th className="p-3">الوقت</th>
                  <th className="p-3">الطفل</th>
                  <th className="p-3">نوع الجلسة</th>
                  <th className="p-3">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "09:00", n: "أحمد بن علي", k: "أرطوفونيا", s: "مكتمل", c: "bg-mint-soft text-mint" },
                  { t: "10:00", n: "سارة خليفي", k: "تقييم أولي", s: "جاري", c: "bg-amber-100 text-amber-700" },
                  { t: "11:30", n: "ياسين قارة", k: "متابعة", s: "قادم", c: "bg-primary-soft text-primary" },
                  { t: "13:30", n: "ريم سعيد", k: "تأهيل", s: "قادم", c: "bg-primary-soft text-primary" },
                ].map((r) => (
                  <tr key={r.t} className="border-t border-border">
                    <td className="p-3 font-bold">{r.t}</td>
                    <td className="p-3">{r.n}</td>
                    <td className="p-3 text-muted-foreground">{r.k}</td>
                    <td className="p-3"><span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${r.c}`}>{r.s}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-4 font-bold">ملاحظة سريعة</h3>
          <textarea
            rows={6}
            placeholder="مثلاً: أظهر الطفل تحسناً في..."
            className="w-full rounded-xl border border-input bg-secondary/40 p-3 text-sm outline-none focus:bg-card focus:ring-2 focus:ring-primary/40"
          />
          <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground">
            <Send size={14}/> حفظ الملاحظة
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card p-6">
        <h3 className="mb-4 font-bold">الأطفال المتابعون</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {["أحمد بن علي", "سارة خليفي", "ياسين قارة", "ريم سعيد", "محمد أمين", "نور الهدى"].map((n) => (
            <div key={n} className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 p-4">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-accent text-white font-bold">{n[0]}</div>
                <div>
                  <div className="text-sm font-bold">{n}</div>
                  <div className="text-[11px] text-muted-foreground">آخر جلسة منذ يومين</div>
                </div>
              </div>
              <button className="rounded-lg bg-card px-3 py-1.5 text-xs font-bold text-primary">عرض الملف</button>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}

function Card({ icon: Icon, label, value }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5">
      <div className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary"><Icon size={18}/></div>
      <div className="mt-4 text-3xl font-black">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { Users, Calendar, Crown, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/dashboard/admin")({
  head: () => ({ meta: [{ title: "لوحة الإدارة — آفاق" }] }),
  component: AdminDashboard,
});

const monthly = [
  { m: "جانفي", a: 38, p: 18 }, { m: "فيفري", a: 45, p: 22 },
  { m: "مارس", a: 52, p: 28 }, { m: "أفريل", a: 60, p: 31 },
  { m: "ماي", a: 70, p: 38 }, { m: "جوان", a: 84, p: 47 },
];
const types = [
  { name: "أرطوفونيا", value: 40, c: "oklch(0.62 0.13 248)" },
  { name: "نفساني", value: 25, c: "oklch(0.66 0.14 295)" },
  { name: "تربوي", value: 20, c: "oklch(0.72 0.13 165)" },
  { name: "أعصاب", value: 15, c: "oklch(0.78 0.14 75)" },
];

function AdminDashboard() {
  return (
    <DashboardShell role="admin" title="نظرة عامة على نشاط المركز">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <KPI icon={Users} label="إجمالي المستخدمين" value="1,284" delta="+12%" />
        <KPI icon={Calendar} label="مواعيد هذا الشهر" value="384" delta="+8%" />
        <KPI icon={Crown} label="الاشتراكات المميزة" value="142" delta="+22%" />
        <KPI icon={TrendingUp} label="نسبة الرضا" value="98%" delta="+1%" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-2">
          <h3 className="mb-1 font-bold">المواعيد والاشتراكات</h3>
          <p className="mb-4 text-xs text-muted-foreground">آخر 6 أشهر</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthly}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.012 255)" />
                <XAxis dataKey="m" stroke="oklch(0.52 0.03 255)" fontSize={12}/>
                <YAxis stroke="oklch(0.52 0.03 255)" fontSize={12}/>
                <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.012 255)", borderRadius: "12px" }} />
                <Line type="monotone" dataKey="a" stroke="oklch(0.62 0.13 248)" strokeWidth={3} name="مواعيد" dot={{ r: 4 }} />
                <Line type="monotone" dataKey="p" stroke="oklch(0.66 0.14 295)" strokeWidth={3} name="مميزة" dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-4 font-bold">توزيع الجلسات</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={types} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  {types.map((t) => <Cell key={t.name} fill={t.c} />)}
                </Pie>
                <Legend wrapperStyle={{ fontSize: 11 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-4 font-bold">المواعيد القادمة</h3>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-right text-sm">
              <thead className="bg-secondary/50 text-xs">
                <tr><th className="p-3">الطفل</th><th className="p-3">المختص</th><th className="p-3">التاريخ</th><th className="p-3">الحالة</th></tr>
              </thead>
              <tbody>
                {[
                  ["أحمد ب.", "د. ليلى", "اليوم 14:00", "مؤكد"],
                  ["سارة خ.", "أ. أحمد", "غداً 10:30", "في الانتظار"],
                  ["ياسين ق.", "أ. مريم", "بعد غد 11:00", "مؤكد"],
                ].map((r) => (
                  <tr key={r[0]} className="border-t border-border">
                    <td className="p-3 font-bold">{r[0]}</td>
                    <td className="p-3 text-muted-foreground">{r[1]}</td>
                    <td className="p-3">{r[2]}</td>
                    <td className="p-3"><span className="rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-bold text-primary">{r[3]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-4 font-bold">آخر النشاطات</h3>
          <div className="space-y-3">
            {[
              { t: "تسجيل ولي جديد: أم محمد", c: "bg-primary" },
              { t: "تقرير جديد من أ. أحمد يوسفي", c: "bg-accent" },
              { t: "تجديد عضوية مميزة × 3", c: "bg-mint" },
              { t: "حجز موعد جماعي - 4 أطفال", c: "bg-primary" },
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3 border-b border-border pb-3 last:border-0">
                <div className={`size-2.5 rounded-full ${a.c}`} />
                <div className="text-sm">{a.t}</div>
                <div className="ms-auto text-[11px] text-muted-foreground">منذ {i + 1} ساعة</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function KPI({ icon: Icon, label, value, delta }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string; delta: string }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary"><Icon size={18}/></div>
        <span className="text-xs font-bold text-mint">{delta}</span>
      </div>
      <div className="mt-4 text-3xl font-black">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

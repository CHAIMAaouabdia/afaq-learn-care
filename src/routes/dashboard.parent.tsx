import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { TrendingUp, Calendar, MessageSquare, FileText, BookOpen, Award, Activity } from "lucide-react";

export const Route = createFileRoute("/dashboard/parent")({
  head: () => ({ meta: [{ title: "لوحة ولي الأمر — آفاق" }] }),
  component: ParentDashboard,
});

const progress = [
  { m: "جانفي", v: 30 }, { m: "فيفري", v: 42 }, { m: "مارس", v: 50 },
  { m: "أفريل", v: 58 }, { m: "ماي", v: 65 }, { m: "جوان", v: 75 },
];

const skills = [
  { s: "القراءة", v: 70 }, { s: "الكتابة", v: 60 }, { s: "الحساب", v: 55 },
  { s: "الفهم", v: 75 }, { s: "التواصل", v: 80 }, { s: "التركيز", v: 65 },
];

function ParentDashboard() {
  return (
    <DashboardShell role="parent" title="مرحباً، نظرة على تطور أحمد">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Stat icon={Activity} label="مستوى التقدم العام" value="75%" delta="+12%" color="primary" />
        <Stat icon={Calendar} label="الجلسات هذا الشهر" value="8" delta="+2" color="mint" />
        <Stat icon={FileText} label="تقارير جديدة" value="3" delta="جديد" color="accent" />
        <Stat icon={MessageSquare} label="رسائل غير مقروءة" value="5" delta="" color="primary" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold">تطور الطفل خلال 6 أشهر</h3>
              <p className="text-xs text-muted-foreground">المعدل العام لمؤشرات التعلم</p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-bold text-mint"><TrendingUp size={14}/> +45%</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={progress}>
                <defs>
                  <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="oklch(0.62 0.13 248)" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="oklch(0.62 0.13 248)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.012 255)" />
                <XAxis dataKey="m" stroke="oklch(0.52 0.03 255)" fontSize={12} />
                <YAxis stroke="oklch(0.52 0.03 255)" fontSize={12} />
                <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.012 255)", borderRadius: "12px" }} />
                <Area type="monotone" dataKey="v" stroke="oklch(0.62 0.13 248)" fill="url(#grad1)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-4 font-bold">مهارات الطفل</h3>
          <div className="space-y-3">
            {skills.map((s) => (
              <div key={s.s}>
                <div className="mb-1 flex justify-between text-xs"><span className="font-bold">{s.s}</span><span className="text-muted-foreground">{s.v}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${s.v}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-2">
          <h3 className="mb-4 font-bold">مقارنة المهارات حسب الجلسات</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={skills}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.92 0.012 255)" />
                <XAxis dataKey="s" stroke="oklch(0.52 0.03 255)" fontSize={12} />
                <YAxis stroke="oklch(0.52 0.03 255)" fontSize={12} />
                <Tooltip contentStyle={{ background: "white", border: "1px solid oklch(0.92 0.012 255)", borderRadius: "12px" }} />
                <Bar dataKey="v" fill="oklch(0.66 0.14 295)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-2 font-bold">التركيز اليومي</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart innerRadius="60%" outerRadius="100%" data={[{ name: "focus", value: 78, fill: "oklch(0.72 0.13 165)" }]} startAngle={90} endAngle={-270}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <RadialBar dataKey="value" background cornerRadius={20} />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="-mt-32 text-center">
            <div className="text-3xl font-black text-mint">78%</div>
            <div className="text-xs text-muted-foreground">مستوى ممتاز</div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-4 flex items-center justify-between font-bold">
            <span>ملاحظات المختصة</span>
            <Award size={16} className="text-mint" />
          </h3>
          <div className="space-y-3">
            {[
              { who: "د. ليلى بن منصور", role: "أرطوفونيا", note: "أظهر الطفل تحسناً ملحوظاً في التركيز خلال جلسات القراءة." },
              { who: "أ. أحمد يوسفي", role: "نفساني", note: "التفاعل ممتاز خلال الأنشطة الجماعية." },
            ].map((n) => (
              <div key={n.who} className="rounded-2xl border border-border bg-secondary/40 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-bold">{n.who}</div>
                  <span className="text-[10px] font-bold text-primary">{n.role}</span>
                </div>
                <p className="text-sm text-muted-foreground">{n.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6">
          <h3 className="mb-4 flex items-center justify-between font-bold">
            <span>التمارين المنزلية</span>
            <BookOpen size={16} className="text-primary" />
          </h3>
          <div className="space-y-3">
            {[
              { t: "تمارين القراءة - الأسبوع 12", k: "PDF" },
              { t: "فيديو: مخارج الحروف", k: "فيديو" },
              { t: "نشاط تفاعلي للتركيز", k: "نشاط" },
              { t: "تسجيل صوتي للتدريب", k: "صوت" },
            ].map((e) => (
              <div key={e.t} className="flex items-center justify-between rounded-xl border border-border bg-secondary/30 p-3">
                <div>
                  <div className="text-sm font-bold">{e.t}</div>
                  <div className="text-[11px] text-muted-foreground">{e.k}</div>
                </div>
                <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground">فتح</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function Stat({ icon: Icon, label, value, delta, color }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string; delta?: string; color: "primary" | "mint" | "accent" }) {
  const map = {
    primary: "bg-primary-soft text-primary",
    mint: "bg-mint-soft text-mint",
    accent: "bg-accent-soft text-accent",
  };
  return (
    <div className="rounded-3xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <div className={`grid size-10 place-items-center rounded-xl ${map[color]}`}>
          <Icon size={18} />
        </div>
        {delta && <span className="text-xs font-bold text-mint">{delta}</span>}
      </div>
      <div className="mt-4 text-3xl font-black">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

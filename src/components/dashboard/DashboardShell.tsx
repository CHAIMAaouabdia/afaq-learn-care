import { Link, useLocation } from "@tanstack/react-router";
import { LayoutDashboard, MessageSquare, Calendar, FileText, BookOpen, Settings, LogOut, Bell, Search, Users, BarChart3, ClipboardList, FolderKanban, UserCog } from "lucide-react";

export type NavItem = { to: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }> };

const navByRole: Record<string, NavItem[]> = {
  parent: [
    { to: "/dashboard/parent", label: "نظرة عامة", icon: LayoutDashboard },
    { to: "/dashboard/parent/sessions", label: "الجلسات", icon: Calendar },
    { to: "/dashboard/parent/reports", label: "التقارير", icon: FileText },
    { to: "/dashboard/parent/messages", label: "الرسائل", icon: MessageSquare },
    { to: "/dashboard/parent/exercises", label: "التمارين", icon: BookOpen },
  ],
  specialist: [
    { to: "/dashboard/specialist", label: "نظرة عامة", icon: LayoutDashboard },
    { to: "/dashboard/specialist/children", label: "الأطفال", icon: Users },
    { to: "/dashboard/specialist/sessions", label: "الجلسات", icon: Calendar },
    { to: "/dashboard/specialist/reports", label: "التقارير", icon: ClipboardList },
    { to: "/dashboard/specialist/messages", label: "الرسائل", icon: MessageSquare },
  ],
  admin: [
    { to: "/dashboard/admin", label: "نظرة عامة", icon: LayoutDashboard },
    { to: "/dashboard/admin/users", label: "المستخدمون", icon: UserCog },
    { to: "/dashboard/admin/appointments", label: "المواعيد", icon: Calendar },
    { to: "/dashboard/admin/specialists", label: "المختصون", icon: Users },
    { to: "/dashboard/admin/analytics", label: "التحليلات", icon: BarChart3 },
    { to: "/dashboard/admin/subscriptions", label: "الاشتراكات", icon: FolderKanban },
  ],
};

const titles = { parent: "ولي الأمر", specialist: "المختص", admin: "الإدارة" };

export function DashboardShell({
  role, children, title,
}: { role: "parent" | "specialist" | "admin"; children: React.ReactNode; title: string }) {
  const loc = useLocation();
  const items = navByRole[role];
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="grid lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:border-l lg:border-border lg:bg-card lg:p-5">
          <Link to="/" className="mb-8 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground">آ</div>
            <div>
              <div className="text-base font-bold">آفاق</div>
              <div className="text-[11px] text-muted-foreground">لوحة {titles[role]}</div>
            </div>
          </Link>

          <nav className="space-y-1">
            {items.map((it) => {
              const active = loc.pathname === it.to;
              return (
                <Link key={it.to} to={it.to} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                  active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}>
                  <it.icon size={16} />
                  {it.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-1 pt-6">
            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground hover:bg-secondary">
              <Settings size={16} /> الإعدادات
            </button>
            <Link to="/login" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-destructive hover:bg-destructive/10">
              <LogOut size={16} /> تسجيل الخروج
            </Link>
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-border glass">
            <div className="flex h-16 items-center justify-between gap-4 px-6">
              <div>
                <div className="text-[11px] text-muted-foreground">لوحة {titles[role]}</div>
                <div className="text-base font-bold">{title}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm md:flex">
                  <Search size={14} className="text-muted-foreground" />
                  <input placeholder="بحث..." className="w-56 bg-transparent outline-none" />
                </div>
                <button className="relative grid size-10 place-items-center rounded-xl border border-border bg-card">
                  <Bell size={16} />
                  <span className="absolute -top-1 -left-1 grid size-4 place-items-center rounded-full bg-destructive text-[10px] font-bold text-white">3</span>
                </button>
                <div className="flex items-center gap-2 rounded-xl border border-border bg-card p-1.5 pr-3">
                  <div className="text-xs">
                    <div className="font-bold">أحمد بن علي</div>
                    <div className="text-muted-foreground">{titles[role]}</div>
                  </div>
                  <div className="grid size-8 place-items-center rounded-lg bg-primary text-xs font-bold text-white">أ</div>
                </div>
              </div>
            </div>
          </header>
          <main className="p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

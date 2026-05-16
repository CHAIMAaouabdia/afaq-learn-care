import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { LayoutDashboard, MessageSquare, Calendar, FileText, BookOpen, Settings, LogOut, Bell, Search, Users, BarChart3, ClipboardList, FolderKanban, UserCog } from "lucide-react";
import { useAuth, type Role } from "@/lib/auth";
import { LogoMark } from "@/components/site/Logo";

export type NavItem = { to: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }> };

const navByRole: Record<Role, NavItem[]> = {
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

const titles: Record<Role, string> = { parent: "ولي الأمر", specialist: "المختص", admin: "الإدارة" };

export function DashboardShell({
  role, children, title,
}: { role: Role; children: React.ReactNode; title: string }) {
  const loc = useLocation();
  const nav = useNavigate();
  const { user, ready, logout } = useAuth();
  const items = navByRole[role];

  // Mock auth gate — redirect to login if not signed in or wrong role.
  useEffect(() => {
    if (!ready) return;
    if (!user) nav({ to: "/login" });
    else if (user.role !== role) {
      nav({ to: role === "admin" ? "/dashboard/admin" : role === "specialist" ? "/dashboard/specialist" : "/dashboard/parent" });
    }
  }, [ready, user, role, nav]);

  if (!ready || !user) {
    return <div className="grid min-h-screen place-items-center bg-secondary/30 text-sm text-muted-foreground">جارٍ التحميل…</div>;
  }

  const initial = (user.name?.[0] || "م").toUpperCase();

  function handleLogout() {
    logout();
    nav({ to: "/login" });
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="grid lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="hidden lg:flex lg:flex-col lg:border-l lg:border-border lg:bg-card lg:p-5">
          <Link to="/" className="mb-8 flex items-center gap-3">
            <LogoMark size={40} />
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
            <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-destructive hover:bg-destructive/10">
              <LogOut size={16} /> تسجيل الخروج
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-border glass">
            <div className="flex h-16 items-center justify-between gap-4 px-4 lg:px-6">
              <div className="flex items-center gap-3">
                <Link to="/" className="lg:hidden"><LogoMark size={36} /></Link>
                <div>
                  <div className="text-[11px] text-muted-foreground">لوحة {titles[role]}</div>
                  <div className="text-sm font-bold lg:text-base">{title}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="hidden items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm md:flex">
                  <Search size={14} className="text-muted-foreground" />
                  <input placeholder="بحث..." className="w-44 bg-transparent outline-none xl:w-56" />
                </div>
                <button className="relative grid size-10 place-items-center rounded-xl border border-border bg-card">
                  <Bell size={16} />
                  <span className="absolute -top-1 -left-1 grid size-4 place-items-center rounded-full bg-destructive text-[10px] font-bold text-white">3</span>
                </button>
                <div className="hidden items-center gap-2 rounded-xl border border-border bg-card p-1.5 pr-3 sm:flex">
                  <div className="text-xs">
                    <div className="font-bold">{user.name}</div>
                    <div className="text-muted-foreground">{titles[user.role]}</div>
                  </div>
                  <div className="grid size-8 place-items-center rounded-lg bg-primary text-xs font-bold text-white">{initial}</div>
                </div>
                <button onClick={handleLogout} className="grid size-10 place-items-center rounded-xl border border-border bg-card text-destructive lg:hidden" aria-label="خروج">
                  <LogOut size={16} />
                </button>
              </div>
            </div>
          </header>
          <main className="p-4 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

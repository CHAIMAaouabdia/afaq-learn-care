import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, LayoutDashboard } from "lucide-react";
import { Logo } from "./Logo";
import { useAuth, dashboardPath } from "@/lib/auth";

const links = [
  { to: "/", label: "الرئيسية" },
  { to: "/#services", label: "خدماتنا" },
  { to: "/#team", label: "فريقنا" },
  { to: "/#workflow", label: "كيف نعمل" },
  { to: "/#faq", label: "الأسئلة الشائعة" },
  { to: "/#contact", label: "اتصل بنا" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.to + l.label}
              href={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-primary-soft"
          >
            تسجيل الدخول
          </Link>
          <Link
            to="/booking"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            احجز موعداً
          </Link>
        </div>

        <button
          className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="القائمة"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="space-y-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.to + l.label}
                href={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Link to="/login" className="rounded-xl border border-border px-4 py-2.5 text-center text-sm font-semibold">
                تسجيل الدخول
              </Link>
              <Link to="/booking" className="rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground">
                احجز موعداً
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

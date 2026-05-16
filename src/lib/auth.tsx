import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Role = "parent" | "specialist" | "admin";
export type MockUser = { name: string; email: string; role: Role };

type AuthCtx = {
  user: MockUser | null;
  ready: boolean;
  login: (email: string, password: string, role?: Role) => Promise<MockUser>;
  register: (data: { name: string; email: string; role: Role }) => Promise<MockUser>;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "afaq.auth.user";

function inferRole(email: string): Role {
  const e = email.toLowerCase();
  if (e.includes("admin")) return "admin";
  if (e.includes("spec") || e.includes("doc") || e.includes("med")) return "specialist";
  return "parent";
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  const persist = (u: MockUser | null) => {
    setUser(u);
    if (typeof window !== "undefined") {
      if (u) localStorage.setItem(KEY, JSON.stringify(u));
      else localStorage.removeItem(KEY);
    }
  };

  const login: AuthCtx["login"] = async (email, _password, role) => {
    const u: MockUser = { name: email.split("@")[0] || "مستخدم", email, role: role ?? inferRole(email) };
    persist(u);
    return u;
  };

  const register: AuthCtx["register"] = async ({ name, email, role }) => {
    const u: MockUser = { name: name || email.split("@")[0] || "مستخدم", email, role };
    persist(u);
    return u;
  };

  const logout = () => persist(null);

  return <Ctx.Provider value={{ user, ready, login, register, logout }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useAuth must be used within AuthProvider");
  return c;
}

export const dashboardPath = (role: Role) =>
  role === "admin" ? "/dashboard/admin" : role === "specialist" ? "/dashboard/specialist" : "/dashboard/parent";

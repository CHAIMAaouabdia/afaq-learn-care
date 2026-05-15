import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Send, Paperclip, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard/parent/messages")({
  head: () => ({ meta: [{ title: "الرسائل — آفاق" }] }),
  component: MessagesPage,
});

const conversations = [
  { id: 1, n: "د. ليلى بن منصور", r: "أرطوفونيا", last: "تقرير الجلسة جاهز للاطلاع", time: "10:24", unread: 2, c: "bg-primary" },
  { id: 2, n: "إدارة المركز", r: "إدارة", last: "تذكير بموعد الغد الساعة 11:00", time: "أمس", unread: 1, c: "bg-accent" },
  { id: 3, n: "أ. أحمد يوسفي", r: "نفساني", last: "أحسنتم، تطور رائع هذا الأسبوع", time: "الإثنين", unread: 0, c: "bg-mint" },
];

function MessagesPage() {
  const [active, setActive] = useState(1);
  return (
    <DashboardShell role="parent" title="الرسائل">
      <div className="grid h-[calc(100vh-12rem)] gap-4 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[320px_1fr]">
        {/* Conversations */}
        <div className="border-l border-border">
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-2 rounded-xl bg-secondary px-3 py-2">
              <Search size={14} className="text-muted-foreground" />
              <input placeholder="بحث في المحادثات..." className="w-full bg-transparent text-sm outline-none" />
            </div>
          </div>
          <div className="space-y-1 p-2">
            {conversations.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex w-full items-center gap-3 rounded-xl p-3 text-right transition-colors ${
                  active === c.id ? "bg-primary-soft" : "hover:bg-secondary"
                }`}
              >
                <div className={`grid size-11 shrink-0 place-items-center rounded-2xl text-sm font-bold text-white ${c.c}`}>{c.n[0]}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="truncate text-sm font-bold">{c.n}</div>
                    <div className="text-[10px] text-muted-foreground">{c.time}</div>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="truncate text-xs text-muted-foreground">{c.last}</div>
                    {c.unread > 0 && <span className="grid size-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">{c.unread}</span>}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Conversation */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-primary text-sm font-bold text-white">د</div>
              <div>
                <div className="text-sm font-bold">د. ليلى بن منصور</div>
                <div className="text-[11px] text-mint">متصلة الآن</div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-secondary/30 p-6">
            <Bubble side="them">السلام عليكم، تقرير جلسة هذا الأسبوع جاهز.</Bubble>
            <Bubble side="me">وعليكم السلام، شكراً جزيلاً. هل يمكن الاطلاع عليه؟</Bubble>
            <Bubble side="them">طبعاً، أرسلته الآن في قسم التقارير. هناك تحسن واضح في القراءة!</Bubble>
            <Bubble side="me">خبر رائع 🌟 شكراً لكم.</Bubble>
          </div>

          <div className="border-t border-border p-4">
            <div className="flex items-center gap-2">
              <button className="grid size-10 place-items-center rounded-xl bg-secondary text-muted-foreground"><Paperclip size={16} /></button>
              <input placeholder="اكتب رسالتك..." className="flex-1 rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none focus:bg-card focus:ring-2 focus:ring-primary/40" />
              <button className="grid size-11 place-items-center rounded-xl bg-primary text-white"><Send size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}

function Bubble({ side, children }: { side: "me" | "them"; children: React.ReactNode }) {
  const me = side === "me";
  return (
    <div className={`flex ${me ? "justify-start" : "justify-end"}`}>
      <div className={`max-w-md rounded-2xl px-4 py-2.5 text-sm ${me ? "bg-primary text-primary-foreground" : "bg-card border border-border"}`}>
        {children}
      </div>
    </div>
  );
}

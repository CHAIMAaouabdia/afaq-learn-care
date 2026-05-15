import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, ArrowLeft, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [{ title: "حجز موعد — آفاق" }] }),
  component: BookingPage,
});

const steps = ["معلومات الولي", "معلومات الطفل", "استمارة أولية", "اختيار الموعد"];

function BookingPage() {
  const [step, setStep] = useState(0);
  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold">احجز موعداً</h1>
          <p className="mt-2 text-muted-foreground">نموذج بسيط متعدد الخطوات لتأكيد زيارتك للمركز.</p>
        </div>

        {/* Stepper */}
        <div className="mb-8 flex items-center gap-2">
          {steps.map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-2">
              <div className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold transition-all ${
                i <= step ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              }`}>
                {i < step ? <Check size={14} /> : i + 1}
              </div>
              <div className={`hidden text-xs font-bold md:block ${i <= step ? "text-foreground" : "text-muted-foreground"}`}>{s}</div>
              {i < steps.length - 1 && (
                <div className={`h-px flex-1 ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
          {step === 0 && <ParentStep />}
          {step === 1 && <ChildStep />}
          {step === 2 && <AssessmentStep />}
          {step === 3 && <DateStep />}

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-muted-foreground hover:bg-secondary disabled:opacity-40"
            >
              <ArrowRight size={16} /> السابق
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              >
                التالي <ArrowLeft size={16} />
              </button>
            ) : (
              <Link to="/dashboard/parent" className="inline-flex items-center gap-2 rounded-xl bg-mint px-5 py-2.5 text-sm font-bold text-white">
                تأكيد الحجز <Check size={16} />
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-mint/30 bg-mint-soft/40 p-4 text-sm">
          <ShieldCheck size={18} className="text-mint" />
          <p className="text-deep"><b>تنبيه:</b> التشخيص يتم حضورياً داخل المركز من طرف فريق متعدد التخصصات.</p>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input {...rest} className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none focus:bg-card focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}

function ParentStep() {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">معلومات الولي</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="الاسم" placeholder="اسم الولي" />
        <Field label="اللقب" placeholder="اللقب" />
        <Field label="الهاتف" type="tel" placeholder="+213" />
        <Field label="البريد الإلكتروني" type="email" placeholder="email@example.com" />
      </div>
    </div>
  );
}
function ChildStep() {
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">معلومات الطفل</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="اسم الطفل" placeholder="اسم الطفل" />
        <Field label="العمر" type="number" placeholder="مثلاً 8" />
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">المستوى الدراسي</label>
          <select className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none focus:bg-card focus:ring-2 focus:ring-primary/40">
            <option>قبل التمدرس</option>
            <option>الابتدائي</option>
            <option>المتوسط</option>
            <option>الثانوي</option>
          </select>
        </div>
        <Field label="المشكلة الملاحظة" placeholder="مثلاً صعوبة في القراءة" />
      </div>
    </div>
  );
}

function AssessmentStep() {
  const qs = [
    "هل يعاني الطفل من صعوبة في القراءة؟",
    "هل يخلط بين الحروف؟",
    "هل يعاني من صعوبة في الحساب؟",
    "هل لديه مشاكل في التركيز؟",
    "هل توجد مشاكل في النطق أو التواصل؟",
  ];
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">استمارة أولية</h2>
      <div className="mb-5 rounded-2xl border border-amber-300/40 bg-amber-50 p-3 text-sm text-amber-800">
        هذه الاستمارة معلوماتية فقط ولا تعتبر تشخيصاً طبياً.
      </div>
      <div className="space-y-3">
        {qs.map((q) => (
          <div key={q} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-secondary/40 p-4">
            <span className="text-sm">{q}</span>
            <div className="flex gap-2">
              {["نعم", "أحياناً", "لا"].map((o) => (
                <label key={o} className="cursor-pointer rounded-lg border border-border bg-card px-3 py-1 text-xs font-bold has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white">
                  <input type="radio" name={q} className="hidden" />
                  {o}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DateStep() {
  const slots = ["09:00", "10:00", "11:00", "13:30", "14:30", "15:30", "16:30"];
  return (
    <div>
      <h2 className="mb-6 text-xl font-bold">اختيار الموعد</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <Calendar size={14} /> التاريخ
          </label>
          <input type="date" className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none focus:bg-card focus:ring-2 focus:ring-primary/40" />
        </div>
        <div>
          <label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <Clock size={14} /> الوقت المتاح
          </label>
          <div className="grid grid-cols-3 gap-2">
            {slots.map((s) => (
              <label key={s} className="cursor-pointer rounded-lg border border-border bg-card p-2.5 text-center text-sm font-bold has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white">
                <input type="radio" name="slot" className="hidden" />
                {s}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brain, BookOpen, Calculator, Ear, MessageSquare, Eye, Users, Sparkles,
  ShieldCheck, CalendarCheck, Stethoscope, UsersRound,
  ChevronDown, Check, Crown, Phone, Mail, MapPin, ArrowLeft, MessageCircle, Facebook,
} from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import heroImg from "@/assets/hero-specialist.jpg";
import aboutImg from "@/assets/about-session.jpg";
import servicesImg from "@/assets/services-group.jpg";
import sp1 from "@/assets/specialist-1.jpg";
import sp2 from "@/assets/specialist-2.jpg";
import sp3 from "@/assets/specialist-3.jpg";
import sp4 from "@/assets/specialist-4.jpg";
import sp5 from "@/assets/specialist-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "آفاق — مركز متخصص لذوي صعوبات التعلم في تلمسان" },
      { name: "description", content: "نوفر فريقاً متكاملاً من المختصين لتشخيص ومتابعة صعوبات التعلم وعسر القراءة والحساب — التشخيص حضوري داخل المركز." },
      { property: "og:title", content: "مركز آفاق — صعوبات التعلم" },
      { property: "og:description", content: "تشخيص ومتابعة حضورية بفريق متعدد التخصصات." },
    ],
  }),
  component: LandingPage,
});

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function LandingPage() {
  return (
    <SiteShell>
      <Hero />
      <DiagnosticBanner />
      <Stats />
      <About />
      <Specialists />
      <Workflow />
      <Services />
      <AgeGroups />
      <WarningSigns />
      <FAQ />
      <Premium />
      <Contact />
    </SiteShell>
  );
}

/* ───────────── HERO ───────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-soft" />
      <div className="pointer-events-none absolute -top-40 left-1/4 size-[36rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 size-[36rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-12 lg:grid-cols-2 lg:items-center lg:pt-20">
        <motion.div initial="hidden" animate="show" variants={fade} className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-soft px-4 py-1.5">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="text-xs font-bold text-primary">المركز الأول المتخصص في تلمسان</span>
          </div>
          <h1 className="text-balance text-5xl font-extrabold leading-[1.1] text-foreground lg:text-7xl">
            مركز متخصص في التكفل <span className="gradient-text">بذوي صعوبات التعلم</span>
          </h1>
          <p className="max-w-xl text-base font-semibold leading-relaxed text-foreground/80">
            متخصصون في التكفل بذوي صعوبات التعلم <span className="text-primary">النمائية</span> تحت سن التمدرس
            و<span className="text-primary"> الأكاديمية</span> في سن التمدرس.
          </p>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
            فريق متعدد التخصصات يقدّم التشخيص الحضوري والمتابعة المنتظمة وفق أحدث الأساليب التربوية والنفسية المعتمدة علمياً.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/booking"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              احجز موعداً
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-7 py-4 text-base font-bold text-foreground transition-all hover:bg-primary-soft"
            >
              اكتشف خدماتنا
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-soft px-3 py-1 font-semibold text-mint"><ShieldCheck size={14} /> فريق مرخّص</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 font-semibold text-accent"><UsersRound size={14} /> متعدد التخصصات</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 font-semibold text-primary"><Sparkles size={14} /> منهجية حديثة</span>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fade} className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-primary/20 via-accent/15 to-mint/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-card shadow-[var(--shadow-glow)]">
            <img src={heroImg} alt="مختصة مع طفل" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="glass-card absolute -bottom-6 right-4 max-w-[260px] rounded-3xl border border-border/60 p-5 shadow-xl animate-float"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-mint-soft text-mint"><ShieldCheck size={18} /></div>
              <div className="text-sm font-bold">تشخيص حضوري</div>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              التشخيص يتم حضورياً داخل المركز من طرف فريق متعدد التخصصات.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}
            className="glass-card absolute -top-4 left-4 hidden rounded-2xl border border-border/60 p-4 shadow-xl md:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-xl bg-primary text-white"><CalendarCheck size={18} /></div>
              <div>
                <div className="text-[11px] text-muted-foreground">جلسات هذا الأسبوع</div>
                <div className="text-base font-bold">+128 جلسة</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────── BANNER ───────────── */
function DiagnosticBanner() {
  return (
    <div className="border-y border-mint/20 bg-mint-soft/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-4 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-full bg-card text-mint shadow-sm">
            <ShieldCheck size={16} />
          </div>
          <p className="text-sm font-bold text-deep md:text-base">
            التشخيص يتم حضورياً داخل المركز من طرف فريق متعدد التخصصات.
          </p>
        </div>
        <Link to="/booking" className="text-sm font-bold text-primary hover:underline">احجز جلسة تقييم →</Link>
      </div>
    </div>
  );
}

/* ───────────── STATS ───────────── */
function Stats() {
  const items = [
    { v: "متعدد", l: "التخصصات", c: "text-primary" },
    { v: "حضوري", l: "تشخيص داخل المركز", c: "text-mint" },
    { v: "فردي", l: "برنامج لكل طفل", c: "text-accent" },
    { v: "دوري", l: "تقارير للأولياء", c: "text-primary" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm md:grid-cols-4 md:p-8">
        {items.map((s) => (
          <div key={s.l} className="text-center">
            <div className={`text-3xl font-black md:text-4xl ${s.c}`}>{s.v}</div>
            <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── ABOUT ───────────── */
function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-accent/10 blur-2xl" />
          <img src={aboutImg} alt="جلسة تربوية" loading="lazy" width={1024} height={768}
               className="relative w-full rounded-[2rem] border-8 border-card object-cover shadow-xl" />
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">من نحن</p>
          <h2 className="mb-6 text-4xl font-extrabold leading-tight text-foreground lg:text-5xl">
            مركز متخصص يضع طفلك في قلب الاهتمام
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            نختص في التكفل بذوي صعوبات التعلم وعسر القراءة والحساب واضطرابات التركيز والتواصل.
            نقدم متابعة شخصية مستمرة وتقييماً متعدد المختصين، وخططاً علاجية مصممة فردياً لكل طفل.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, t: "دعم شخصي", d: "خطة فردية لكل حالة" },
              { icon: UsersRound, t: "فريق متكامل", d: "مختصون من تخصصات متعددة" },
              { icon: CalendarCheck, t: "متابعة دورية شهرية", d: "جلسات وتقارير شهرية منتظمة" },
              { icon: Sparkles, t: "أساليب حديثة", d: "بروتوكولات علمية معتمدة" },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-card p-4">
                <div className="mb-3 grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                  <f.icon size={18} />
                </div>
                <div className="font-bold">{f.t}</div>
                <div className="text-sm text-muted-foreground">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── SPECIALISTS ───────────── */
function Specialists() {
  const team = [
    { img: sp1, role: "Orthophoniste", roleAr: "أخصائي/ة الأرطوفونيا", desc: "تشخيص ومعالجة اضطرابات النطق واللغة وصعوبات القراءة والكتابة." },
    { img: sp2, role: "Psychologue", roleAr: "أخصائي/ة نفساني/ة عيادي/ة", desc: "تقييم نفسي، دعم سلوكي وعاطفي، ومرافقة نفسية للطفل والأسرة." },
    { img: sp4, role: "Neurologue", roleAr: "طبيب/ة أعصاب الأطفال", desc: "تقييم الجانب العصبي للاضطرابات النمائية وفرط الحركة وتشتت الانتباه." },
    { img: sp3, role: "أخصائي/ة تربوي/ة", roleAr: "Pédagogue spécialisé(e)", desc: "إعداد البرامج التربوية المكيفة والتنسيق مع المدرسة." },
    { img: sp5, role: "أخصائي/ة اجتماعي/ة", roleAr: "Assistant(e) social(e)", desc: "مرافقة الأسرة والربط بين المنزل والمدرسة والمركز." },
  ];
  return (
    <section id="team" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">فريقنا</p>
            <h2 className="text-4xl font-extrabold lg:text-5xl">نخبة من المختصين</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              يتم تقييم كل طفل من زوايا متعددة قبل اتخاذ أي قرار علاجي، لضمان أدق النتائج.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {team.map((m, i) => (
            <motion.div
              key={m.role}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={m.img} alt={m.role} loading="lazy" width={640} height={800}
                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="font-bold text-foreground">{m.role}</div>
                <div className="text-xs font-medium text-muted-foreground">{m.roleAr}</div>
                <div className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── WORKFLOW ───────────── */
function Workflow() {
  const steps = [
    { n: 1, t: "حجز موعد", d: "عبر المنصة أو الهاتف لتحديد أول زيارة." },
    { n: 2, t: "ملء استمارة الولي", d: "معلومات أولية حول الطفل وتاريخه." },
    { n: 3, t: "التشخيص الحضوري", d: "تقييم مباشر داخل المركز.", highlight: true },
    { n: 4, t: "تقييم المختصين", d: "اختبارات مقننة من تخصصات متعددة." },
    { n: 5, t: "اجتماع الفريق", d: "تحليل النتائج جماعياً." },
    { n: 6, t: "إعداد البرنامج", d: "خطة تأهيل فردية مناسبة." },
    { n: 7, t: "المتابعة الدورية الشهرية", d: "جلسات وتقارير شهرية منتظمة للأولياء." },
  ];
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">منهجيتنا</p>
        <h2 className="text-4xl font-extrabold lg:text-5xl">رحلة التغيير في 7 خطوات</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          نتبع منهجية علمية صارمة تبدأ بالتعرف على الطفل وتنتهي بدمجه الكامل في وسطه الدراسي.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className={`relative overflow-hidden rounded-3xl border p-6 transition-all hover:-translate-y-1 ${
              s.highlight
                ? "border-primary/30 bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-xl shadow-primary/20"
                : "border-border bg-card hover:shadow-md"
            }`}
          >
            <div className={`text-5xl font-black opacity-20 ${s.highlight ? "" : "text-primary"}`}>
              {String(s.n).padStart(2, "0")}
            </div>
            <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
            <p className={`mt-2 text-sm ${s.highlight ? "opacity-90" : "text-muted-foreground"}`}>
              {s.d}
            </p>
            {s.highlight && (
              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold">
                <ShieldCheck size={12} /> حضوري داخل المركز فقط
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── SERVICES ───────────── */
function Services() {
  const services = [
    { icon: MessageSquare, t: "جلسات الأرطوفونيا", d: "علاج اضطرابات النطق واللغة." },
    { icon: Brain, t: "المتابعة النفسية", d: "جلسات نفسية لتعزيز الثقة بالنفس." },
    { icon: BookOpen, t: "التأهيل التربوي", d: "برامج تعليمية مكيفة." },
    { icon: Ear, t: "علاج النطق والتواصل", d: "تطوير المهارات اللغوية." },
    { icon: CalendarCheck, t: "المتابعة الدورية الشهرية", d: "تقارير ومراجعات شهرية منتظمة." },
    { icon: Stethoscope, t: "العلاج الفردي", d: "خطة شخصية لكل طفل." },
    { icon: Users, t: "العلاج الجماعي", d: "أنشطة جماعية لذوي الصعوبات." },
  ];

  return (
    <section id="services" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 grid items-end gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">خدماتنا</p>
            <h2 className="text-4xl font-extrabold lg:text-5xl">حلول متكاملة لكل حالة</h2>
          </div>
          <p className="text-muted-foreground md:justify-self-end">
            خدمات شاملة تجمع بين المتابعة النفسية والتربوية والطبية لضمان التطور المستمر.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="row-span-2 overflow-hidden rounded-3xl border border-border bg-card lg:col-span-1">
            <img src={servicesImg} alt="جلسة جماعية" loading="lazy" width={1024} height={768}
                 className="h-64 w-full object-cover lg:h-72" />
            <div className="p-6">
              <h3 className="text-xl font-bold">برامج علاجية شاملة</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                نجمع بين الجلسات الفردية والجماعية، التمارين المنزلية والمتابعة المستمرة لضمان أقصى استفادة لطفلك.
              </p>
            </div>
          </div>
          {services.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon size={20} />
              </div>
              <h3 className="text-lg font-bold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── AGE GROUPS ───────────── */
function AgeGroups() {
  const ages = [
    {
      t: "قبل التمدرس",
      a: "3 - 5 سنوات",
      focus: "بناء الأساس اللغوي والحسي",
      c: "from-primary/20 to-primary/5",
      b: "border-primary/20",
      items: [
        "تحفيز اللغة والنطق عبر اللعب",
        "تنمية المهارات الحسية والحركية الدقيقة",
        "ورشات التهيئة للقراءة والكتابة",
        "إرشاد أبوي حول علامات التأخر النمائي",
      ],
    },
    {
      t: "الابتدائي",
      a: "6 - 11 سنة",
      focus: "تشخيص ومعالجة عسر التعلم",
      c: "from-mint/20 to-mint/5",
      b: "border-mint/20",
      items: [
        "تقييم عسر القراءة والكتابة والحساب",
        "حصص أرطوفونيا فردية أسبوعية",
        "تمارين تركيز وذاكرة عمل",
        "تنسيق مكيّف مع المعلم والمدرسة",
      ],
    },
    {
      t: "المتوسط",
      a: "12 - 14 سنة",
      focus: "استراتيجيات التعلم والثقة بالنفس",
      c: "from-accent/20 to-accent/5",
      b: "border-accent/20",
      items: [
        "تقنيات تنظيم المراجعة وإدارة الوقت",
        "دعم نفسي للمراهق وتقدير الذات",
        "تأهيل لاضطرابات الانتباه وفرط الحركة",
        "متابعة ولي الأمر للتغيرات السلوكية",
      ],
    },
    {
      t: "الثانوي",
      a: "15 - 18 سنة",
      focus: "التحضير للبكالوريا والتوجيه",
      c: "from-primary/20 to-accent/5",
      b: "border-primary/20",
      items: [
        "مرافقة نفسية لضغط الامتحانات",
        "تكييفات بيداغوجية معتمدة للبكالوريا",
        "اختبارات الميول والتوجيه الجامعي",
        "ورشات إدارة القلق والثقة بالنفس",
      ],
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">حسب العمر</p>
        <h2 className="text-4xl font-extrabold lg:text-5xl">برامج لكل مرحلة</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          لكل مرحلة عمرية حاجاتها الخاصة؛ نصمّم محتوى مختلفاً يراعي النمو المعرفي والعاطفي للطفل.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {ages.map((a, i) => (
          <motion.div
            key={a.t}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.07 }}
            className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br ${a.c} ${a.b} p-7 backdrop-blur transition-all hover:-translate-y-1`}
          >
            <div className="text-2xl font-extrabold">{a.t}</div>
            <div className="mt-1 text-sm font-medium text-muted-foreground">{a.a}</div>
            <div className="mt-4 inline-flex rounded-full bg-card/70 px-3 py-1 text-[11px] font-bold text-foreground/80 ring-1 ring-border">
              {a.focus}
            </div>
            <ul className="mt-5 space-y-2.5 text-sm">
              {a.items.map((it) => (
                <li key={it} className="flex items-start gap-2">
                  <Check size={14} className="mt-1 shrink-0 text-mint" />
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── WARNING SIGNS ───────────── */
function WarningSigns() {
  const signs = [
    { icon: BookOpen, t: "خلط الحروف", d: "صعوبة التمييز بين الحروف المتشابهة." },
    { icon: Calculator, t: "صعوبة الحساب", d: "ضعف في إدراك المفاهيم العددية." },
    { icon: Eye, t: "ضعف التركيز", d: "تشتت سريع وصعوبة في الانتباه." },
    { icon: Ear, t: "مشاكل النطق", d: "صعوبات في إخراج الأصوات." },
    { icon: Brain, t: "بطء الفهم", d: "تأخر في استيعاب التعليمات." },
    { icon: MessageSquare, t: "ضعف التواصل", d: "صعوبة التعبير اللفظي." },
  ];
  return (
    <section className="bg-primary-soft/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">علامات التحذير</p>
          <h2 className="text-4xl font-extrabold lg:text-5xl">علامات تستدعي الاهتمام</h2>
          <p className="mt-3 text-muted-foreground">
            إذا لاحظتم هذه المؤشرات على طفلكم، فنحن هنا للتشخيص الدقيق والمساعدة.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {signs.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent">
                <s.icon size={20} />
              </div>
              <h3 className="font-bold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── FAQ ───────────── */
function FAQ() {
  const items = [
    { q: "ما هي صعوبات التعلم؟", a: "صعوبات التعلم اضطرابات نمائية عصبية تؤثر على قدرة الطفل في اكتساب القراءة أو الكتابة أو الحساب، رغم امتلاكه ذكاءً عادياً وفرص تعلم مناسبة." },
    { q: "ما هو عسر القراءة (Dyslexie)؟", a: "عسر القراءة اضطراب نمائي عصبي يجعل تعلّم القراءة بطيئاً وغير دقيق، مع صعوبة في فك رموز الحروف والكلمات رغم الذكاء العادي." },
    { q: "ما هو عسر الكتابة (Dysgraphie)؟", a: "عسر الكتابة اضطراب نمائي عصبي يؤثر على إنتاج الكتابة: شكل الحروف، التنظيم على السطر، وسرعة النسخ، دون علاقة بالذكاء." },
    { q: "ما هو عسر الحساب (Dyscalculie)؟", a: "عسر الحساب اضطراب نمائي عصبي يصعّب فهم الأعداد والمفاهيم الرياضية وإجراء العمليات الحسابية الأساسية." },
    { q: "اضطرابات التركيز والانتباه (TDA/H)", a: "صعوبة الحفاظ على الانتباه، التسرّع، أو فرط الحركة. تحتاج لتقييم متعدد المختصين وبرنامج تأهيلي وسلوكي مناسب." },
    { q: "اضطرابات النطق والتواصل", a: "تشمل تأخر اللغة، صعوبات النطق، والتواصل الاجتماعي. يتكفّل بها أخصائي الأرطوفونيا ضمن خطة فردية." },
    { q: "متى يجب زيارة المختص؟", a: "عند ملاحظة تأخر دراسي مستمر، صعوبات في القراءة أو الكتابة أو التركيز رغم الجهود المبذولة في البيت والمدرسة." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">الأسئلة الشائعة</p>
        <h2 className="text-4xl font-extrabold lg:text-5xl">كل ما تودّ معرفته</h2>
      </div>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={it.q} className="overflow-hidden rounded-2xl border border-border bg-card">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
            >
              <span className="font-bold">{it.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-primary transition-transform ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{it.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ───────────── PREMIUM ───────────── */
function Premium() {
  const features = [
    "إشعارات لحظية",
    "متابعة مفصلة مباشرة",
    "مكالمات فيديو مع المختصين",
    "متابعة خلال العطل",
    "تمارين منزلية متقدمة",
    "توصيات مخصصة",
    "تقارير متقدمة",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1">
            <Crown size={14} className="text-accent" />
            <span className="text-xs font-bold text-accent">العضوية المميزة</span>
          </div>
          <h2 className="text-4xl font-extrabold leading-tight lg:text-5xl">
            متابعة <span className="gradient-text">بلا حدود</span> لطفلك
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ارفع جودة المتابعة بميزات حصرية: تواصل مباشر مع الفريق، تقارير دقيقة، ومحتوى علاجي مخصص يصلك أسبوعياً.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["متابعة لحظية", "أولوية الحجز", "محتوى حصري"].map((tag) => (
              <span key={tag} className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">{tag}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-accent/30 via-primary/20 to-mint/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-deep to-[oklch(0.30_0.07_265)] p-8 text-white shadow-2xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">عضوية آفاق+</div>
                <div className="mt-1 text-3xl font-black">المميزة</div>
              </div>
              <div className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                <Crown size={24} />
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-5xl font-black">5,900</div>
              <div className="pb-2 text-sm text-white/70">دج / شهرياً</div>
            </div>
            <div className="my-6 h-px bg-white/10" />
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="grid size-6 place-items-center rounded-full bg-mint/20 text-mint">
                    <Check size={14} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/booking"
              className="mt-7 block w-full rounded-2xl bg-white py-4 text-center font-bold text-deep transition-transform hover:-translate-y-0.5"
            >
              ابدأ العضوية الآن
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── CONTACT ───────────── */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">تواصل</p>
          <h2 className="text-4xl font-extrabold lg:text-5xl">نحن هنا للاستماع إليكم</h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            إذا كنت تلاحظ على طفلك صعوبة في القراءة، الحساب، أو التركيز، لا تتردد في طلب استشارة أولية.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: MapPin, l: "الولاية", v: "تلمسان — الجزائر" },
              { icon: Phone, l: "الهاتف", v: "+213 (0) 43 00 00 00", dir: "ltr" as const },
              { icon: Mail, l: "البريد الإلكتروني", v: "contact@afaq-center.dz" },
              { icon: MessageCircle, l: "واتساب", v: "+213 (0) 5 00 00 00 00", dir: "ltr" as const },
              { icon: Facebook, l: "صفحة فيسبوك", v: "facebook.com/afaq.center" },
            ].map((c) => (
              <div key={c.l} className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <c.icon size={18} />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">{c.l}</div>
                  <div className="font-bold" dir={c.dir}>{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h3 className="mb-6 text-2xl font-bold">طلب استشارة</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="الاسم" placeholder="اسمك" />
            <Field label="اللقب" placeholder="لقبك" />
            <Field label="الهاتف" placeholder="+213" type="tel" />
            <Field label="البريد الإلكتروني" placeholder="email@example.com" type="email" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
              المشكلة الملاحظة
            </label>
            <textarea
              rows={4}
              placeholder="مثلاً: صعوبة في القراءة، تشتت الانتباه..."
              className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none transition-all focus:bg-card focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-2xl bg-primary py-4 font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5"
          >
            إرسال الطلب
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            هذه الاستمارة معلوماتية فقط ولا تعتبر تشخيصاً طبياً.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm outline-none transition-all focus:bg-card focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}

export default LandingPage;

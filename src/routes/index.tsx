import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Droplets, Flame, Filter, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  component: CatalogPage,
});

const configs = [
  {
    id: "stick-2",
    title: "ברז נלווה מים קרים וסודה",
    placeholder: "תמונת ברז מזיגה רגיל ברז נלווה מים קרים וסודה",
    description:
      "ברז סטיק קלאסי עם שתי ידיות נפרדות — אחת למים קרים מסוננים ואחת לסודה מוגזת ישירות מהברז.",
    benefits: [
      "שליטה מדויקת בכל סוג מים",
      "עיצוב סטיק נקי ומינימליסטי",
      "מתאים לכל ארון מטבח תת־כיורי",
    ],
  },
  {
    id: "stick-1-plus",
    title: "סטיק ידית אחת לסודה + ברז חם/קר",
    placeholder: "תמונת ברז מזיגה סטיק ידית אחת לסודה + ברז מזיגה חם קר",
    description:
      "פתרון מורחב — ברז סטיק ייעודי לסודה לצד ברז מזיגה נוסף למים חמים רותחים וקרים.",
    benefits: [
      "הפרדה בין מערכת הסודה למערכת המים",
      "מים רותחים זמינים מיידית",
      "חוויית שתייה מלאה במטבח אחד",
    ],
  },
  {
    id: "all-in-one",
    title: "ברז אחד חם/קר/סודה",
    placeholder: "תמונה של ברז חם קר סודה בברז אחד",
    description:
      "ברז יחיד שמרכז את שלושת מקורות המים — קר מסונן, רותח וסודה מוגזת. מראה נקי וחסכון במקום על השיש.",
    benefits: [
      "ברז אחד בלבד על השיש",
      "חוויית משתמש פשוטה ואלגנטית",
      "מתאים למטבחים בעיצוב מודרני",
    ],
  },
];

const finishes = [
  { name: "זהב", style: "linear-gradient(135deg,#e9c87a,#bf8f33)" },
  {
    name: "זהב מוברש",
    style:
      "repeating-linear-gradient(135deg,#d8b465 0 2px,#b88a35 2px 4px)",
  },
  { name: "ניקל", style: "linear-gradient(135deg,#e6e8ec,#9aa1ab)" },
  {
    name: "ניקל מוברש",
    style:
      "repeating-linear-gradient(135deg,#cfd3d8 0 2px,#9aa1ab 2px 4px)",
  },
  { name: "רוזגולד", style: "linear-gradient(135deg,#f3c6b4,#b87363)" },
  { name: "שחור", style: "linear-gradient(135deg,#3a3a3a,#0d0d0d)" },
];

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-aqua/30 bg-gradient-to-br from-brand-mist to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,var(--color-brand-aqua-soft),transparent_60%)]" />
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <p className="text-center text-sm leading-relaxed text-brand-navy/70">
          {caption}
        </p>
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-brand-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <nav className="hidden gap-6 text-sm text-white/70 md:flex">
          <a href="#configs" className="hover:text-brand-aqua">קונפיגורציות</a>
          <a href="#specs" className="hover:text-brand-aqua">מפרט טכני</a>
          <a href="#finishes" className="hover:text-brand-aqua">גימורים</a>
          <a href="#contact" className="hover:text-brand-aqua">צור קשר</a>
        </nav>
        <div className="flex items-center gap-2 text-white">
          <span className="font-semibold tracking-wide">טל חרמון</span>
          <span className="h-6 w-px bg-white/20" />
          <span className="text-xs text-white/60">קטלוג ברזי מזיגה</span>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.78_0.13_200/0.18),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="order-2 md:order-1">
          <ImagePlaceholder caption="תמונת מערכת ברז סודה וחם/קר תת־כיורית" />
        </div>
        <div className="order-1 flex flex-col justify-center md:order-2">
          <span className="mb-4 inline-block w-fit rounded-full border border-brand-aqua/40 bg-brand-aqua/10 px-3 py-1 text-xs font-medium text-brand-aqua">
            חדש בקטלוג
          </span>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            ברזי מזיגה למים קרים, חמים וסודה
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
            פתרון תת־כיורי אלגנטי שמרכז את חוויית השתייה במטבח — בלי בר מים על השיש.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#configs">
              <Button className="bg-brand-aqua text-brand-ink hover:bg-brand-aqua/90">
                לצפייה בקונפיגורציות
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
              >
                לפנייה לנציג
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Configurations() {
  return (
    <section id="configs" className="bg-brand-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            קונפיגורציות הברז
          </h2>
          <p className="mt-3 text-brand-navy/70">
            שלוש תצורות שונות שמותאמות לכל סגנון מטבח ולכל הרגל שתייה.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {configs.map((c) => (
            <article
              key={c.id}
              className="flex flex-col rounded-3xl border border-brand-navy/5 bg-white p-5 shadow-[0_10px_40px_-20px_oklch(0.22_0.04_255/0.25)]"
            >
              <ImagePlaceholder caption={c.placeholder} />
              <h3 className="mt-5 text-lg font-bold text-brand-navy">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                {c.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-brand-navy/10 pt-4">
                {c.benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 text-sm text-brand-navy/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-aqua" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type Spec = { label: string; value: string };
function SpecCard({
  icon,
  title,
  specs,
  footnote,
}: {
  icon: React.ReactNode;
  title: string;
  specs: Spec[];
  footnote?: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-brand-navy/10 bg-white p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-aqua/15 text-brand-navy">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-brand-navy">{title}</h3>
      </div>
      <dl className="divide-y divide-brand-navy/10">
        {specs.map((s) => (
          <div
            key={s.label}
            className="flex items-start justify-between gap-4 py-3 text-sm"
          >
            <dt className="font-medium text-brand-navy">{s.label}</dt>
            <dd className="text-left text-brand-navy/70">{s.value}</dd>
          </div>
        ))}
      </dl>
      {footnote && (
        <p className="mt-4 rounded-xl bg-brand-mist p-3 text-xs text-brand-navy/70">
          {footnote}
        </p>
      )}
    </div>
  );
}

function Specs() {
  return (
    <section id="specs" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            מפרט טכני
          </h2>
          <p className="mt-3 text-brand-navy/70">
            המערכת התת־כיורית מורכבת משלושה רכיבים שעובדים יחד בשקט מתחת לשיש.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <SpecCard
            icon={<Droplets className="h-5 w-5" />}
            title="מערכת מים קרים"
            specs={[
              { label: "טמפרטורה", value: "4–8 מעלות" },
              { label: "הספק", value: "5 ליטר לשעה" },
              { label: "נפח מיכל", value: "1.2 ליטר" },
              {
                label: "מידות",
                value: "גובה 37 / עומק 32 / רוחב 18 ס״מ",
              },
            ]}
          />
          <SpecCard
            icon={<Flame className="h-5 w-5" />}
            title="מערכת מים רותחים"
            specs={[
              { label: "טמפרטורה", value: "98 מעלות" },
              { label: "נפח מיכל", value: "2.4 ליטר" },
              { label: "אחריות", value: "שנה" },
              {
                label: "מידות",
                value: "גובה 26 / עומק 19 / רוחב 19 ס״מ",
              },
            ]}
          />
          <SpecCard
            icon={<Filter className="h-5 w-5" />}
            title="מערכת סינון 3 שלבים"
            specs={[
              { label: "שלב 1", value: "סנן משקעים" },
              { label: "שלב 2", value: "סנן פחם בלוק" },
              {
                label: "שלב 3",
                value: "פחם בלוק לכלור ואבנית",
              },
              {
                label: "מידות",
                value: "רוחב 21 / גובה 29 / עומק 10 ס״מ",
              },
            ]}
            footnote="המערכת מאושרת על ידי מכון התקנים הישראלי לתקן 1505."
          />
        </div>
      </div>
    </section>
  );
}

function Finishes() {
  return (
    <section id="finishes" className="bg-brand-mist py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            גימורי ברז זמינים
          </h2>
          <p className="mt-3 text-brand-navy/70">
            כל ברז זמין במגוון גימורים שמשתלבים בעיצוב המטבח שלכם.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-6">
          {finishes.map((f) => (
            <div key={f.name} className="flex flex-col items-center gap-3">
              <div
                className="h-20 w-20 rounded-full border border-brand-navy/10 shadow-[inset_0_2px_8px_rgba(255,255,255,0.5),0_8px_20px_-10px_rgba(0,0,0,0.3)]"
                style={{ background: f.style }}
                aria-label={f.name}
              />
              <span className="text-sm font-medium text-brand-navy">
                {f.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    interest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("יש למלא שם וטלפון");
      return;
    }
    toast.success("תודה! ניצור איתכם קשר בקרוב.");
    setForm({ name: "", phone: "", city: "", interest: "" });
  };

  return (
    <section id="contact" className="bg-brand-navy py-20 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-aqua/15 text-brand-aqua">
            <Phone className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            רוצים להתאים את הברז למטבח שלכם?
          </h2>
          <p className="mt-3 text-white/70">
            השאירו פרטים וניצור איתכם קשר עם המלצה מותאמת אישית.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 sm:p-8"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white/80">שם מלא</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-white/20 bg-white/10 text-white placeholder:text-white/40"
              placeholder="ישראל ישראלי"
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-white/80">טלפון</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border-white/20 bg-white/10 text-white placeholder:text-white/40"
              placeholder="050-0000000"
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city" className="text-white/80">עיר</Label>
            <Input
              id="city"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="border-white/20 bg-white/10 text-white placeholder:text-white/40"
              placeholder="תל אביב"
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white/80">סוג ברז מעניין</Label>
            <Select
              value={form.interest}
              onValueChange={(v) => setForm({ ...form, interest: v })}
            >
              <SelectTrigger className="border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="בחרו קונפיגורציה" />
              </SelectTrigger>
              <SelectContent>
                {configs.map((c) => (
                  <SelectItem key={c.id} value={c.title}>
                    {c.title}
                  </SelectItem>
                ))}
                <SelectItem value="לא בטוח/ה — צריך ייעוץ">
                  לא בטוח/ה — צריך ייעוץ
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="sm:col-span-2">
            <Button
              type="submit"
              className="w-full bg-brand-aqua text-brand-ink hover:bg-brand-aqua/90"
              size="lg"
            >
              קבלו שיחה מנציג
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-ink py-8 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 text-sm sm:flex-row sm:px-6">
        <span>טל חרמון © 2026</span>
        <span className="text-white/40">פתרונות מים פרימיום למטבח</span>
      </div>
    </footer>
  );
}

function CatalogPage() {
  return (
    <div className="min-h-screen bg-white text-brand-navy" dir="rtl">
      <TopBar />
      <main>
        <Hero />
        <Configurations />
        <Specs />
        <Finishes />
        <ContactForm />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}

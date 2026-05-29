import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-deep text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-2xl bg-primary text-xl font-bold text-white">آ</div>
              <span className="text-2xl font-bold text-white">آفاق</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              مركز متخصص في تقديم التكفل بذوي صعوبات التعلم للطفل والمراهق. الجزائر — تلمسان.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#services" className="hover:text-white">خدماتنا</a></li>
              <li><a href="/#team" className="hover:text-white">فريقنا</a></li>
              <li><a href="/#workflow" className="hover:text-white">منهجية العمل</a></li>
              <li><a href="/#faq" className="hover:text-white">الأسئلة الشائعة</a></li>
              <li><Link to="/booking" className="hover:text-white">احجز موعداً</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin size={16} className="text-mint" /> تلمسان، الجزائر</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-mint" /> <span dir="ltr">+213 (0) 43 00 00 00</span></li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-mint" /><span>contact@afaq-center.dz</span></li>
              <li className="flex items-center gap-3"><MessageCircle size={16} className="text-mint" /> واتساب متاح يومياً</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">تابعنا</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-primary">
                <Facebook size={16} />
              </a>
              <a href="#" aria-label="WhatsApp" className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-mint">
                <MessageCircle size={16} />
              </a>
              <a href="#" aria-label="Email" className="grid size-10 place-items-center rounded-full bg-white/10 transition-colors hover:bg-accent">
                <Mail size={16} />
              </a>
            </div>
            <p className="mt-6 rounded-xl bg-white/5 p-4 text-xs leading-relaxed text-mint">
              التشخيص يتم حضورياً داخل المركز من طرف فريق متعدد التخصصات.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row">
          <p>© 2026 مركز آفاق المتخصص. جميع الحقوق محفوظة.</p>
          <p>صُنع بعناية في الجزائر</p>
        </div>
      </div>
    </footer>
  );
}

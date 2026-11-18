import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#projects", label: "Проекты" },
  { href: "#bots", label: "Боты" },
  { href: "#stack", label: "Стек" },
  { href: "#contact", label: "Связь" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[box-shadow,background-color] duration-150",
        scrolled ? "bg-bg shadow-border" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex min-h-11 items-center gap-2 text-fg">
          <span className="flex size-8 items-center justify-center rounded-sm bg-accent text-accent-fg">
            <Zap className="size-4" strokeWidth={2.4} />
          </span>
          <span className="font-display text-xl tracking-wide">{SITE.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Разделы">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-muted transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a href={SITE.inviteUrl} target="_blank" rel="noreferrer" className="btn btn-primary ml-3">
            Канал
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-fg md:hidden"
          aria-expanded={open}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-bg md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-6" aria-label="Мобильное меню">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-border font-display text-2xl text-fg"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.inviteUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-6"
            >
              Открыть канал
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

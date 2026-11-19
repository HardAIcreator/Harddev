import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Bot,
  Box,
  Calculator,
  Check,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Gamepad2,
  Github,
  Send,
  Smartphone,
  Type,
  Zap,
} from "lucide-react";
import { LightningField } from "@/components/lightning-field";
import { SiteHeader } from "@/components/site-header";
import {
  BOT_TIPS,
  KINDS,
  PROJECTS,
  SITE,
  STACK,
  type Kind,
  type Project,
  projectMatches,
} from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div id="top" className="relative min-h-dvh bg-bg text-fg">
      <LightningField />
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
        <BotsGuide />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/brand/lightning-wide.jpg"
          alt=""
          className="size-full object-cover opacity-45 outline outline-1 -outline-offset-1 outline-white/10"
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg via-bg/40 to-bg" />
      </div>

      {/* Mobile: full-bleed poster */}
      <div className="relative md:hidden">
        <div className="relative min-h-[calc(100dvh-4rem)]">
          <img
            src="/brand/hard-poster.png"
            alt="HARD — электрический логотип канала"
            className="absolute inset-0 size-full object-cover object-top outline outline-1 -outline-offset-1 outline-white/10"
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-bg to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-bg via-bg/85 to-transparent" />
          <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col justify-end px-4 pb-10">
            <HeroCopy />
          </div>
        </div>
      </div>

      {/* Desktop: copy + poster */}
      <div className="relative mx-auto hidden min-h-[calc(100dvh-4rem)] max-w-6xl grid-cols-[1.05fr_0.95fr] items-center gap-10 px-6 py-12 md:grid">
        <HeroCopy />
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-2xl bg-accent/10 blur-2xl" />
          <img
            src="/brand/hard-poster.png"
            alt="HARD — электрический логотип канала"
            className="relative w-full rounded-2xl shadow-glow outline outline-1 -outline-offset-1 outline-white/15"
          />
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <div>
      <p className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-accent">
        {SITE.kicker}
      </p>
      <h1 className="max-w-3xl font-display text-6xl font-semibold tracking-tight text-fg sm:text-8xl">
        {SITE.name}
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">{SITE.tagline}</p>
      <p className="mt-2 max-w-xl text-sm text-subtle">
        Игры, боты и эксперименты. Подробности — в личке.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={SITE.inviteUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
          <Send className="size-4" />
          Открыть канал
          <ArrowUpRight className="size-4" />
        </a>
        <a href="#projects" className="btn btn-ghost">
          Смотреть проекты
        </a>
       
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Кто это</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Инди, с нуля и в открытую</h2>
          <p className="mt-5 max-w-xl text-muted">
            HardDEV — канал начинающего инди-девелопера. Здесь выходят игры на Godot, веб-прототипы,
            Telegram-боты и странные аддоны. Честно про баги, обновления и то, что ещё в работе.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {[
            { n: "11+", l: "проектов в каталоге" },
            { n: "3", l: "языка в стеке" },
            { n: "Godot", l: "основной движок" },
            { n: "TG", l: "боты и мини-аппы" },
          ].map((item) => (
            <li key={item.l} className="panel rounded-xl px-4 py-5">
              <p className="font-display text-3xl text-accent">{item.n}</p>
              <p className="mt-1 text-sm text-muted">{item.l}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects() {
  const [kind, setKind] = useState<Kind>("all");
  const list = useMemo(() => PROJECTS.filter((p) => projectMatches(p, kind)), [kind]);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-8 sm:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Каталог</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Проекты</h2>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Фильтр проектов">
          {KINDS.map((k) => (
            <button
              key={k.id}
              type="button"
              role="tab"
              aria-selected={kind === k.id}
              data-active={kind === k.id}
              className="chip"
              onClick={() => setKind(k.id)}
            >
              {k.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {list.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel flex flex-col p-2">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-surface">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            className="size-full object-cover outline outline-1 -outline-offset-1 outline-white/10"
          />
        ) : (
          <IconCover icon={project.icon} />
        )}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1">
          <KindBadge kind={project.kind} />
          {project.fresh ? (
            <span className="rounded-sm bg-accent px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent-fg">
              new
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-3 pb-3 pt-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-wider text-subtle">
            {project.engine}
          </span>
        </div>
        <p className="mt-2 text-sm text-muted">{project.blurb}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-subtle">
          {project.highlights.slice(0, 3).map((line) => (
            <li key={line} className="flex gap-2">
              <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost h-10 min-h-10 px-3 text-sm"
            >
              {link.label}
              <ExternalLink className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function IconCover({ icon }: { icon?: Project["icon"] }) {
  return (
    <div className="relative flex size-full items-center justify-center">
      <img
        src="/brand/lightning-wide.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-bg/40" />
      {icon === "calculator" ? (
        <Calculator className="relative size-12 text-accent" strokeWidth={1.6} />
      ) : (
        <Type className="relative size-12 text-accent" strokeWidth={1.6} />
      )}
    </div>
  );
}

function KindBadge({ kind }: { kind: Project["kind"] }) {
  const map = {
    game: "игра",
    bot: "бот",
    web: "веб",
    addon: "аддон",
    tool: "утилита",
  };
  return (
    <span className="rounded-sm bg-bg/80 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-accent">
      {map[kind]}
    </span>
  );
}

function BotsGuide() {
  const bots = PROJECTS.filter((p) => p.kind === "bot" || p.extraKinds?.includes("bot"));

  return (
    <section id="bots" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Telegram</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Боты и мини-приложения</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Все боты обновлены: новая система приложений, удобнее открывать и пользоваться.
          </p>
        </div>
        <Bot className="hidden size-10 text-accent sm:block" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {bots.map((bot) => (
          <a
            key={bot.id}
            href={bot.links[0]?.href}
            target="_blank"
            rel="noreferrer"
            className="panel flex items-center justify-between gap-4 rounded-xl px-5 py-4 transition-shadow duration-150 hover:shadow-border-hover"
          >
            <div>
              <p className="font-display text-xl">{bot.title}</p>
              <p className="mt-1 text-sm text-muted">{bot.blurb}</p>
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-accent" />
          </a>
        ))}
      </div>

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {BOT_TIPS.map((tip, i) => (
          <div key={tip.title} className="panel rounded-xl p-5">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              Важно · 0{i + 1}
            </p>
            <h3 className="mt-2 text-xl">{tip.title}</h3>
            <p className="mt-2 text-sm text-muted">{tip.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-8 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Инструменты</p>
      <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Стек канала</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group) => (
          <div key={group.group} className="panel rounded-xl p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              {group.group}
            </p>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-fg">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyHandle = async () => {
    const text = SITE.handle;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("clipboard unavailable");
      }
    } catch {
      const field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      field.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Связь</p>
      <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Как попасть в канал</h2>
      <p className="mt-4 max-w-2xl text-muted">
        Чтобы получить ссылку на основной канал — пишите {SITE.handle}. Подробности тоже в личке.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <a
          href={SITE.inviteUrl}
          target="_blank"
          rel="noreferrer"
          className="panel group rounded-2xl p-6 transition-shadow duration-150 hover:shadow-border-hover"
        >
          <Send className="size-6 text-accent" />
          <h3 className="mt-4 text-2xl">Открыть текущий канал</h3>
          <p className="mt-2 text-sm text-muted">
            Инвайт-ссылка на HardDEV. Проекты, обновления ботов и билды игр.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Открыть инвайт
            <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>

        <div className="panel rounded-2xl p-6">
          <Smartphone className="size-6 text-accent" />
          <h3 className="mt-4 text-2xl">Написать в лс</h3>
          <p className="mt-2 text-sm text-muted">
            Ссылка на основной канал и вопросы по проектам — только через личку.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <a href={SITE.handleUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              {SITE.handle}
            </a>
            <button type="button" className="btn btn-ghost" onClick={copyHandle}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Скопировано" : "Копировать"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2">
          <Zap className="size-4 text-accent" />
          <span className="font-display text-lg tracking-wide">{SITE.name}</span>
          <span className="text-sm text-subtle">инди-девелопер</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
         
          <a
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-muted hover:text-fg"
          >
            <Github className="size-4" />
            GitHub
          </a>
          <a
            href={SITE.inviteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-muted hover:text-fg"
          >
            <Send className="size-4" />
            Telegram
          </a>
          <span className="inline-flex min-h-11 items-center gap-2 text-subtle">
            <Code2 className="size-4" />
            JS · Python · GDScript
          </span>
          <span className="inline-flex min-h-11 items-center gap-2 text-subtle">
            <Gamepad2 className="size-4" />
            Godot
          </span>
          <span className="inline-flex min-h-11 items-center gap-2 text-subtle">
            <Box className="size-4" />
            Minecraft
          </span>
        </div>
      </div>
    </footer>
  );
}

0


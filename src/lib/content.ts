export const SITE = {
  name: "HardDEV",
  handle: "@the_harddev",
  handleUrl: "https://t.me/the_harddev",
  inviteUrl: "https://t.me/+PvXRNGfWPyZjMzIy",
  githubUrl: "https://github.com/hardaicreator",
  tagline: "Канал начинающего инди-девелопера",
  kicker: "Telegram · Godot · JS · Python",
};

export type Kind = "all" | "game" | "bot" | "web" | "addon" | "tool";

export const KINDS: { id: Kind; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "game", label: "Игры" },
  { id: "bot", label: "Боты" },
  { id: "web", label: "Веб" },
  { id: "addon", label: "Аддоны" },
  { id: "tool", label: "Утилиты" },
];

export const STACK = [
  { group: "Языки", items: ["JavaScript", "Python", "GDScript"] },
  { group: "Движок", items: ["Godot"] },
  { group: "Хостинг", items: ["Firebase", "Render", "GitHub"] },
  { group: "Боты", items: ["BotFather"] },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  kind: Exclude<Kind, "all">;
  extraKinds?: Exclude<Kind, "all">[];
  engine: string;
  blurb: string;
  highlights: string[];
  image?: string;
  icon?: "type" | "calculator";
  links: ProjectLink[];
  fresh?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "backrooms",
    title: "The Backrooms",
    kind: "game",
    engine: "Godot",
    blurb:
      "Хоррор в лиминальных коридорах. Фонарик, три персонажа, лабиринт и портал, до которого нужно добраться.",
    highlights: [
      "Меню: играть, монстр, уровень, сложность",
      "Новый уровень «Лабиринт» и таймер спидрана",
      "Портал на финальном третьем уровне",
      "Новые звуки, скримеры и фикс бактерии",
    ],
    image: "/projects/backrooms.jpg",
    links: [{ label: "APK в канале", href: SITE.inviteUrl }],
    fresh: true,
  },
  {
    id: "last-coin",
    title: "The Last Coin",
    kind: "game",
    engine: "Godot",
    blurb: "Первая игра на Godot. Короткий инди-релиз — первая заявка как у разработчика.",
    highlights: ["Дебют на Godot", "Вышла в канале HardDEV"],
    image: "/projects/last-coin.jpg",
    links: [{ label: "Смотреть в канале", href: SITE.inviteUrl }],
  },
  {
    id: "mini-gta",
    title: "Mini GTA",
    kind: "game",
    extraKinds: ["bot", "web"],
    engine: "HTML · Telegram",
    blurb:
      "Мини-версия GTA на HTML: город, работы, магазин и телефон. Есть баги — и честно об этом написано.",
    highlights: [
      "Исправлены здания: окна и двери на своих местах",
      "Телефон: работа, магазин, статистика",
      "Таксист, дальнобойщик, механик, курьер",
      "Маркеры заданий и несколько заказов подряд",
    ],
    image: "/projects/mini-gta.jpg",
    links: [
      { label: "Открыть в браузере", href: "https://hardaicreator.github.io/Gta-mini-/" },
      { label: "Бот", href: "https://t.me/Ggftujnbot" },
    ],
    fresh: true,
  },
  {
    id: "tanks",
    title: "Tanks Battles",
    kind: "web",
    extraKinds: ["game"],
    engine: "Web",
    blurb: "Пробная 2D-битва танков. Сломалась — будет новая версия.",
    highlights: [
      "Веб-прототип",
      "Фикс экрана: на телефоне лучше открывать без режима ПК",
    ],
    image: "/projects/tanks.jpg",
    links: [{ label: "Играть", href: "https://hardaicreator.github.io/Tanks-battles/" }],
  },
  {
    id: "fitness",
    title: "Fitness Hard",
    kind: "bot",
    extraKinds: ["web"],
    engine: "Telegram · Web",
    blurb: "Приложение для нормативов и тренировок — в Telegram и на GitHub Pages.",
    highlights: ["Трекер нормативов", "Веб-версия и бот"],
    image: "/projects/fitness.jpg",
    links: [
      { label: "Бот", href: "https://t.me/fitneshardbot" },
      { label: "Сайт", href: "https://hardaicreator.github.io/Fitness-/" },
    ],
  },
  {
    id: "music",
    title: "Music Player",
    kind: "bot",
    extraKinds: ["web"],
    engine: "Telegram Mini App",
    blurb: "Многофункциональный плеер как мини-приложение в Telegram. Можно вынести ярлыком.",
    highlights: ["Мини-приложение", "Несколько способов открытия"],
    image: "/projects/music.jpg",
    links: [{ label: "Открыть бота", href: "https://t.me/MusPlayerWebTgbot" }],
  },
  {
    id: "passwords",
    title: "Генератор паролей",
    kind: "bot",
    engine: "Telegram",
    blurb: "Собирает надёжные пароли прямо в Telegram.",
    highlights: ["Быстрая генерация", "Бот обновлён под новую систему приложений"],
    image: "/projects/password.jpg",
    links: [{ label: "Открыть бота", href: "https://t.me/Generatetparolibot" }],
  },
  {
    id: "style-text",
    title: "STYLE TEXT",
    kind: "bot",
    engine: "Telegram",
    blurb: "Личный дизайнер ников: стильные буквы вместо обычного текста.",
    highlights: ["Генерация стилей для ников", "Вопросы: @KaifulikBro"],
    icon: "type",
    links: [{ label: "Открыть бота", href: "https://t.me/styletextmakerbot" }],
  },
  {
    id: "ai-assistant",
    title: "AI-ассистент",
    kind: "tool",
    engine: "Godot",
    blurb:
      "Свой ИИ-помощник на Godot. Есть общий лимит на всех пользователей, чат и смена модели.",
    highlights: [
      "Система смены ассистента",
      "Чат с комментариями",
      "Фикс нерабочих моделей, GPT стал быстрее",
    ],
    image: "/projects/ai.jpg",
    links: [{ label: "Подробности в канале", href: SITE.inviteUrl }],
  },
  {
    id: "golem",
    title: "Железный питомец",
    kind: "addon",
    engine: "Minecraft",
    blurb:
      "Моб-защитник: тамится слитком, следует за игроком, дерётся и подбирает лут в радиусе трёх блоков.",
    highlights: [
      "4 урона, не горит в лаве",
      "Защищает, если рядом бьют игрока",
      "При смерти — 1–2 железных слитка",
      "Сначала resource pack, затем behavior; нужны эксперименты и читы",
    ],
    image: "/projects/golem.jpg",
    links: [{ label: "Скачать в канале", href: SITE.inviteUrl }],
  },
  {
    id: "vault-calc",
    title: "Калькулятор-сейф",
    kind: "tool",
    engine: "Приложение",
    blurb:
      "Снаружи — обычный калькулятор с историей и тригонометрией. Внутри — закрытый раздел для приватных фото, если знать свой код.",
    highlights: [
      "Секретный код задаёте сами",
      "Подсказка «(?)» с инструкцией",
      "Долгое зажатие «(?)» сбрасывает код",
    ],
    icon: "calculator",
    links: [{ label: "Следить в канале", href: SITE.inviteUrl }],
    fresh: true,
  },
];

export const BOT_TIPS = [
  {
    title: "Кнопка мини-приложения",
    body: "У ботов слева внизу от поля «Сообщение» есть кнопка — название может отличаться. Через неё открывается само приложение.",
  },
  {
    title: "Режим для ПК",
    body: "По ссылке: открыть → справа сверху меню → «Открыть в браузере» → три точки → «режим для ПК». Для части игр на телефоне режим ПК лучше не включать.",
  },
];

export function projectMatches(project: Project, kind: Kind) {
  if (kind === "all") return true;
  return project.kind === kind || project.extraKinds?.includes(kind);
}

export type PalKey = "money" | "study" | "tutor" | "parent";

export const NAV_LINKS = [
  { label: "Problem", href: "/#problem" },
  { label: "Meet the PALs", href: "/#pals" },
  { label: "Money", href: "/#money" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Safe social", href: "/#safe-social" },
  { label: "Trust", href: "/#trust" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const PROBLEMS = [
  {
    no: "01",
    title: "Money went invisible.",
    body: "Kids don't touch cash — they tap, so the piggy-bank lessons no longer land.",
    stat: { from: "~70%", to: "~13%", label: "Cash as a share of payments, 2007 → today" },
    icon: "invisible",
  },
  {
    no: "02",
    title: "Money, but no money sense.",
    body: "Most kids get money long before they understand saving, interest or value.",
    stat: null,
    icon: "sense",
  },
  {
    no: "03",
    title: "Childhood is fragmented.",
    body: "Dozens of disconnected, addictive, data-hungry apps compete for attention.",
    stat: { from: "84%", to: null, label: "of 8–12s are already on social" },
    icon: "fragmented",
  },
  {
    no: "04",
    title: "Payments alone is a dead end.",
    body: "A youth bank must be the last mile to everything a young person needs — or someone else owns the day.",
    stat: null,
    icon: "deadend",
  },
] as const;

export const PALS: {
  key: PalKey;
  name: string;
  role: string;
  quote: string;
  colorVar: string;
  soft: string;
}[] = [
  {
    key: "money",
    name: "MoneyPal",
    role: "Financial coach",
    quote: "Let's save for that LEGO.",
    colorVar: "var(--money)",
    soft: "var(--money-soft)",
  },
  {
    key: "study",
    name: "StudyPal",
    role: "Study companion",
    quote: "Ready for a five-minute interview?",
    colorVar: "var(--study)",
    soft: "var(--study-soft)",
  },
  {
    key: "tutor",
    name: "TutorPal",
    role: "Subject tutor",
    quote: "Algebra, again — your way.",
    colorVar: "var(--tutor)",
    soft: "var(--tutor-soft)",
  },
  {
    key: "parent",
    name: "ParentPal",
    role: "Family coordinator",
    quote: "Here's how today went.",
    colorVar: "var(--parent)",
    soft: "var(--parent-soft)",
  },
];

export const UPCOMING_PALS = ["CareerPal", "HealthPal", "CoachPal", "FashionPal"];

export const TIMELINE = [
  {
    time: "07:30",
    tag: "Morning",
    body: "Oliver starts his own day — his schedule's there if he wants it, but StudyPal stays quiet until he asks.",
    icon: "sun",
  },
  {
    time: "08:45",
    tag: "Walk to school",
    body: "He decides to warm up for the quiz: a five-minute back-and-forth on his terms, then he puts it away.",
    icon: "walk",
  },
  {
    time: "14:15",
    tag: "At the shops",
    body: "Oliver scans a few products to spot the healthier pick — and earns rewards for choosing well.",
    icon: "cart",
  },
  {
    time: "18:00",
    tag: "Tutor",
    body: "Stuck on a subject, he asks for help. TutorPal runs a few flashcards, then quizzes him back — voice-first, never in the way.",
    icon: "book",
  },
  {
    time: "19:15",
    tag: "Dinner",
    body: "Phones down. The family talks about the day, no app in the room. BrainPal has nothing to add, and doesn't try.",
    icon: "dinner",
  },
  {
    time: "20:00",
    tag: "Night",
    body: "Oliver tries for one more chat — but the day's done. BrainPal signs off, quiet until morning.",
    icon: "moon",
  },
];

export const MONEY_CHIPS = [
  "Allowance",
  "Savings",
  "Chores",
  "Interest",
  "Goals",
  "Cards",
  "Payments",
  "Rewards",
];

export type ChatMessage = {
  from: PalKey | "oliver" | "parent";
  author: string;
  joined?: boolean;
  text: string;
};

export const CHAT_SCRIPT: ChatMessage[] = [
  { from: "oliver", author: "Oliver", text: "Can I buy this LEGO set?" },
  {
    from: "money",
    author: "MoneyPal",
    joined: true,
    text: "That's $45. You've got $30 saved. Want to set a goal for the last $15?",
  },
  { from: "parent", author: "Parent", text: "Create a $10 chore for Oli." },
  {
    from: "parent",
    author: "ParentPal",
    joined: true,
    text: "Done. $15 bonus if you help organise the garage this weekend.",
  },
  { from: "oliver", author: "Oliver", text: "Also — help me revise science." },
  {
    from: "study",
    author: "StudyPal",
    joined: true,
    text: "Based on your previous tests, photosynthesis is on tomorrow's quiz. Want flashcards to practise? I'll interview you live tomorrow at 4pm.",
  },
];

export const HOW_IT_WORKS = [
  {
    no: "1",
    title: "Parents set the rules.",
    body: "Funding, limits, approvals — once, in plain language.",
    icon: "rules",
  },
  {
    no: "2",
    title: "Kids act, BrainPal teaches.",
    body: "A payment, a chore, a study task — a quick lesson wraps the moment.",
    icon: "act",
  },
  {
    no: "3",
    title: "A reward flows.",
    body: "BrainCoins, savings boosts, real-world rewards — always under parent authority.",
    icon: "reward",
  },
];

export const TESTIMONIALS = [
  {
    quote: "My 11-year-old finally gets that money runs out.",
    name: "Emma M.",
    city: "Melbourne",
    initials: "EM",
  },
  {
    quote: "My kids scan and ask before buying now.",
    name: "Daniel K.",
    city: "Brisbane",
    initials: "DK",
  },
  {
    quote: "I approve every cent — total peace of mind.",
    name: "Sarah R.",
    city: "Perth",
    initials: "SR",
  },
];

export const FAQS = [
  {
    q: "What ages?",
    a: "Built for 8–17; guidance grows with them.",
  },
  {
    q: "Can the PALs spend my money?",
    a: "Never alone — money moves only when a parent approves.",
  },
  {
    q: "How do rewards work?",
    a: "100 BrainCoins = $1, in real, parent-approved spending power.",
  },
  {
    q: "Is our data safe?",
    a: "Bank-grade security, privacy-first. We never sell it.",
  },
  {
    q: "When does it launch?",
    a: "Rolling out to Aussie families soon — join the waitlist.",
  },
];

export const THESIS = [
  "We are not building another youth bank.",
  "We are not building just another tutoring app.",
  "We are not building another social network.",
];

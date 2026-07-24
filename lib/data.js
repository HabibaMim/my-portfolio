// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize the whole site.
// Everything the components render is pulled from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Habiba Kumkum Mim",
  designation: "MERN Stack Developer",
  tagline:
    "I build fast, clean, full-stack web apps with the MERN stack and Next.js.",
  location: "Dhaka, Bangladesh",
  roles: [
  "MERN Stack Developer",
  "Front-End Developer",
  "Next.js Enthusiast",
  "Problem Solver",
],
  photo: "/profile.jpg", // replace with your own photo in /public
  resumeUrl: "/resume.pdf", // drop your resume.pdf in /public to enable the download
  email: "your.email@example.com",
  phone: "+880 1XXX-XXXXXX",
  whatsapp: "+880 1XXX-XXXXXX",
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
    { label: "Facebook", href: "https://facebook.com/yourusername", icon: "facebook" },
  ],
};

export const about = {
  paragraphs: [
    "I started my programming journey as a web development student, learning by building — course by course, bug by bug. What began as curiosity about how websites work turned into a genuine habit of shipping full-stack projects with the MERN stack and the Next.js ecosystem.",
    "I enjoy the front-end most: turning a rough idea into an interface that feels obvious to use, then wiring it up to a real database and real auth so it actually works end to end. I like projects with a clear user role — a tenant, a buyer, an admin — because that's where UI decisions start to matter.",
    "Outside the editor, I'm still debugging things — just less code and more life. I like keeping a tidy process, sketching out logos and small brand assets for my own projects, and generally over-designing things that didn't strictly need it.",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "DaisyUI / HeroUI", level: 80 },
      { name: "Framer Motion", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 84 },
      { name: "REST APIs", level: 85 },
      { name: "Better Auth / JWT", level: 75 },
      { name: "Stripe Payments", level: 68 },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Vercel Deployment", level: 82 },
      { name: "Recharts", level: 65 },
      { name: "Figma", level: 60 },
      { name: "VS Code", level: 92 },
      { name: "PowerShell / CLI", level: 78 },
    ],
  },
];

export const education = [
  {
    degree: "Web Development Program",
    institution: "Programming Hero",
    period: "In progress",
    details:
      "Intensive, project-based web development track covering the MERN stack — building full-stack assignments with real authentication, payments, and role-based dashboards.",
  },
  // Add earlier academic qualifications (Bachelor's, HSC, etc.) here if applicable.
];

export const experience = [
  {
    role: "Independent Full-Stack Projects",
    place: "Self-directed / Coursework",
    period: "Ongoing",
    points: [
      "Designed and built multiple full-stack MERN/Next.js applications with role-based dashboards (admin, owner/seller, tenant/buyer).",
      "Implemented authentication (Better Auth, JWT/JWKS) and payment flows (Stripe) end to end.",
      "Iterated on UI systems using Tailwind, DaisyUI, and HeroUI across several projects for a consistent, polished feel.",
    ],
  },
  // Add professional/internship experience here when available.
];

export const projects = [
  {
    slug: "rentnest",
    name: "RentNest",
    tagline: "Rental property platform with role-based dashboards",
    image: "/projects/rentnest.jpg",
    stack: ["Next.js 15", "Express.js", "MongoDB", "Better Auth", "Stripe", "Tailwind v4", "DaisyUI v5", "HeroUI", "Framer Motion", "Recharts"],
    description:
      "A full-stack rental property platform with three distinct user roles — admin, owner, and tenant — each with their own protected dashboard. Owners list and manage properties, tenants browse, favorite, and book them, and the whole booking flow runs through a real Stripe checkout with server-side payment verification.",
    liveUrl: "https://example.com/rentnest",
    githubUrl: "https://github.com/yourusername/rentnest-client",
    challenges:
      "Getting role-based middleware right across three dashboards took a few passes — early versions leaked routes between roles. Better Auth's JWT/JWKS setup was also finicky in a serverless environment, and Vercel's edge caching initially served stale data until routes were explicitly marked as dynamic.",
    improvements:
      "Plans include adding a review-moderation queue for admins, richer analytics for owners (occupancy trends via Recharts), and moving image uploads to a dedicated CDN pipeline instead of static URLs.",
  },
  {
    slug: "studynook",
    name: "StudyNook",
    tagline: "Study room booking platform",
    image: "/projects/studynook.jpg",
    stack: ["Next.js", "Express.js", "MongoDB", "Better Auth", "Tailwind", "Vercel"],
    description:
      "A booking platform for study rooms, with a Next.js frontend and an Express.js API, both deployed on Vercel. Users can search and filter available rooms and complete a full JWT-authenticated booking flow via server actions.",
    liveUrl: "https://example.com/studynook",
    githubUrl: "https://github.com/yourusername/studynook-client",
    challenges:
      "Express routes registered inside async functions worked locally but broke on Vercel's serverless runtime, which took some digging to trace. CORS and JWKS fetch failures between the separately-deployed frontend and backend were another recurring source of bugs, along with search/filtering logic that needed MongoDB's $elemMatch to work correctly against nested fields.",
    improvements:
      "Next steps are adding real-time seat availability updates, a waitlist system for fully booked rooms, and consolidating the split frontend/backend deploys to simplify environment configuration.",
  },
  {
    slug: "suncart",
    name: "SunCart",
    tagline: "Summer essentials e-commerce store",
    image: "/projects/suncart.jpg",
    stack: ["Next.js", "Better Auth", "MongoDB Atlas", "HeroUI", "DaisyUI"],
    description:
      "An e-commerce storefront for summer essentials, built with Next.js and backed by MongoDB Atlas. Covers full auth flows, a browsable product catalog, and a custom brand identity designed from scratch, including the SunCart logo.",
    liveUrl: "https://example.com/suncart",
    githubUrl: "https://github.com/yourusername/suncart-client",
    challenges:
      "Wiring up Better Auth cleanly with the Next.js App Router surfaced a handful of routing and Tailwind configuration issues, especially around protected client routes and consistent theming across HeroUI and DaisyUI components used together.",
    improvements:
      "Planned improvements include a proper cart-persistence layer, order history for logged-in users, and an admin panel for managing inventory instead of static seed data.",
  },
  {
    slug: "gigsverse",
    name: "GigsVerse",
    tagline: "Freelance gig marketplace",
    image: "/projects/gigsverse.jpg",
    stack: ["Next.js", "DaisyUI", "Tailwind"],
    description:
      "A freelance marketplace where people can post gigs and browse others' services. Built with a dark DaisyUI theme and a pink accent, with a dedicated How-It-Works flow for both buyers (browse, order, get it done) and sellers (become a seller, list a gig, start earning).",
    liveUrl: "https://example.com/gigsverse",
    githubUrl: "https://github.com/yourusername/gigsverse-client",
    challenges:
      "Designing a single How-It-Works component that reads clearly for two very different user journeys (buying vs. selling) without feeling cluttered took several layout iterations.",
    improvements:
      "Future plans include gig reviews and ratings, an in-app messaging system between buyers and sellers, and search/filtering by category and price.",
  },
];

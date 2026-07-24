
export const profile = {
  name: "Habiba Kumkum Mim",
  designation: "MERN Stack Developer",
  tagline:
    "Transforming ideas into modern and responsive web applications using MERN stack and Next.js",
  location: "Dhaka, Bangladesh",
  roles: [
  "MERN Stack Developer",
  "Full Stack Web Developer",
  "Problem Solver",
],
  photo: "", // replace with your own photo in /public
  resumeUrl: "/", // drop your resume.pdf in /public to enable the download
  email: "habibakumkum02@gmail.com",
  
  socials: [
    { label: "GitHub", href: "https://github.com/HabibaMim", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/habibakumkum", icon: "linkedin" },
   
  ],
};

export const about = {
  paragraphs: [

"I'm a passionate MERN Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I completed a intensive 6 month long course on web development which was challenging but helped me grow as a developer . I specialize in React, Next.js, Node.js, Express.js, MongoDB, and JavaScript, with a focus on writing clean, maintainable and user-friendly code.",

"I enjoy turning ideas into real-world applications by creating intuitive user interfaces and efficient backend systems. Whether I'm developing a full-stack project or learning a new technology, I'm always focused on improving my skills and delivering high-quality solutions.",

"Outside of Programming I enjoy to knit as a hobby.",

"I'm currently seeking opportunities to contribute to meaningful projects, collaborate with talented teams, and continue growing as a developer."
,
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "DaisyUI / HeroUI", level: 80 },
  
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
     
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "GitHub", level: 88 },
      { name: "Vercel Deployment", level: 82 },
    

      { name: "VS Code", level: 92 },
  
    ],
  },
];

export const education = [
  {
    degree: "BSc. in Electrical And Electronic Engineering",
    institution: "Ahsanullah University Of Science And Technology",
    period: "2018-2022",
    details:
      "Built a solid engineering background with a strong foundation in mathematics, analytical reasoning, critical thinking, and problem-solving. Participated in academic projects that strengthened applying logical approaches to solve complex challenges and project management skills.",
  },
  // Add earlier academic qualifications (Bachelor's, HSC, etc.) here if applicable.
];

export const experience = [
  {
    role: "Front-End AI Engineer - Internship",
    place: "FlyRank AI",
    period: "July 2026- Present",
    points: [
    "Preparing to work on real-world tasks while expanding my knowledge of AI tools, workflows, and software development practices.",
    ],
  },
  // Add professional/internship experience here when available.
];

export const projects = [
  {
    slug: "rentnest",
    name: "RentNest",
    tagline: "Rental property platform with role-based dashboards",
    image: "/projects/rentnest1.png",
    stack: ["Next.js 15", "Express.js", "MongoDB", "Better Auth", "Stripe", "Tailwind v4", "DaisyUI v5", "HeroUI", "Framer Motion", "Recharts"],
    description:
      "A full-stack rental property platform with three distinct user roles — admin, owner, and tenant — each with their own protected dashboard. Owners list and manage properties, tenants browse, favorite, and book them, and the whole booking flow runs through a real Stripe checkout with server-side payment verification.",
    liveUrl: "https://rentnest-snowy.vercel.app",
    githubUrl: "https://github.com/HabibaMim/RentNest-B13-A10-client",
    challenges:
      "Getting role-based middleware right across three dashboards took a few passes — early versions leaked routes between roles. Better Auth's JWT/JWKS setup was also finicky in a serverless environment, and Vercel's edge caching initially served stale data until routes were explicitly marked as dynamic.",
    improvements:
      "Plans include adding a review-moderation queue for admins, richer analytics for owners (occupancy trends via Recharts), and moving image uploads to a dedicated CDN pipeline instead of static URLs.",
  },
  {
    slug: "studynook",
    name: "StudyNook",
    tagline: "Study room booking platform",
    image: "/projects/studynook.png",
    stack: ["Next.js", "Express.js", "MongoDB", "Better Auth", "Tailwind", "Vercel"],
    description:
      "A booking platform for study rooms, with a Next.js frontend and an Express.js API, both deployed on Vercel. Users can search and filter available rooms and complete a full JWT-authenticated booking flow via server actions.",
    liveUrl: "https://studynook-liart-rho.vercel.app",
    githubUrl: "https://github.com/HabibaMim/StudyNook-B13-A9-client",
    challenges:
      "Express routes registered inside async functions worked locally but broke on Vercel's serverless runtime, which took some digging to trace. CORS and JWKS fetch failures between the separately-deployed frontend and backend were another recurring source of bugs, along with search/filtering logic that needed MongoDB's $elemMatch to work correctly against nested fields.",
    improvements:
      "Next steps are adding real-time seat availability updates, a waitlist system for fully booked rooms, and consolidating the split frontend/backend deploys to simplify environment configuration.",
  },
  {
    slug: "gigsverse",
    name: "GigsVerse",
    tagline: "Freelance gig marketplace",
    image: "/projects/gigsverse2.png",
    stack: ["Next.js", "DaisyUI", "Tailwind"],
    description:
      "A freelance marketplace where people can post gigs and browse others' services. Built with a dark DaisyUI theme and a pink accent, with a dedicated How-It-Works flow for both buyers (browse, order, get it done) and sellers (become a seller, list a gig, start earning).",
    liveUrl: "https://gigsverse-client.vercel.app",
    githubUrl: "https://github.com/HabibaMim/SCIC5-client",
    challenges:
      "Designing a single How-It-Works component that reads clearly for two very different user journeys (buying vs. selling) without feeling cluttered took several layout iterations.",
    improvements:
      "Future plans include gig reviews and ratings, an in-app messaging system between buyers and sellers, and search/filtering by category and price.",
  },
];

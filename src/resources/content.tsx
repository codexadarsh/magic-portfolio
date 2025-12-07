import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Adarsh",
  lastName: "Maurya",
  name: "Adarsh Maurya",
  role: "Full-stack MERN Developer",
  avatar: "/images/avatar.jpg",
  email: "mauryaadarsh793@gmail.com",
  // Keep this as a valid IANA time zone identifier for features that depend on it
  location: "Asia/Kolkata",
  // Shown on the site – added Marathi from your resume
  languages: ["English", "Hindi", "Marathi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      A practical newsletter on React, MERN, performance and real-world web
      apps.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/codexadarsh", // from your GitHub repo slug
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    // TODO: replace with your actual LinkedIn profile URL
    link: "https://www.linkedin.com/in/codexadarsh",
    essential: true,
  },
  {
    name: "X",
    icon: "x", // make sure this icon exists in /once-ui/icons.ts
    // TODO: replace with your real X/Twitter URL
    link: "https://x.com/codexadarsh",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building fast, clean and reliable web experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Movie Discovery</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    // Make sure you have a matching MDX page for this slug
    href: "/work/movie",
  },
  subline: (
    <>
      I'm Adarsh, a full-stack MERN developer and Shopify/React intern at{" "}
      <Text as="span" size="xl" weight="strong">
        PulseX Media
      </Text>
      , building scalable systems and modern React apps. After hours, I ship my
      own projects and refine my craft.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  // Don’t use person.location here because it’s a time zone ID
  description: `Meet ${person.name}, a ${person.role} based in Mumbai, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    // TODO: replace with your real Cal.com or other booking link
    link: "https://cal.com/adarshmaurya",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Adarsh is a Mumbai-based full-stack MERN developer focused on building
        scalable systems, optimized backends, and modern React applications. He
        cares about clean architecture, performance, and shipping
        production-ready products that solve real-world problems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PulseX Media Solutions LLP",
        timeframe: "July 2025 – Sept 2025",
        role: "Shopify & React Web Development Intern",
        achievements: [
          "Built custom Shopify sections and React components, improving client storefront performance and UX.",
          "Implemented optimizations like lazy loading, memoization, and reusable UI components to enhance navigation speed.",
          "Collaborated with designers and backend teams to ship responsive, high-performing e-commerce features.",
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "PulseX Media storefront UI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Personal Projects",
        timeframe: "2024 – Present",
        role: "Full-stack MERN Developer",
        achievements: [
          <>
            Built <strong>Movie Discovery</strong>, a React app with debounced
            search, infinite scroll and mood-based recommendations.
          </>,
          <>
            Created a <strong>Password Manager</strong> with secure password
            generation, strength indicators and a clean UI.
          </>,
          <>
            Developed a <strong>MERN Job Portal</strong> with full CRUD for jobs
            and applications using React, Node.js, Express and MongoDB.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Mumbai",
        description: (
          <>Bachelor of Computer Science (July 2023 – April 2026).</>
        ),
      },
      {
        name: "Maharashtra State Board",
        description: (
          <>Higher Secondary Education (July 2021 – March 2023), Mumbai.</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <>
            Building modern interfaces with React, Next.js, Tailwind CSS and
            TypeScript, focused on performance and DX.
          </>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind CSS", icon: "tailwind" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Frontend project UI",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & Databases",
        description: (
          <>
            Building APIs and scalable backends with Node.js, Express, MongoDB
            and Supabase, deployed on Vercel/Netlify.
          </>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express", icon: "express" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Supabase", icon: "supabase" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Backend and API architecture",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about React, MERN and web performance...",
  description: `Read what ${person.name} has been building and learning recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack and frontend projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

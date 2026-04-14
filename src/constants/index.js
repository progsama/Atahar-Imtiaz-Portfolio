const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Resume",
    link: "#resume",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const abilities = [
  {
    imgPath: "/images/ideas.svg",
    title: "C² Hacks — 2nd Place",
    desc: "Reimagined Instagram for disaster response with an SOS mode for close contacts and a resource map for shelters and emergency services.",
  },
  {
    imgPath: "/images/concepts.svg",
    title: "Outstanding International Student Scholarship",
    desc: "Recognized for outstanding academic achievement and impact during admissions.",
  },
  {
    imgPath: "/images/designs.svg",
    title: "VP Events — Coding Club",
    desc: "Built and ran a semester-long lineup of workshops, hackathons, and guest talks—handling logistics, vendors, and promotion to keep turnout consistently high.",
  },
  {
    imgPath: "/images/code.svg",
    title: "Musician",
    desc: "I play guitar, keyboard, and drums, and I've performed live a few times.",
  },
  {
    imgPath: "/images/logos/React.svg",
    title: "Game Developer",
    desc: "I make small indie games in my free time, mostly quick prototypes and mini builds.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/React.svg",
  },
  {
    name: "Java Developer",
    imgPath: "/images/logos/Java.png",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Unity Developer",
    imgPath: "/images/logos/Unity.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Data Analytics",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.png",
  },
  {
    name: "SpringBoot Developer",
    imgPath: "/images/logos/springboot.svg",
  },
  {
    name: "Cloud Deployment",
    imgPath: "/images/logos/aws.svg",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ataharimtiaz/",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    url: "https://github.com/progsama",
    imgPath: "/images/github.webp",
  },
];

const projects = [
  {
    id: "masher",
    link: "https://github.com/progsama/MASHER",
    image: "/images/TA.webp",
    imageAlt: "TA Allocation and Management System",
    title:
      "MASHER (Capstone Project) is a comprehensive Teaching Assistant (TA) allocation system designed to streamline the process of managing and assigning teaching assistants in an academic environment. The system handles TA applications, scheduling, assignments, and administrative tasks through a modern web interface.",
    stack:
      "A full-stack app built with Next.js, Tailwind CSS, and PostgreSQL (Drizzle), deployed with Docker behind Nginx for performance and stability.",
  },
  {
    id: "AI",
    link: "https://github.com/progsama/ParseCraft",
    image: "/images/ParseCraft.png",
    imageAlt: "ParseCraft - AI-Powered Code Analysis and Generation Tool",
    title:
      "AI-powered document analysis tool that extracts tone and generates style-aware summaries from pasted text or uploaded documents.",
    stack:
      "Built a full-stack AI document analysis tool using Next.js 16 / React 19 / TypeScript / Tailwind CSS on the frontend and Java 17 / Spring Boot on the backend, integrating Gemini/OpenAI APIs for tone detection and style-aware summarization, with document parsing via Apache PDFBox & POI, containerized with Docker, and deployed on AWS S3 + CloudFront (frontend) and AWS App Runner (backend).",
    bgClass: "bg-[#FFEFDB]",
  },
  {
    id: "rpg",
    link: "https://github.com/progsama/Almost-Text-Based-RPG-Dungeon-Crawler-",
    image: "/images/Almost Text Based.png",
    imageAlt: "Almost Text Based RPG",
    title:
      "A browser-based RPG with user accounts, dungeon gameplay, inventory, shop, and leaderboard.",
    stack:
      "An app built with Vue 3 + Vite (Vue Router, Pinia, Axios, VueUse) and a Node/Express backend with PostgreSQL 15, using JWT + bcryptjs for secure authentication.",
    bgClass: "bg-[#FFEFDB]",
  },
  {
    id: "portfolio",
    link: "https://github.com/progsama/Atahar-Imtiaz-Portfolio",
    image: "/images/portfolio.png",
    imageAlt: "Portfolio Website",
    title:
      "This portfolio site showcases projects, technical strengths, resume, and contact details of Atahar Imtiazwith a responsive UI and a lightweight 3D hero experience.",
    stack:
      "Built with React 19, Vite 7, Tailwind CSS 4, GSAP, and Three.js (React Three Fiber + Drei), with EmailJS integration and deployed on Vercel.",
    bgClass: "bg-[#FFEFDB]",
  },
  {
    id: "discord",
    link: "https://github.com/progsama/Discord-Clone",
    image: "/images/Discord.png",
    imageAlt: "Discord Clone",
    title:
      "The Discord Clone Project HAM is a project meant for online social networking platform that supports users to build and manage communities, connect with each other, and make new friends all through our platform and its user-friendly design that's meant for engaging conversations and seamless interactions.",
    stack:
      "A Discord-style app built with Next.js 13 (React + TypeScript) + Tailwind CSS, using Prisma + MySQL for data, Clerk for auth, and Socket.IO + LiveKit for real-time chat + calls.",
    bgClass: "bg-[#FFEFDB]",
  },
  {
    id: "platformer",
    link: "https://github.com/progsama/SimplePlatformer",
    image: "/images/SimplePlatformer.png",
    imageAlt: "Simple Platformer Game",
    title:
      "A 3D platformer game built in Unity. Move through the level, collect coins, and reach the goal.",
    stack:
      "Unity | C# | 3D Game Development | Level Design | Player Movement | Collectibles | Game Mechanics",
    bgClass: "bg-[#FFEFDB]",
  },
];

export { words, abilities, socialImgs, techStackImgs, navLinks, projects };

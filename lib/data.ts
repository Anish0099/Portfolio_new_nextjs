import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import aiNotion from "@/public/ai_notion.png";
import blog_app from "@/public/blog_app.png";
import videoGallery from "@/public/video_gallery_pr.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "SIH Hackathon 2023",
    location: "Odisha, India",
    description:
      "I got selected as a part of the biggest national level hackathon in india and obtained 4th position in it. I also worked on the frontend part of the project.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Kavach hackathon",
    location: "Bhubaneswar, Odisha",
    description:
      "Participated in the cyber security hackathon ,  where i workrd as an frontend developer and worked on the frontend part of the project.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "AiNotion",
    link:"https://github.com/Anish0099/ainotion",
    description:
      "Basically a Notion clone. I have added some new Ai features like autocomplete and image generation.",
    tags: ["React", "Next.js", "NeonDB", "Tailwind", "Drizzle"],
    imageUrl: aiNotion,
  },
  {
    title: "BlogApp",
    link:"https://github.com/Anish0099/fullstack-blog-website",
    description:
      "A blog app with user authentication. This is a fullstack project with better user experience and fast rendering.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "NeonDB"],
    imageUrl: blog_app,
  },
  {
    title: "Video Gallery",
    link:"https://github.com/Anish0099/pair-coding",
    description:
      "A public web app for posting the personal videos. This is a fullstack project with better user experience and fast rendering.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: videoGallery,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;

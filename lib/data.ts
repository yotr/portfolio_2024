import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// projects images
import hr from "@/public/projects/hr.png";
import food from "@/public/projects/food.png";
import ecomerce from "@/public/projects/e-commerce.png";
import netflix from "@/public/projects/netflix.png";
import disney from "@/public/projects/disney.png";
import coffee from "@/public/projects/coffee.png";
import read from "@/public/projects/myread.png";
import chat from "@/public/projects/chat.png";
import zoom from "@/public/projects/zoom.png";

// netflix images
import netflix1 from "@/public/projects/netflix/1.png";
import netflix2 from "@/public/projects/netflix/2.png";
import netflix3 from "@/public/projects/netflix/3.png";
import netflix4 from "@/public/projects/netflix/4.png";
import netflix5 from "@/public/projects/netflix/5.png";
import netflix6 from "@/public/projects/netflix/6.png";
import netflix7 from "@/public/projects/netflix/7.png";
import netflix8 from "@/public/projects/netflix/8.png";

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
    title: "Computer Science",
    location: "o6u university",
    description:
      "Bachelor of Computer Science at October 6 University , Major : CS Honors: Par Excellence - GPAS : 3.68 / 4.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 – 2022",
  },
  {
    title: "Udacity",
    location: "online",
    description: "React Development Cross-Skilling, Udacity.",
    icon: React.createElement(FaReact),
    date: "Aug 2022 – Sept 2022",
  },
  {
    title: "Front-End Developer",
    location: "aktitec, company",
    description:
      "I am working as a front-end developer (Angular Front-End Developer). I also up skilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    id: 0,
    title: "Smart HR Frontend",
    description:
      "Smart Hr is a intelligent and user-friendly solution that offers many kinds of technology modules to help in automating your human resource practices.",
    tags: ["Angular", "Css3"],
    imageUrl: hr,
    images: [],
  },
  {
    id: 1,
    title: "Food Ordering Frontend",
    description:
      "Food Ordring App Contain Login/Register, Foods, Cart and Checkout Page.",
    tags: ["Angular", "Css3", "Font-Awesome", "Api"],
    imageUrl: food,
    images: [],
  },
  {
    id: 2,
    title: "E-Commerce Full Stack",
    description:
      "The structured and fascinating look of a website can visualize your products.",
    tags: ["React", "Css3 ", "Tailwind", "Redux", "Nodejs"],
    imageUrl: ecomerce,
    images: [],
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "netflix clone web app home page and movies page using tmdb api.",
    tags: ["React", "Css3", "Api", "Tailwind"],
    imageUrl: netflix,
    images: [
      netflix1,
      netflix2,
      netflix3,
      netflix4,
      netflix5,
      netflix6,
      netflix7,
      netflix8,
    ],
  },
  {
    id: 4,
    title: "Disney Clone",
    description:
      "diseny clone web app home page and movies page using tmdb api.",
    tags: ["Next.js", "Css3", "Api"],
    imageUrl: disney,
    images: [],
  },
  {
    id: 5,
    title: "Coffee Resposive site",
    description:
      "coffee landing page responsive design using animation for all sections.",
    tags: ["Html5", "Css3", "js"],
    imageUrl: coffee,
    images: [],
  },
  {
    id: 6,
    title: "MY Read App",
    description:
      "My Read application  fetching data from API  handled the data and search.",
    tags: ["React", "Css3", "Api"],
    imageUrl: read,
    images: [],
  },
  {
    id: 7,
    title: "Real Time Chat App",
    description:
      "Real time chat, also known as online chat or internet chat, is a way of communication and interaction in real time on the Internet.",
    tags: ["Next.js", "Tailwind", "Shadcn/Ui", "Socket.io", "Node.js"],
    imageUrl: chat,
    images: [],
  },
  {
    id: 8,
    title: "Video Conference (Zoom Clone) ",
    description:
      "Video conferencing is a technology that allows users in different locations to hold real-time face-to-face meetings, often at little to no cost.",
    tags: ["Next.js", "Tailwind", "Shadcn/Ui", "Stream (Third Party)"],
    imageUrl: zoom,
    images: [],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Redux",
  "Git",
  "Tailwind",
  "Bootstrap",
] as const;

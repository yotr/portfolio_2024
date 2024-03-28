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

// import corpcommentImg from "@/public/projects/corpcomment.png";
// import rmtdevImg from "@/public/projects/rmtdev.png";
// import wordanalyticsImg from "@/public/projects/wordanalytics.png";

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
      "I worked as a front-end developer for 2 years in 1 job (Angular Front-End Developer). I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Smart HR Frontend",
    description:
      "Smart Hr is a intelligent and user-friendly solution that offers many kinds of technology modules to help in automating your human resource practices.",
    tags: ["Angular", "Css3"],
    imageUrl: hr,
  },
  {
    title: "Food Ordering Frontend",
    description:
      "Food Ordring App Contain Login/Register, Foods, Cart and Checkout Page.",
    tags: ["Angular", "Css3", "Font-Awesome", "Api"],
    imageUrl: food,
  },
  {
    title: "E-Commerce Full Stack",
    description:
      "The structured and fascinating look of a website can visualize your products.",
    tags: ["React", "Css3 ", "Tailwind", "Redux", "Nodejs"],
    imageUrl: ecomerce,
  },
  {
    title: "Netflix Clone",
    description:
      "netflix clone web app home page and movies page using tmdb api.",
    tags: ["React", "Css3", "Api", "Tailwind"],
    imageUrl: netflix,
  },
  {
    title: "Disney Clone",
    description:
      "diseny clone web app home page and movies page using tmdb api.",
    tags: ["Next.js", "Css3", "Api"],
    imageUrl: disney,
  },
  {
    title: "Coffee Resposive site",
    description:
      "coffee landing page responsive design using animation for all sections.",
    tags: ["Html5", "Css3", "js"],
    imageUrl: coffee,
  },
  {
    title: "MY Read App",
    description:
      "My Read application  fetching data from API  handled the data and search.",
    tags: ["React", "Css3", "Api"],
    imageUrl: read,
  },
  {
    title: "Real Time Chat App",
    description:
      "Real time chat, also known as online chat or internet chat, is a way of communication and interaction in real time on the Internet.",
    tags: ["Next.js", "Tailwind", "Shadcn/Ui", "Socket.io", "Node.js"],
    imageUrl: chat,
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

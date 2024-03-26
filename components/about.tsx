"use client";

import React from "react";
import { motion } from "framer-motion";
import Heading from "./heading";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About Me</Heading>
      <p className="mb-3">
        After graduating with a degree in
        <span className="font-medium"> Computer Science</span>, I decided to
        pursuing my passion for programming. I started my programming field as a
        front-end web developer learned
        <span className="font-medium">front-end web development</span>, who
        creates and designs different websites for clients. Recognized for
        leadership and collaborative abilities when working in a team setting.
        Motivation to provide customers with easy-to-use applications.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and design. I
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is
        <span className="font-medium">Angular, React, Next.js, Node.js</span>. I
        am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a
        <span className="font-medium">position</span> as a software developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        <span className="font-medium"> learning new things</span>.
      </p>
    </motion.section>
  );
}

export default About;

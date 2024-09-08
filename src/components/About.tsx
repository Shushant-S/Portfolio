"use client";
import { useState, useTransition, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import ImageSwiper from "./ImageSwiper";
import about from "@/assets/about.png";
import { SiCodechef, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

const About = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  const variants1 = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-[80px] sm:px-6" id="about">
      <motion.div
        ref={refHeading}
        variants={variants1}
        initial="initial"
        animate={inViewHeading ? "animate" : "initial"}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          About Me
        </h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-textWhite"></div>
      </motion.div>
      <div className="mt-16 flex flex-col items-center justify-between gap-10 py-6 lg:flex-row">
        <motion.div
          ref={refContent}
          initial={{
            opacity: 0,
            x: -100,
            scale: 0.8,
            filter: "blur(6px)",
          }}
          animate={
            inViewContent
              ? {
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }
              : { opacity: 1, x: -100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src={about}
            alt="About"
            width={300}
            height={400}
            className="size-[300px] rotate-[2.5deg] cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-[1.02] sm:size-[350px]"
            priority
          />
        </motion.div>
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={
            inViewContent
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: 100, scale: 0.8 }
          }
          transition={{ duration: 0.8 }}
          className="flex-1 xl:px-4"
        >
          <p>
            I&apos;m{" "}
            <span className="font-semibold text-heading"> Shushant Sarve </span>
            , a passionate software developer. I have hands-on
            experience in crafting seamless web applications, with expertise
            spanning across frontend technologies like React.js and Next.js,
            coupled with backend proficiency in Node.js and Express.js. <br />{" "}
            From enhancing user interfaces to optimizing backend performance, I
            specialize in delivering robust, scalable, and user-friendly
            solutions. My passion for staying ahead in the tech world drives me
            to integrate innovative approaches into every project, ensuring
            efficient and effective outcomes.
          </p>
          <div className="mt-6 w-full sm:mt-0">
            <div className="w-full">
              <h5 className="mt-12 text-xl font-bold text-textWhite">
                Education
              </h5>
              <div className="">
                <h5 className="text-lg font-medium">
                  Government college of Engineering, Chandrapur
                </h5>
                <div className=" flex w-full items-start gap-1 sm:gap-2">
                  <ArrowRight className={" h-5 w-4 flex-none"} />
                  <div
                    className="flex w-full items-start justify-between gap-5 text-sm font-bold text-heading
                  "
                  >
                    <p>
                      Bachelor of Technology in Electronics and Telecommunications Engineering{" "}
                      <br />
                    </p>
                    <span>2020 - 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 w-full">
              <h5 className="text-xl font-bold text-textWhite">
                Coding Profile
              </h5>
              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://leetcode.com/LogicLuminary05"
                  target="_blank"
                  title="Leetcode"
                  className="flex items-center gap-1 rounded-md bg-[#1d1d1d] px-3 py-2 text-sm font-medium text-orange-300 transition-all duration-200 ease-in-out hover:scale-[1.05]"
                >
                  LeetCode
                  <SiLeetcode className="size-6" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

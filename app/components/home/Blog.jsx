"use client";
import React from "react";
import Heading from "../common/Heading";
import BlogCard from "../common/BlogCard";
import blog1 from "../../assets/blog1.png";
import Btn from "../common/Btn";
import { motion } from "framer-motion";

const blogItem = [
  {
    id: 1,
    blogDate: "February 22, 2024",
    blogTitle:
      "Welcome to the British Virgin Islands: A Yacht Charter Paradise",
    blogImg: blog1,
  },
  {
    id: 2,
    blogDate: "February 22, 2024",
    blogTitle: "Explore the hidden gems of the Caribbean",
    blogImg: blog1,
  },
  {
    id: 3,
    blogDate: "February 22, 2024",
    blogTitle: "Luxury yachting experience like never before",
    blogImg: blog1,
  },
];

const Blog = () => {
  return (
    <div className="container px-2 md:px-0 flex flex-col  justify-center">
      <Heading className="text-center mb-10" headingTxt="Blog" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 md:mb-[90px]">
        {blogItem.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: "easeOut",
            }}
          >
            <BlogCard key={item.id} blog={item} />
          </motion.div>
        ))}
      </div>
      <Btn btnText="See more" />
    </div>
  );
};

export default Blog;

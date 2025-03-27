"use client";
import React from "react";
import BlogCard from "../common/BlogCard";
import blog1 from "../../assets/blog1.png";
import { motion } from "framer-motion";
import Link from "next/link";

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
  {
    id: 4,
    blogDate: "February 22, 2024",
    blogTitle:
      "Welcome to the British Virgin Islands: A Yacht Charter Paradise",
    blogImg: blog1,
  },
  {
    id: 5,
    blogDate: "February 22, 2024",
    blogTitle: "Explore the hidden gems of the Caribbean",
    blogImg: blog1,
  },
  {
    id: 6,
    blogDate: "February 22, 2024",
    blogTitle: "Luxury yachting experience like never before",
    blogImg: blog1,
  },
];

const Blog = () => {
  return (
    <div className="container py-[60px] md:py-[120px] px-2 md:px-0 flex flex-col md:items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
        {blogItem.map((item, index) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;

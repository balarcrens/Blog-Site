// scripts/load-blogs.js
/* global process */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import fg from "fast-glob";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const OUTPUT_FILE = path.join(process.cwd(), "src/data/blogs.json");

const files = fg.sync(`${BLOG_DIR}/*.md`);

const blogs = files.map((file) => {
    const raw = fs.readFileSync(file, "utf-8");
    const { data, content } = matter(raw);

    return {
        ...data,
        content: marked(content),
    };
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogs, null, 2));

console.log("✅ Blogs JSON generated:", OUTPUT_FILE);

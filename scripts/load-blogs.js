// scripts/load-blogs.js
import fs from "fs";
import path from "path";
import process from "process";
import matter from "gray-matter";
import fg from "fast-glob";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src/content/blogs");
const OUTPUT_FILE = path.join(process.cwd(), "src/data/blogs.json");

const files = fg.sync(`${BLOG_DIR}/*.md`);

if (!files.length) {
    console.error("❌ No markdown files found. Blogs not generated.");
    process.exit(1);
}

const blogs = files.map((file) => {
    const raw = fs.readFileSync(file, "utf-8");
    const { data, content } = matter(raw);

    if (!data.slug || !data.title) {
        throw new Error(`Missing frontmatter in ${file}`);
    }

    return {
        title: data.title,
        slug: data.slug,
        date: data.date,
        excerpt: data.excerpt || content.slice(0, 160),
        content: marked(content),
    };
});

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogs, null, 2));

console.log("✅ Blogs JSON generated:", blogs.length);
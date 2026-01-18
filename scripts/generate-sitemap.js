import fs from "fs";
import path from "path";
import fg from "fast-glob";
import matter from "gray-matter";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const process = require("process");

const DOMAIN = "https://www.readora.blog";

const blogDir = path.join(process.cwd(), "src/content/blogs");
const output = path.join(process.cwd(), "public/sitemap.xml");

const pages = [
    { url: "/", priority: "1.0" },
    { url: "/blog", priority: "0.9" },
    { url: "/about", priority: "0.6" },
    { url: "/contact", priority: "0.6" },
    { url: "/privacy-policy", priority: "0.4" },
];

const blogFiles = fg.sync(`${blogDir}/**/*.md`);

const blogUrls = blogFiles.map((file) => {
    const content = fs.readFileSync(file, "utf8");
    const { data } = matter(content);

    return {
        url: `/blog/${data.slug}`,
        priority: "0.8",
    };
});

const allUrls = [...pages, ...blogUrls];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
        .map(
            (page) => `
  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
        )
        .join("")}
</urlset>`;

fs.writeFileSync(output, sitemap);

console.log("✅ Sitemap generated successfully");

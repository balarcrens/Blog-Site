import fs from "fs";
import path from "path";
import process from "process"

const DOMAIN = "https://readorablog.netlify.app";

const blogs = JSON.parse(
    fs.readFileSync(
        path.join(process.cwd(), "src/data/blogs.json"),
        "utf-8"
    )
);

const pages = [
    { url: "/", priority: "1.0" },
    { url: "/blog", priority: "0.9" },
    { url: "/about", priority: "0.6" },
    { url: "/contact", priority: "0.6" },
    { url: "/privacy-policy", priority: "0.4" },
];

const blogUrls = blogs.map((blog) => ({
    url: `/blog/${blog.slug}`,
    priority: "0.8",
}));

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

fs.writeFileSync(
    path.join(process.cwd(), "public/sitemap.xml"),
    sitemap
);

console.log("✅ Sitemap generated from blogs.json");
// Generates public/sitemap.xml from the route list + blog.ts before every
// build, so newly added blog posts are always included automatically.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { blogPosts } from "../src/lib/blog.ts";

const SITE = "https://www.bombaywalamarketing.com";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const today = new Date().toISOString().slice(0, 10);

// Static routes. noIndex pages (privacy/terms/cookies) are deliberately
// excluded — no point telling Google to crawl what it's told not to index.
const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies", changefreq: "weekly", priority: "0.9" },
  { path: "/blog", changefreq: "daily", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/services/marketing", changefreq: "monthly", priority: "0.8" },
  { path: "/services/tech", changefreq: "monthly", priority: "0.8" },
  { path: "/services/seo", changefreq: "monthly", priority: "0.8" },
  { path: "/services/ppc", changefreq: "monthly", priority: "0.8" },
  { path: "/services/smm", changefreq: "monthly", priority: "0.8" },
  { path: "/services/smo", changefreq: "monthly", priority: "0.8" },
  { path: "/services/ecommerce-marketing", changefreq: "monthly", priority: "0.8" },
];

const blogRoutes = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  lastmod: post.date,
  changefreq: "monthly",
  priority: "0.7",
}));

const urls = [...staticRoutes, ...blogRoutes];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u.path}</loc>
    <lastmod>${u.lastmod ?? today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const outPath = path.join(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml);
console.log(`✓ sitemap.xml written with ${urls.length} URLs → ${outPath}`);

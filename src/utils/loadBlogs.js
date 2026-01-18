import matter from "gray-matter";

export const loadBlogs = async () => {
  const modules = import.meta.glob("../content/blog/*.md", {
    as: "raw",
  });

  const blogs = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const raw = await resolver();
      const { data, content } = matter(raw);

      const slug = path.split("/").pop().replace(".md", "");

      return {
        slug,
        ...data,
        content,
      };
    })
  );

  return blogs.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
};

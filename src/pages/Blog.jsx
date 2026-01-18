import blogs from "../data/blogs.json";
import Seo from "../components/common/Seo";
import BlogCard from "../components/blog/BlogCard";

const Blog = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Seo
        title="Blog – Readora"
        description="Read helpful, original, and high-quality articles on Readora"
      />

      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">Readora Blog</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover tutorials, guides, and insights written to help you learn
            and grow.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Blog;
import { useParams } from "react-router-dom";
import blogs from "../data/blogs.json";
import Seo from "../components/common/Seo";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  return (
    <main className="bg-white">
      <Seo title={`${blog.title} – Readora`} description={blog.excerpt} />

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900">
          {blog.title}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Published on {blog.date}
        </p>

        <div className="prose prose-lg mt-8 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
    </main>
  );
};

export default BlogDetails;
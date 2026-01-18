import { NavLink } from "react-router-dom";

const BlogCard = ({ blog }) => {
    return (
        <article className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {blog.title}
            </h2>

            <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                {blog.excerpt}
            </p>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <span>{blog.date}</span>

                <NavLink
                    to={`/blog/${blog.slug}`}
                    className="font-semibold text-blue-600 hover:underline"
                >
                    Read more →
                </NavLink>
            </div>
        </article>
    );
};

export default BlogCard;
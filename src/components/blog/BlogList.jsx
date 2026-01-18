import BlogCard from "./BlogCard";
import { blogs } from "../../data/blogs";

const BlogList = () => {
    return (
        <section className="grid gap-8">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </section>
    );
};

export default BlogList;

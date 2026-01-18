import { useEffect } from "react";

const Seo = ({
    title = "Readora – Quality Blogs & Articles",
    description = "Readora publishes high-quality articles on technology, productivity, and digital life.",
    keywords = "blog, articles, technology, productivity",
}) => {
    useEffect(() => {
        document.title = title;

        const setMeta = (name, content) => {
            let meta = document.querySelector(`meta[name="${name}"]`);
            if (!meta) {
                meta = document.createElement("meta");
                meta.name = name;
                document.head.appendChild(meta);
            }
            meta.content = content;
        };

        setMeta("description", description);
        setMeta("keywords", keywords);
    }, [title, description, keywords]);

    return null;
};

export default Seo;
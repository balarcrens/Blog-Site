import Seo from "../components/common/Seo";

const About = () => {
    return (
        <>
            <Seo
                title="About Readora – Our Mission & Values"
                description="Learn more about Readora, our mission, content standards, and commitment to providing trustworthy information."
            />

            <section className="max-w-3xl mx-auto px-4 py-20">
                <h1 className="text-3xl font-bold text-gray-900">
                    About Readora
                </h1>

                <p className="mt-6 text-gray-600 leading-relaxed">
                    <strong>Readora</strong> is an independent online publication created
                    with the goal of sharing clear, reliable, and meaningful content for
                    modern readers. We believe that high-quality information should be
                    easy to understand, practical, and genuinely helpful.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Our Mission
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Our mission is to publish original articles that educate, inform, and
                    empower readers. We focus on topics that influence everyday digital
                    life, including technology, productivity, online safety, and modern
                    trends.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    What Makes Readora Different
                </h2>
                <ul className="mt-4 list-disc pl-6 text-gray-600 space-y-2">
                    <li>Original, human-written content</li>
                    <li>Clear explanations without clickbait</li>
                    <li>Research-driven and reader-focused articles</li>
                    <li>Simple and distraction-free reading experience</li>
                </ul>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Content Standards
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Every article published on Readora is written with accuracy and clarity
                    in mind. We avoid misleading headlines, exaggerated claims, and
                    low-quality content. Our goal is to provide value, not just page views.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Transparency & Responsibility
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Readora may display advertisements to support the cost of maintaining
                    the website. These advertisements help us keep our content accessible
                    while allowing us to continue publishing free, high-quality articles.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                    Sponsored or affiliate content, if ever included, will always be
                    clearly disclosed to maintain transparency and trust with our readers.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Get in Touch
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    We value feedback and communication from our readers. If you have
                    questions, suggestions, or concerns, feel free to reach out through
                    our contact page.
                </p>
            </section>
        </>
    );
};

export default About;
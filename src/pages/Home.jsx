import { NavLink } from "react-router-dom";
import Seo from "../components/common/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Readora – Thoughtful Articles That Inform & Inspire"
        description="Readora publishes original, well-researched articles focused on technology, productivity, and modern digital life."
      />

      {/* Hero Section */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              Thoughtful articles that inform, inspire, and educate.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Welcome to <strong>Readora</strong>, a modern blogging platform
              where we publish original, well-researched articles focused on
              delivering real value to readers across technology, lifestyle,
              productivity, and digital trends.
            </p>

            <div className="mt-8 flex gap-4">
              <NavLink
                to="/blog"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Read Articles
              </NavLink>

              <NavLink
                to="/about"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-gray-400"
              >
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Why Readora?
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              At Readora, our mission is to create meaningful content that helps
              readers make informed decisions. Every article is written with
              clarity, accuracy, and user experience in mind — without clickbait
              or misleading information.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We focus on topics that matter in everyday digital life, from
              practical guides and explainers to in-depth insights and opinions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content Placeholder */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Articles
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Article Card */}
            <div className="rounded-lg bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                How Technology Is Changing the Way We Learn
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Explore how digital tools and online platforms are reshaping
                education and learning habits worldwide.
              </p>
              <NavLink
                to="/blog"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Read more →
              </NavLink>
            </div>

            <div className="rounded-lg bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Productivity Tips for a Balanced Digital Life
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Simple and practical strategies to stay productive without
                burning out in today’s fast-paced digital world.
              </p>
              <NavLink
                to="/blog"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Read more →
              </NavLink>
            </div>

            <div className="rounded-lg bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Understanding Online Privacy in the Modern Era
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Learn why online privacy matters and how individuals can better
                protect their personal data.
              </p>
              <NavLink
                to="/blog"
                className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:underline"
              >
                Read more →
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
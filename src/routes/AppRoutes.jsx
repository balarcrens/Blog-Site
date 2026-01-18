import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const NotFound = lazy(() => import("../pages/NotFound"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));

const PageLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center py-24">
            {/* Spinner */}
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" />

            {/* Text */}
            <p className="mt-4 text-sm text-gray-600">
                Loading content, please wait…
            </p>
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainLayout>
                            <Home />
                        </MainLayout>
                    }
                />

                <Route
                    path="/blog"
                    element={
                        <MainLayout>
                            <Blog />
                        </MainLayout>
                    }
                />

                <Route
                    path="/blog/:slug"
                    element={
                        <MainLayout>
                            <BlogDetails />
                        </MainLayout>
                    }
                />

                <Route
                    path="/about"
                    element={
                        <MainLayout>
                            <About />
                        </MainLayout>
                    }
                />

                <Route
                    path="/contact"
                    element={
                        <MainLayout>
                            <Contact />
                        </MainLayout>
                    }
                />

                <Route
                    path="/privacy-policy"
                    element={
                        <MainLayout>
                            <PrivacyPolicy />
                        </MainLayout>
                    }
                />

                <Route
                    path="/terms-and-conditions"
                    element={
                        <MainLayout>
                            <TermsAndConditions />
                        </MainLayout>
                    }
                />

                {/* 404 */}
                <Route
                    path="*"
                    element={
                        <MainLayout>
                            <NotFound />
                        </MainLayout>
                    }
                />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
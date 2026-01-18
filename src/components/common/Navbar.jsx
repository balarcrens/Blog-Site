import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <NavLink to="/" className="text-xl font-bold text-gray-900">
                        Readora<span className="text-blue-600">.</span>
                    </NavLink>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                        <NavLink to="/" className="hover:text-blue-600">
                            Home
                        </NavLink>
                        <NavLink to="/blog" className="hover:text-blue-600">
                            Blog
                        </NavLink>
                        <NavLink to="/about" className="hover:text-blue-600">
                            About
                        </NavLink>
                        <NavLink to="/contact" className="hover:text-blue-600">
                            Contact
                        </NavLink>
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <NavLink
                            to="/blog"
                            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                        >
                            Explore Articles
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid gap-8 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            Readora<span className="text-blue-600">.</span>
                        </h2>
                        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                            Readora is a modern blog platform delivering insightful,
                            well-researched, and reader-first content across multiple topics.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><NavLink to="/about" className="hover:text-blue-600">About</NavLink></li>
                            <li><NavLink to="/contact" className="hover:text-blue-600">Contact</NavLink></li>
                            <li><NavLink to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</NavLink></li>
                            <li><NavLink to="/terms-and-conditions" className="hover:text-blue-600">Terms & Conditions</NavLink></li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                            Information
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            We publish original, human-written articles focused on quality,
                            accuracy, and reader value.
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Readora. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
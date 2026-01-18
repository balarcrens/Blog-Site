import Seo from "../components/common/Seo";

const PrivacyPolicy = () => {
    return (
        <>
            <Seo
                title="Privacy Policy – Readora"
                description="Readora's privacy policy explains how we handle user data, cookies, and advertising practices."
            />

            <section className="max-w-3xl mx-auto px-4 py-20">
                <h1 className="text-3xl font-bold text-gray-900">
                    Privacy Policy
                </h1>

                <p className="mt-6 text-gray-600 leading-relaxed">
                    At <strong>Readora</strong>, accessible from our website, we value the
                    privacy of our visitors. This Privacy Policy document outlines the
                    types of information that are collected and recorded by Readora and
                    how we use it.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Information We Collect
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    We do not collect personal information such as names, addresses, or
                    contact details unless you voluntarily provide them through our
                    contact forms or email communication.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                    Like many websites, Readora may collect non-personal information such
                    as browser type, device information, pages visited, and time spent on
                    the site for analytical purposes.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Cookies and Web Beacons
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Readora uses cookies to store information about visitors’ preferences
                    and to optimize the user experience by customizing our content based
                    on visitors’ browser type or other information.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Google AdSense
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Google is a third-party vendor on Readora. It uses cookies, including
                    the DoubleClick cookie, to serve ads to users based on their visit to
                    Readora and other websites on the internet.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                    Google’s use of advertising cookies enables it and its partners to
                    serve ads to users based on their visit to this site and/or other sites
                    on the internet.
                </p>

                <p className="mt-4 text-gray-600 leading-relaxed">
                    Users may opt out of personalized advertising by visiting Google’s Ad
                    Settings page.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Third-Party Privacy Policies
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Readora’s Privacy Policy does not apply to other advertisers or
                    websites. We advise you to consult the respective Privacy Policies of
                    third-party ad servers or websites for more detailed information about
                    their practices and instructions about how to opt out of certain
                    options.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Children’s Information
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    Readora does not knowingly collect any Personal Identifiable
                    Information from children under the age of 13. If you believe that
                    your child provided this kind of information on our website, we
                    strongly encourage you to contact us and we will promptly remove such
                    information from our records.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Consent
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    By using our website, you hereby consent to our Privacy Policy and
                    agree to its terms.
                </p>

                <h2 className="mt-10 text-xl font-semibold text-gray-900">
                    Updates to This Policy
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will
                    be posted on this page, and we encourage users to review this policy
                    periodically.
                </p>
            </section>
        </>
    );
};

export default PrivacyPolicy;
import Seo from "../components/common/Seo";

const Contact = () => {
	return (
		<>
			<Seo
				title="Contact Readora"
				description="Get in touch with the Readora team for questions, feedback, or general inquiries."
			/>

			<section className="max-w-3xl mx-auto px-4 py-20">
				<h1 className="text-3xl font-bold text-gray-900">
					Contact Us
				</h1>

				<p className="mt-6 text-gray-600 leading-relaxed">
					We welcome questions, feedback, and suggestions from our readers.
					If you would like to get in touch with the Readora team, please use
					the contact details below.
				</p>

				{/* Contact Info */}
				<div className="mt-10 rounded-lg border border-gray-200 bg-gray-50 p-6">
					<h2 className="text-lg font-semibold text-gray-900">
						Email
					</h2>
					<p className="mt-2 text-gray-600">
						You can reach us directly at:
					</p>
					<p className="mt-1 font-medium text-blue-600">
						balarcrens188@gmail.com
					</p>
				</div>

				{/* Simple Contact Form */}
				<div className="mt-12">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">
						Send a Message
					</h2>

					<form
						className="space-y-5"
						action="mailto:contact@readora.com"
						method="POST"
						encType="text/plain"
					>
						<div>
							<label className="block text-sm font-medium text-gray-700">
								Your Name
							</label>
							<input
								type="text"
								required
								className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Your Email
							</label>
							<input
								type="email"
								required
								className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700">
								Message
							</label>
							<textarea
								rows="5"
								required
								className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
							/>
						</div>

						<button
							type="submit"
							className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700"
						>
							Send Message
						</button>
					</form>
				</div>
			</section>
		</>
	);
};

export default Contact;
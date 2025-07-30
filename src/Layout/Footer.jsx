import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white mt-12">
            {/* Newsletter Signup */}
            <section className="px-6 py-8 text-center bg-blue-800">
                <h2 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h2>
                <p className="text-sm text-blue-100 mb-4">Stay updated with the latest health tips and news.</p>
                <form className="flex flex-col sm:flex-row justify-center gap-2 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 w-full sm:w-64 rounded text-black"
                    />
                    <button className="bg-white text-blue-900 px-4 py-2 rounded font-semibold hover:bg-gray-200">
                        Subscribe
                    </button>
                </form>
            </section>

            {/* Footer Links */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-10">
                <div>
                    <h3 className="text-lg font-semibold mb-2">MedicoCare</h3>
                    <p className="text-sm text-blue-100">
                        Your trusted partner for world-class, compassionate healthcare.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <ul className="text-sm space-y-1 text-blue-100">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/login" className="hover:underline">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Departments</h3>
                    <ul className="text-sm space-y-1 text-blue-100">
                        <li>Cardiology</li>
                        <li>Orthopedics</li>
                        <li>Pediatrics</li>
                        <li>Neurology</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="text-sm text-blue-100">Phone: +91 98765 43210</p>
                    <p className="text-sm text-blue-100">Email: contact@medicocare.com</p>
                    <p className="text-sm text-blue-100">Address: Mumbai, India</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-blue-950 text-center text-sm py-4 text-blue-100">
                &copy; {new Date().getFullYear()} MedicoCare Hospital. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
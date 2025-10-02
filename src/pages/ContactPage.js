import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => (
    <div className="bg-gray-100 min-h-screen py-12 md:py-20 animate-fadeIn">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Get in Touch</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Have a question in mind? We'd love to hear from you. Drop us a line below.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:flex">
                {/* --- Left Side: Contact Information --- */}
                <div className="md:w-1/3 bg-gradient-to-br from-purple-600 to-pink-500 text-white p-8">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <MapPin size={20} className="mr-4 mt-1 flex-shrink-0" />
                            <span>123 Fashion Ave, Suite 100<br/>New York, NY 10001</span>
                        </div>
                        <div className="flex items-start">
                            <Mail size={20} className="mr-4 mt-1 flex-shrink-0" />
                            <a href="mailto:support@shopease.com" className="hover:underline">support@shopease.com</a>
                        </div>
                        <div className="flex items-start">
                            <Phone size={20} className="mr-4 mt-1 flex-shrink-0" />
                            <a href="tel:+12125550123" className="hover:underline">(212) 555-0123</a>
                        </div>
                    </div>
                </div>

                {/* --- Right Side: Contact Form --- */}
                <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition" 
                                    placeholder="Jane Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition" 
                                    placeholder="jane.doe@example.com"
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-3 px-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform hover:scale-105 transition-transform duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;
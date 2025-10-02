import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Leaf, Truck, ShieldCheck } from 'lucide-react';
import Icon from './Icon';

const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 mt-12 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 py-12">
            
            {/* --- "Our Promise" Section --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b border-gray-700 pb-10 mb-10">
                <div className="flex flex-col items-center">
                    <Icon component={Leaf} className="w-10 h-10 text-green-400 mb-2" />
                    <h3 className="font-semibold text-white">Sustainable Products</h3>
                    <p className="text-sm">Ethically sourced and made to last.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon component={Truck} className="w-10 h-10 text-blue-400 mb-2" />
                    <h3 className="font-semibold text-white">Fast, Free Shipping</h3>
                    <p className="text-sm">On all orders over $50.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Icon component={ShieldCheck} className="w-10 h-10 text-purple-400 mb-2" />
                    <h3 className="font-semibold text-white">Secure Payments</h3>
                    <p className="text-sm">Your information is safe with us.</p>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Brand & Social Section */}
                <div className="md:col-span-4">
                     <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">ShopEase</h2>
                     <p className="mt-2 text-sm max-w-xs">Defining modern style with curated collections for the conscious consumer.</p>
                     <div className="flex space-x-3 mt-6">
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"><Icon component={Facebook} /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"><Icon component={Twitter} /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"><Icon component={Instagram} /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"><Icon component={Youtube} /></a>
                     </div>
                </div>

                {/* Links Section */}
                <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider text-sm">About</h3>
                        <div className="mt-4 space-y-3">
                            <a href="#" className="block hover:text-purple-400 transition-colors">Contact Us</a>
                            <a href="#" className="block hover:text-purple-400 transition-colors">About Us</a>
                            <a href="#" className="block hover:text-purple-400 transition-colors">Careers</a>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider text-sm">Help</h3>
                        <div className="mt-4 space-y-3">
                            <a href="#" className="block hover:text-purple-400 transition-colors">Payments</a>
                            <a href="#" className="block hover:text-purple-400 transition-colors">Shipping</a>
                            <a href="#" className="block hover:text-purple-400 transition-colors">Returns</a>
                            <a href="#" className="block hover:text-purple-400 transition-colors">FAQ</a>
                        </div>
                    </div>
                     <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider text-sm">Policy</h3>
                        <div className="mt-4 space-y-3">
                            <a href="#" className="block hover:text-purple-400 transition-colors">Terms Of Use</a>
                            <a href="#" className="block hover:text-purple-400 transition-colors">Security</a>
                            <a href="#" className="block hover:text-purple-400 transition-colors">Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-center text-sm">
                <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} ShopEase.com - All Rights Reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;
import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X, LogIn, UserPlus, LogOut, Info, Phone, Home } from 'lucide-react';

// A generic Icon component to avoid repetition
const Icon = ({ component: Component, className, ...props }) => {
    // Return null if the component prop is not a valid component to prevent rendering errors.
    if (!Component) return null;
    return <Component className={className} {...props} />;
};

const Header = ({ setCurrentPage, cartCount, wishlistCount, onCartClick, onWishlistClick, searchQuery, setSearchQuery, isLoggedIn, handleLogout, currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    // Navigation links with icons for mobile menu
    const navLinks = [
        { name: 'HOME', pageId: 'home', icon: Home }, 
        { name: 'ABOUT US', pageId: 'aboutus', icon: Info },
        { name: 'CONTACT', pageId: 'contact', icon: Phone }
    ];

    const handleNavClick = (page) => {
        const pageId = page.toLowerCase().replace(' ', '');
        setCurrentPage(pageId);
        if (pageId === 'home') {
            setSearchQuery('');
        }
        setIsMenuOpen(false);
        setIsUserMenuOpen(false);
    }

    return (
        <>
            <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        
                        {/* --- LOGO --- */}
                        <div 
                            onClick={() => handleNavClick('home')} 
                            className="flex items-center cursor-pointer group"
                        >
                            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full transform transition-transform duration-300 group-hover:scale-110">
                                <ShoppingCart className="w-5 h-5 text-white" />
                            </div>
                            <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent transition-all duration-300">
                                ShopEase
                            </span>
                        </div>
                        
                        {/* --- DESKTOP NAVIGATION --- */}
                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map(link => {
                                const pageId = link.name.toLowerCase().replace(' ', '');
                                const isActive = currentPage === pageId;
                                return (
                                    <a 
                                        key={link.name} 
                                        href="#" 
                                        onClick={() => handleNavClick(link.name)} 
                                        className={`relative text-sm font-medium transition-colors duration-300 group ${ // Added group for underline hover effect
                                            isActive 
                                                ? 'text-purple-600' 
                                                : 'text-gray-600 hover:text-purple-600'
                                        }`}
                                    >
                                        {link.name}
                                        <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-purple-600 transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                    </a>
                                );
                            })}
                        </nav>

                        {/* --- ICONS AND ACTIONS --- */}
                        <div className="flex items-center space-x-2 sm:space-x-3">
                            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-3 py-1.5 group focus-within:ring-2 focus-within:ring-purple-500 transition-all duration-300">
                                <Icon component={Search} className="w-4 h-4 text-gray-400 group-focus-within:text-purple-600" />
                                <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="text-sm bg-transparent outline-none px-2 w-24 sm:w-32 transition-all duration-300 focus:w-28 sm:focus:w-40"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            
                            <button onClick={onWishlistClick} className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors rounded-full hover:bg-pink-50">
                                <Icon component={Heart} className="w-5 h-5" />
                                {wishlistCount > 0 && <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">{wishlistCount}</span>}
                            </button>
                            
                            <button onClick={onCartClick} className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-full hover:bg-purple-50">
                                <Icon component={ShoppingCart} className="w-5 h-5" />
                                {cartCount > 0 && <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center animate-pulse">{cartCount}</span>}
                            </button>

                            <div className="relative">
                                <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="p-2 text-gray-600 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100">
                                    <Icon component={User} className="w-5 h-5" />
                                </button>
                                {isUserMenuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 z-50 animate-fade-in-down">
                                        {isLoggedIn ? (
                                            <button onClick={() => { handleLogout(); setIsUserMenuOpen(false); }} className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                <LogOut className="w-4 h-4 mr-2" /> Log Out
                                            </button>
                                        ) : (
                                            <>
                                                <button onClick={() => handleNavClick('login')} className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                    <LogIn className="w-4 h-4 mr-2" /> Log In
                                                </button>
                                                <button onClick={() => handleNavClick('signup')} className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                                    <UserPlus className="w-4 h-4 mr-2" /> Sign Up
                                                </button>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                            
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600">
                                <Icon component={isMenuOpen ? X : Menu} className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- MOBILE NAVIGATION --- */}
            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                } md:hidden`}
            >
                <div className="p-5 border-b">
                    <div className="flex items-center">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-full">
                            <ShoppingCart className="w-5 h-5 text-white" />
                        </div>
                        <span className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                            ShopEase
                        </span>
                    </div>
                </div>
                <nav className="p-5 space-y-2">
                    {navLinks.map(link => {
                        const pageId = link.name.toLowerCase().replace(' ', '');
                        const isActive = currentPage === pageId;
                        return (
                            <a 
                                key={link.name} 
                                href="#" 
                                onClick={() => handleNavClick(link.name)} 
                                className={`flex items-center rounded-lg p-3 text-sm font-semibold transition-colors duration-200 ${
                                    isActive 
                                        ? 'text-purple-600 bg-purple-50' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <Icon component={link.icon} className="w-5 h-5 mr-3" />
                                {link.name}
                            </a>
                        );
                    })}
                </nav>
            </div>
            {/* Overlay for mobile menu */}
            {isMenuOpen && <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/30 z-30 md:hidden"></div>}

            {/* Custom CSS for animations */}
            <style>{`
                @keyframes fade-in-down {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.2s ease-out;
                }
            `}</style>
        </>
    );
};

export default Header;
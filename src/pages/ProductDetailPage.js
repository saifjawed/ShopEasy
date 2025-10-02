import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Minus, Plus, ShoppingCart, Zap, Check, Share2, Twitter, Facebook, Instagram } from 'lucide-react';
import Icon from '../components/Icon';

const ProductDetailPage = ({ product, onAddToCart, onAddToWishlist, isInWishlist, setCurrentPage, isLoggedIn }) => {
    const [quantity, setQuantity] = useState(1);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);

    useEffect(() => {
        if (product) setQuantity(1);
    }, [product]);

    if (!product) return null;

    const handleAction = (action) => {
        if (!isLoggedIn) {
            setShowLoginPrompt(true);
            return;
        }
        
        if (action === 'cart') {
            onAddToCart(product, quantity);
        } else if (action === 'wishlist') {
            onAddToWishlist(product);
        }
    };

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
                <button onClick={() => setCurrentPage('home')} className="flex items-center text-sm font-semibold text-gray-600 hover:text-black mb-6">
                    <Icon component={ArrowLeft} className="w-4 h-4 mr-2"/>
                    Back to Shop
                </button>

                <div className="bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 overflow-hidden">
                    {/* Image Column with Zoom Effect */}
                    <div className="w-full h-80 md:h-full overflow-hidden">
                        <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" 
                        />
                    </div>

                    {/* Details Column */}
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div>
                            {/* Breadcrumbs */}
                            <div className="text-sm text-gray-500 mb-2">
                                <span className="hover:underline cursor-pointer">Home</span> / <span className="hover:underline cursor-pointer">Apparel</span>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{product.name}</h1>
                                <button onClick={() => handleAction('wishlist')} className="text-gray-400 hover:text-red-500 ml-4 flex-shrink-0 p-2 rounded-full hover:bg-red-50 transition-colors">
                                    <Icon component={Heart} className={`w-7 h-7 transition-colors ${isInWishlist ? 'text-red-500 fill-current' : ''}`} />
                                </button>
                            </div>

                            {product.price && <p className="text-3xl text-purple-600 font-bold mb-6">${product.price.toFixed(2)}</p>}
                            
                            {/* Highlights Section */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-800 mb-2">Highlights:</h3>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-center gap-2"><Icon component={Check} className="w-4 h-4 text-green-500" /> Premium Quality Fabric</li>
                                    <li className="flex items-center gap-2"><Icon component={Check} className="w-4 h-4 text-green-500" /> Modern & Stylish Fit</li>
                                    <li className="flex items-center gap-2"><Icon component={Check} className="w-4 h-4 text-green-500" /> Suitable for All Seasons</li>
                                </ul>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8 text-sm">{product.description}</p>
                            
                            <div className="flex items-center mb-8">
                                <label className="font-bold text-gray-800 mr-4">Quantity:</label>
                                <div className="flex items-center border border-gray-200 rounded-full">
                                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-2 text-gray-500 hover:text-black"><Icon component={Minus} className="w-4 h-4" /></button>
                                    <span className="px-5 py-2 font-bold text-lg">{quantity}</span>
                                    <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-2 text-gray-500 hover:text-black"><Icon component={Plus} className="w-4 h-4" /></button>
                                </div>
                            </div>
                            
                            {/* --- THESE BUTTONS ARE UNTOUCHED AS REQUESTED --- */}
                            <div className="space-y-4 border-t pt-8">
                                <button 
                                    onClick={() => handleAction('cart')} 
                                    className="w-full flex items-center justify-center gap-2 border-2 border-purple-600 text-purple-600 font-bold py-3 px-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out"
                                >
                                    <Icon component={ShoppingCart} className="w-5 h-5" />
                                    Add to Cart
                                </button>
                                <button 
                                    onClick={() => handleAction('cart')}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                                >
                                    <Icon component={Zap} className="w-5 h-5" />
                                    Buy Now
                                </button>
                            </div>
                            {/* ------------------------------------------- */}

                            {showLoginPrompt && (
                                <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-lg text-center text-sm">
                                    <p className="font-semibold mb-2">Please log in to continue.</p>
                                    <button onClick={() => setCurrentPage('login')} className="bg-black text-white font-bold py-2 px-4 rounded-md text-xs hover:bg-gray-800">Log In</button>
                                    <button onClick={() => setShowLoginPrompt(false)} className="ml-2 text-xs text-gray-600 hover:underline">Cancel</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
import React from 'react';
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import Icon from '../components/Icon';

// Card component updated to have permanently visible buttons
const WishlistProductCard = ({ item, onRemoveFromWishlist, onAddToCart }) => {
    // This function now effectively "moves" the item by adding it to the cart
    // and then removing it from the wishlist.
    const handleAddToCart = () => {
        onAddToCart(item, 1);
        onRemoveFromWishlist(item.id);
    };

    return (
        <div className="relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
            
            {/* REMOVE BUTTON: Now always visible */}
            <button 
                onClick={() => onRemoveFromWishlist(item.id)}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-1.5 text-gray-500 hover:text-red-500 transition-colors"
                aria-label="Remove from wishlist"
            >
                <Icon component={Trash2} className="w-5 h-5" />
            </button>
            
            <div className="w-full h-64 bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover"/>
            </div>

            <div className="p-4 text-center flex flex-col flex-grow">
                <div className="flex-grow">
                    <h3 className="font-bold text-gray-800 truncate">{item.name}</h3>
                    <p className="font-semibold text-purple-600 mt-1">${item.price.toFixed(2)}</p>
                </div>

                {/* ADD TO CART BUTTON: Now always visible at the bottom */}
                <button 
                    onClick={handleAddToCart}
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-purple-600 text-white text-sm font-bold py-2 px-3 rounded-md hover:bg-purple-700 transition-colors"
                >
                    <Icon component={ShoppingCart} className="w-4 h-4" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

// The main Wishlist Page component
const WishlistPage = ({ wishlist, onRemoveFromWishlist, onAddToCart, setCurrentPage }) => {
    
    const EmptyWishlistView = () => (
        <div className="text-center py-16">
            <Icon component={Heart} className="w-24 h-24 mx-auto text-pink-200" strokeWidth={1} />
            <h2 className="mt-6 text-2xl font-semibold text-gray-800">Your wishlist is empty</h2>
            <p className="mt-2 text-gray-500">Add items you love to your wishlist to save them for later.</p>
            <button
                onClick={() => setCurrentPage('home')}
                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
                Discover Products
            </button>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
                <button onClick={() => setCurrentPage('home')} className="flex items-center text-sm font-semibold text-gray-600 hover:text-black mb-6">
                    <Icon component={ArrowLeft} className="w-4 h-4 mr-2"/>
                    Back to Shop
                </button>
                <div className="flex items-center justify-center gap-3 mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">My Wishlist</h1>
                    <Icon component={Heart} className="w-8 h-8 text-pink-500" />
                </div>
                
                {wishlist.length === 0 ? (
                    <EmptyWishlistView />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {wishlist.map(item => (
                           <WishlistProductCard 
                                key={item.id}
                                item={item}
                                onRemoveFromWishlist={onRemoveFromWishlist}
                                onAddToCart={onAddToCart}
                           />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;
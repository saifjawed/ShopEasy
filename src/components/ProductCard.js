import React from 'react';
import { Search, Heart, Star } from 'lucide-react';
import Icon from './Icon';

const ProductCard = ({ product, onQuickView}) => {
    // Dummy data for new features - you would pass these in as props
    const category = product.category || 'New Arrival';
    const rating = product.rating || 4;

    return (
        // Main card container with group for hover effects
        <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative">
                {/* Image Container */}
                <div className="bg-gray-100 overflow-hidden aspect-w-1 aspect-h-1">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40">
                    <button 
                        onClick={() => onQuickView(product)} 
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold py-3 px-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <Icon component={Search} className="w-4 h-4" />
                        Quick View
                    </button>
                </div>
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md">
                    {category}
                </span>
            </div>
            
            {/* Product Info Section */}
            <div className="p-4 text-left">
                <h3 className="text-base font-semibold text-gray-800 truncate" title={product.name}>
                    {product.name}
                </h3>
                
                {/* Star Rating */}
                <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Icon key={i} component={Star} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">({rating}.0)</span>
                </div>

                {product.price && (
                    <p className="mt-2 text-lg font-bold text-gray-900">
                        ${product.price.toFixed(2)}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
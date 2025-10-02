import React from 'react';
import ProductCard from '../components/ProductCard';

const SearchResultsPage = ({ results, query, onQuickView }) => (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 animate-fadeIn">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Search Results for "{query}"</h2>
        {results.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {results.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
            </div>
        ) : (
            <p className="text-center text-gray-500">No products found.</p>
        )}
    </div>
);

export default SearchResultsPage;
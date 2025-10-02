import React from 'react';
import { allProducts } from '../data/products';
import ProductCard from './ProductCard';

const AllProductsShowcase = ({ onQuickView }) => {
    // Combine products from different categories you want to show
    const allApparel = [...allProducts.women, ...allProducts.men, ...allProducts.kids];
    
    return (
        <section className="container mx-auto px-4 sm:px-6 py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {allApparel.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
            </div>
        </section>
    );
};

export default AllProductsShowcase;
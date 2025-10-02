import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { allProducts } from '../data/products';
import Icon from '../components/Icon';
import ProductCard from '../components/ProductCard';
import AllProductsShowcase from '../components/AllProductsShowcase';

// MODIFIED Slider component with responsive images
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = allProducts.slider;
    const nextSlide = () => setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Desktop Image: Hidden on mobile */}
                        <img 
                            src={slide.image} 
                            alt={`${slide.name} - Desktop`} 
                            className="w-full h-full object-cover hidden md:block"
                        />
                        {/* Mobile Image: Hidden on desktop. Assumes 'image_mobile' property exists */}
                        <img 
                            src={slide.image_mobile || slide.image} // Fallbacks to desktop image if mobile one isn't provided
                            alt={`${slide.name} - Mobile`} 
                            className="w-full h-full object-cover block md:hidden"
                        />
                    </div>
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"><Icon component={ChevronLeft} /></button>
            <button onClick={nextSlide} className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 rounded-full p-2"><Icon component={ChevronRight} /></button>
        </section>
    );
};

// CategoryCard component remains UNCHANGED
const CategoryCard = ({ category, onClick }) => (
    <div className="flex flex-col items-center text-center group cursor-pointer" onClick={() => onClick(category.id)}>
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-105 border-2 border-transparent">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="mt-4 font-semibold text-gray-800 text-sm md:text-base">{category.name}</h3>
    </div>
);

// ProductShowcase (by category) component remains UNCHANGED
const ProductShowcase = ({ onQuickView }) => {
    const [viewingCategory, setViewingCategory] = useState(null);
    
    const renderContent = () => {
        if (viewingCategory) {
            const products = allProducts[viewingCategory] || [];
            const categoryName = allProducts.shopCategories.find(c => c.id === viewingCategory)?.name;
            return (
                <div>
                    <button onClick={() => setViewingCategory(null)} className="flex items-center text-sm font-semibold text-gray-600 hover:text-black mb-6">
                        <Icon component={ArrowLeft} className="w-4 h-4 mr-2"/>
                        Back to Categories
                    </button>
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{categoryName} Collection</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {products.map(p => <ProductCard key={p.id} product={p} onQuickView={onQuickView} />)}
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Shop By Category</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
                    {allProducts.shopCategories.map(c => <CategoryCard key={c.id} category={c} onClick={setViewingCategory} />)}
                </div>
            </div>
        );
    };

    return (
        <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
            <div className="animate-fadeIn">
                {renderContent()}
            </div>
        </section>
    );
};

// The main HomePage component remains UNCHANGED
const HomePage = ({ onQuickView }) => (
    <>
        <Slider />
        <ProductShowcase onQuickView={onQuickView} />
        <AllProductsShowcase onQuickView={onQuickView} /> 
    </>
);

export default HomePage;

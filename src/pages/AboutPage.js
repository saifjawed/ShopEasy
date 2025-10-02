import React from 'react';
import { Gem, Leaf, Palette } from 'lucide-react';
import aboutus from '../assets/aboutUs.jpg';

const AboutPage = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap min-h-screen bg-white animate-fadeIn">
      
      {/* --- Image Section (Left Side) --- */}
      <div
        className="w-full md:w-1/2 min-h-[300px] md:min-h-screen bg-cover bg-center hidden md:block">
        <img src={aboutus} alt="About Us" className="w-full h-full object-cover" />
        </div>

      {/* --- Content Section (Right Side) --- */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 lg:p-20">
        <div className="max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About 
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> ShopEase</span>
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Founded in 2024, ShopEase was born from a desire to make fashion effortless, accessible, and conscious. We create timeless pieces designed to be loved and lived in, focusing on minimalist style that empowers you every day.
          </p>
          
          <hr className="my-8"/>

          <div className="space-y-6">
            <Pillar
              icon={<Gem className="text-purple-600" />}
              title="Exceptional Quality"
              description="We use premium, durable materials to ensure every piece lasts."
            />
            <Pillar
              icon={<Leaf className="text-green-600" />}
              title="Sustainable Approach"
              description="Our commitment to the planet is reflected in our ethical practices."
            />
            <Pillar
              icon={<Palette className="text-pink-500" />}
              title="Timeless Design"
              description="We create versatile wardrobe staples that transcend passing trends."
            />
          </div>
        </div>
      </div>
    </div>
  );
};


// A small, reusable component for the pillars to keep the code clean
const Pillar = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-4 mt-1 bg-gray-100 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default AboutPage;
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { allProducts } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { LoginPage, SignUpPage } from './pages/Auth';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SearchResultsPage from './pages/SearchResultPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [viewingProduct, setViewingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleQuickView = (product) => {
      setViewingProduct(product);
      setCurrentPage('productdetail');
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
      // If the new quantity is 0 or less, remove the item
      if (newQuantity < 1) {
          handleRemoveFromCart(productId);
          return;
      }
      // Otherwise, update the quantity for the matching product
      setCart(prevCart =>
          prevCart.map(item =>
              item.id === productId ? { ...item, quantity: newQuantity } : item
          )
      );
  };
  
  const handleAddToCart = (product, quantity) => {
    setCart(prevCart => {
        const existing = prevCart.find(item => item.id === product.id);
        if (existing) {
            return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
        }
        return [...prevCart, { ...product, quantity }];
    });
    toast.success('Items Added To Cart');
  };

  const handleRemoveFromCart = (productId) => {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
      toast.success('Items Removed From Cart');
  };

 const handleAddToWishlist = (product) => {
      setWishlist(prev => {
          const isListed = prev.find(item => item.id === product.id);
          if (isListed) {
              // If item is already in the list, remove it
              toast.success('Removed from wishlist');
              return prev.filter(item => item.id !== product.id);
          } else {
              // Otherwise, add it to the list
              toast.success('Added to wishlist');
              return [...prev, product];
          }
      });
  };
  
  const handleRemoveFromWishlist = (productId) => {
      setWishlist(prev => prev.filter(item => item.id !== productId));
      toast.success('Removed from wishlist');
  }

  // ---AUTH HANDLERS ---
  const handleLogin = () => {
      setIsLoggedIn(true);
      setCurrentPage('home');
      toast.success('Login Successful');
  };

  const handleLogout = () => {
      setIsLoggedIn(false);
      toast.success('Logged Out');
  };
  const handleSignUp = () => {
      toast.success('Account created! Please log in.');
      setCurrentPage('login');
  };


  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  
  const allSearchableProducts = [...allProducts.women, ...allProducts.men, ...allProducts.kids, ...allProducts.slider, ...allProducts.electronics];
  const searchResults = searchQuery 
    ? allSearchableProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())) 
    : [];

  const renderPage = () => {
    if (searchQuery) {
        return <SearchResultsPage results={searchResults} query={searchQuery} onQuickView={handleQuickView} />;
    }
    switch (currentPage) {
        case 'aboutus': return <AboutPage />;
        case 'contact': return <ContactPage />;
        case 'login': return <LoginPage setCurrentPage={setCurrentPage} handleLogin={handleLogin} />;
        
        // Pass the new handler to the SignUpPage component
        case 'signup': return <SignUpPage setCurrentPage={setCurrentPage} handleSignUp={handleSignUp} />;
        
        case 'productdetail': return <ProductDetailPage 
                                        product={viewingProduct} 
                                        onAddToCart={handleAddToCart}
                                        onAddToWishlist={handleAddToWishlist}
                                        isInWishlist={viewingProduct ? !!wishlist.find(item => item.id === viewingProduct.id) : false}
                                        setCurrentPage={setCurrentPage}
                                        isLoggedIn={isLoggedIn}
                                      />;
       case 'cart': return <CartPage 
                            cart={cart} 
                            onRemoveFromCart={handleRemoveFromCart} 
                            setCurrentPage={setCurrentPage}
                            onUpdateQuantity={handleUpdateQuantity}
                         />;
        case 'wishlist': return <WishlistPage wishlist={wishlist} onRemoveFromWishlist={handleRemoveFromWishlist} onAddToCart={handleAddToCart} setCurrentPage={setCurrentPage} />;
        case 'home': default: return <HomePage onQuickView={handleQuickView} />;
    }
  }

  return (
    <div className="bg-gray-50 font-sans">
      {/* 2. ADD THE TOASTER COMPONENT HERE */}
      <Toaster position="top-center" reverseOrder={false} />

      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onCartClick={() => setCurrentPage('cart')}
        onWishlistClick={() => setCurrentPage('wishlist')}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
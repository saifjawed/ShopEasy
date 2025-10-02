import React from 'react';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import Icon from '../components/Icon';

const CartPage = ({ cart, onRemoveFromCart, onUpdateQuantity, setCurrentPage }) => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingEstimate = subtotal > 0 ? 5.00 : 0;
    const taxEstimate = subtotal > 0 ? subtotal * 0.08 : 0;
    const total = subtotal + shippingEstimate + taxEstimate;

    // The new, more engaging view for an empty cart
    const EmptyCartView = () => (
        <div className="text-center py-16">
            <Icon component={ShoppingCart} className="w-24 h-24 mx-auto text-gray-300" strokeWidth={1} />
            <h2 className="mt-6 text-2xl font-semibold text-gray-800">Your cart is empty</h2>
            <p className="mt-2 text-gray-500">Looks like you haven't added anything to your cart yet.</p>
            <button
                onClick={() => setCurrentPage('home')}
                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
                Continue Shopping
            </button>
        </div>
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
                <button onClick={() => setCurrentPage('home')} className="flex items-center text-sm font-semibold text-gray-600 hover:text-black mb-6">
                    <Icon component={ArrowLeft} className="w-4 h-4 mr-2"/>
                    Back to Shop
                </button>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

                {cart.length === 0 ? (
                    <EmptyCartView />
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4">Cart Items ({cart.length})</h2>
                            <div className="space-y-6">
                                {cart.map(item => (
                                    <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 border-b pb-6 last:border-b-0 last:pb-0">
                                        <img src={item.image} alt={item.name} className="w-28 h-32 object-cover rounded-md flex-shrink-0"/>
                                        <div className="flex-grow text-center sm:text-left">
                                            <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                                            <p className="font-semibold text-gray-700 mt-1">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center gap-3 flex-shrink-0">
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                                                <Icon component={Minus} className="w-4 h-4" />
                                            </button>
                                            <span className="font-bold w-8 text-center">{item.quantity}</span>
                                            <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
                                                <Icon component={Plus} className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <p className="font-bold text-lg w-24 text-center sm:text-right flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</p>
                                        <button onClick={() => onRemoveFromCart(item.id)} className="text-gray-400 hover:text-red-500 flex-shrink-0">
                                            <Icon component={Trash2} className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit sticky top-28">
                            <h2 className="text-xl font-bold mb-4 border-b pb-4">Order Summary</h2>
                            <div className="space-y-3 text-gray-600">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping estimate</span>
                                    <span className="font-semibold">${shippingEstimate.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tax estimate</span>
                                    <span className="font-semibold">${taxEstimate.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="flex justify-between font-bold text-xl text-gray-900 mt-4 pt-4 border-t">
                                <span>Order total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
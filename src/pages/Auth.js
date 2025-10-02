import React from 'react';
import login from '../assets/login.jpg';
import signup from '../assets/signup.jpg';

export const LoginPage = ({ setCurrentPage, handleLogin }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 animate-fadeIn">
            <div className="w-full max-w-4xl flex bg-white shadow-2xl rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Welcome Back</h2>
                    <p className="text-gray-600 mb-8">Log in to access your account and start shopping.</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input id="email-address" name="email" type="email" required className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label htmlFor="password"className="block text-sm font-medium text-gray-700">Password</label>
                            <input id="password" name="password" type="password" required className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="••••••••" />
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none transform hover:scale-105 transition-transform duration-300">
                                Log In
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <button onClick={() => setCurrentPage('signup')} className="font-medium text-purple-600 hover:text-purple-500 underline">
                            Sign up
                        </button>
                    </p>
                </div>
                <div className="hidden md:block w-1/2 bg-cover">
                    <img src={login} alt="Login" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export const SignUpPage = ({ setCurrentPage, handleSignUp }) => {
    // This handler will call the function from App.js to show the toast
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 animate-fadeIn">
            <div className="w-full max-w-4xl flex bg-white shadow-2xl rounded-lg overflow-hidden">
                <div className="hidden md:block w-1/2 bg-cover">
                    <img src={signup} alt="Sign Up" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Create Your Account</h2>
                    <p className="text-gray-600 mb-8">Join the StyleHub community today.</p>
                    {/* The onSubmit handler is added to the form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="full-name"className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input id="full-name" name="name" type="text" required className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email-address-signup" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input id="email-address-signup" name="email" type="email" required className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label htmlFor="password-signup"className="block text-sm font-medium text-gray-700">Password</label>
                            <input id="password-signup" name="password" type="password" required className="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" placeholder="••••••••" />
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none transform hover:scale-105 transition-transform duration-300">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <button onClick={() => setCurrentPage('login')} className="font-medium text-purple-600 hover:text-purple-500 underline">
                            Log in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};
import React from "react";
import ProductCard from "../components/ProductCard";

function Home() {
    // Sample product data to showcase multiple products
    const products = [
        {
            id: 1,
            name: "Premium Wireless Headphones",
            price: 299.99,
            originalPrice: 399.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            rating: 4.5,
            reviews: 128,
            description: "High-quality wireless headphones with noise cancellation",
            inStock: true,
            discount: 25
        },
        {
            id: 2,
            name: "Smart Watch Series 7",
            price: 399.99,
            originalPrice: 499.99,
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
            rating: 4.8,
            reviews: 256,
            description: "Advanced fitness tracking with heart rate monitoring",
            inStock: true,
            discount: 20
        },
        {
            id: 3,
            name: "Wireless Charging Pad",
            price: 49.99,
            originalPrice: 79.99,
            image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop",
            rating: 4.3,
            reviews: 89,
            description: "Fast wireless charging for all compatible devices",
            inStock: true,
            discount: 38
        },
        {
            id: 4,
            name: "Bluetooth Speaker",
            price: 129.99,
            originalPrice: 179.99,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
            rating: 4.6,
            reviews: 174,
            description: "Portable speaker with 360-degree sound",
            inStock: false,
            discount: 28
        },
        {
            id: 5,
            name: "Gaming Keyboard",
            price: 159.99,
            originalPrice: 199.99,
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
            rating: 4.7,
            reviews: 203,
            description: "Mechanical gaming keyboard with RGB lighting",
            inStock: true,
            discount: 20
        },
        {
            id: 6,
            name: "Wireless Mouse",
            price: 79.99,
            originalPrice: 99.99,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
            rating: 4.4,
            reviews: 156,
            description: "Ergonomic wireless mouse with precision tracking",
            inStock: true,
            discount: 20
        }
    ];

    return (
        <div className="mt-10 min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Welcome to TechStore
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            Discover amazing tech products at unbeatable prices
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                Shop Now
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                        <p className="text-gray-600">Free shipping on orders over $50</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                        <p className="text-gray-600">30-day money-back guarantee</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Round-the-clock customer support</p>
                    </div>
                </div>

                {/* Products Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
                        Featured Products
                    </h2>
                    <p className="text-gray-600 text-center mb-12">
                        Discover our best-selling tech products with exclusive discounts
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Shop?
                    </h2>
                    <p className="text-xl mb-8 text-gray-300">
                        Join thousands of satisfied customers and find your perfect tech companion
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Browse All Products
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
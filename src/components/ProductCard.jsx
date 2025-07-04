import React, { useState } from "react";
import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { useCart } from './CartContext';

function ProductCard({ 
    product = {
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
    }
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [justAdded, setJustAdded] = useState(false);
    
    const { addToCart, cartItems } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
        // Show feedback for 2 seconds (not 200ms)
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 2000);
    };

    // Fixed: cartitem → cartItems (case sensitive!)
    const isInCart = cartItems.some(item => item.id === product.id);
    const cartItem = cartItems.find(item => item.id === product.id);

    return(
        <div 
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-w-sm mx-auto overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                
                {/* Discount Badge */}
                {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                        -{product.discount}%
                    </div>
                )}
                
                {/* Stock Status */}
                {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">Out of Stock</span>
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-6">
                {/* Product Name */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                </p>
                
                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                            ${product.price}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                                ${product.originalPrice}
                            </span>
                        )}
                    </div>
                </div>
                
                {/* Add to Cart Button */}
                <button 
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                        product.inStock 
                            ? justAdded
                                ? 'bg-green-600 text-white'
                                : isInCart
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 active:scale-95'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 active:scale-95'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    {justAdded ? (
                        <>
                            <Check className="w-5 h-5" />
                            <span>Added to Cart!</span>
                        </>
                    ) : (
                        <>
                            <ShoppingCart className="w-5 h-5" />
                            <span>
                                {!product.inStock 
                                    ? 'Out of Stock' 
                                    : isInCart 
                                        ? `Add More (${cartItem?.quantity} in cart)`
                                        : 'Add to Cart'
                                }
                            </span>
                        </>
                    )}
                </button>
                
                {/* Cart Status */}
                {isInCart && !justAdded && (
                    <div className="text-center mt-2 text-sm text-green-600 font-medium">
                        ✓ {cartItem?.quantity} item{cartItem?.quantity > 1 ? 's' : ''} in cart
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductCard  
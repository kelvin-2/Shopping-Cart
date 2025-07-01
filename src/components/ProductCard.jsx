import React, { useState } from "react";
import { Heart, ShoppingCart, Star, Check } from "lucide-react";
import { useCart } from './CartContext';

function ProductCard () {
    const [isHovered, setIsHovered] = useState(false);
    const [justAdded, setJustAdded] = useState(false);
    
    const { addToCart, cartItems } = useCart();

    const handleAddToCart=() =>{
        addToCart(product);
        //for feedback 
        setJustAdded(true)
        setTimeout(() =>setJustAdded(false),200);
    };

    const isInCart= cartItems.some(item=> item .id === product.id);
    const cartItem= cartitem.find( item => item.id === product.id);

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
                
                {/* Wishlist Button */}
                <button 
                    onClick={toggleWishlist}
                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
                >
                    <Heart 
                        className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                </button>
                
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
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                        ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                    </span>
                </div>
                
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
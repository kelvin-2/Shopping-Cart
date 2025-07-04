// CartCard.js
import { useCart } from './CartContext';

function CartCard({ item }) {
    const { removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(item.id);
        } else {
            updateQuantity(item.id, newQuantity);
        }
    };

    return (
        <div className='bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition duration-200'>
            <div className='flex items-center gap-4'>
                {/* Product Image Placeholder */}
                <div className='w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center'>
                    <span className='text-gray-400 text-sm'>IMG</span>
                </div>
                
                {/* Product Details */}
                <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-white mb-1'>{item.name}</h3>
                    <p className='text-gray-400 text-sm mb-2'>
                        R{item.price.toFixed(2)} each
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className='flex items-center gap-3'>
                        <span className='text-sm text-gray-400'>Quantity:</span>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={() => handleQuantityChange(item.quantity - 1)}
                                className='w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white font-bold transition duration-200'
                            >
                                -
                            </button>
                            <span className='w-8 text-center font-semibold'>{item.quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(item.quantity + 1)}
                                className='w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white font-bold transition duration-200'
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Price and Remove */}
                <div className='text-right'>
                    <div className='text-lg font-bold text-white mb-2'>
                        R{(item.quantity * item.price).toFixed(2)}
                    </div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-red-400 hover:text-red-300 text-sm font-semibold transition duration-200'
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
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
        <div className='bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition duration-200 shadow-sm'>
            <div className='flex items-center gap-6'>
                {/* Product Image Placeholder */}
                <div className='w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200'>
                    <span className='text-gray-400 text-sm font-medium'>IMG</span>
                </div>
                
                {/* Product Details */}
                <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-1'>{item.name}</h3>
                    <p className='text-gray-600 text-sm mb-3'>
                        R{item.price.toFixed(2)} each
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className='flex items-center gap-3'>
                        <span className='text-sm text-gray-600 font-medium'>Quantity:</span>
                        <div className='flex items-center gap-2'>
                            <button
                                onClick={() => handleQuantityChange(item.quantity - 1)}
                                className='w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold transition duration-200 border border-gray-300'
                            >
                                -
                            </button>
                            <span className='w-8 text-center font-semibold text-gray-800'>{item.quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(item.quantity + 1)}
                                className='w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold transition duration-200 border border-gray-300'
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Price and Remove */}
                <div className='text-right'>
                    <div className='text-xl font-bold text-gray-800 mb-3'>
                        R{(item.quantity * item.price).toFixed(2)}
                    </div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className='text-red-500 hover:text-red-600 text-sm font-semibold transition duration-200 px-3 py-1 rounded-md hover:bg-red-50'
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartCard;
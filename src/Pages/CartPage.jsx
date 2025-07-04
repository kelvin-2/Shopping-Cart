// Cart.js
import CartCard from '../components/CartCard';
import { useCart } from '../components/CartContext';

function Cart() {
    const { cartItems, totalQuantity, getTotalPrice, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className='mt-10 min-h-screen p-10'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-8 text-gray-800'>Your Shopping Cart</h2>
                    <div className='text-center py-20'>
                        <div className='text-6xl mb-4'>🛒</div>
                        <p className='text-xl text-gray-600 mb-6'>Your cart is empty</p>
                        <button className='bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold text-white transition duration-200 shadow-lg hover:shadow-xl'>
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='mt-10 min-h-screen p-10'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-3xl font-bold text-gray-800'>Your Shopping Cart</h2>
                    <button 
                        onClick={clearCart}
                        className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold text-white transition duration-200 shadow-md hover:shadow-lg'
                    >
                        Clear Cart
                    </button>
                </div>
                
                <div className='grid lg:grid-cols-3 gap-8'>
                    {/* Cart Items */}
                    <div className='lg:col-span-2'>
                        <div className='space-y-4'>
                            {cartItems.map(item => (
                                <CartCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Cart Summary */}
                    <div className='bg-gray-50 border border-gray-200 p-6 rounded-xl h-fit shadow-sm'>
                        <h3 className='text-xl font-semibold mb-4 text-gray-800'>Order Summary</h3>
                        <div className='space-y-3'>
                            <div className='flex justify-between'>
                                <span className='text-gray-600'>Total Items:</span>
                                <span className='font-semibold text-gray-800'>{totalQuantity}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-gray-600'>Subtotal:</span>
                                <span className='font-semibold text-gray-800'>R{getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-gray-600'>Shipping:</span>
                                <span className='font-semibold text-green-600'>Free</span>
                            </div>
                            <hr className='border-gray-300' />
                            <div className='flex justify-between text-lg font-bold'>
                                <span className='text-gray-800'>Total:</span>
                                <span className='text-gray-800'>R{getTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>
                        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-6 transition duration-200 shadow-lg hover:shadow-xl'>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
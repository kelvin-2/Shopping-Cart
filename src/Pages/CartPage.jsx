// Cart.js
import CartCard from '../components/CartCard';
import { useCart } from './CartContext';

function Cart() {
    const { cartItems, totalQuantity, getTotalPrice, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className='bg-black min-h-screen p-10 text-white'>
                <div className='max-w-4xl mx-auto'>
                    <h2 className='text-3xl font-bold mb-8'>Your Shopping Cart</h2>
                    <div className='text-center py-20'>
                        <div className='text-6xl mb-4'>🛒</div>
                        <p className='text-xl text-gray-300 mb-6'>Your cart is empty</p>
                        <button className='bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-200'>
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='bg-black min-h-screen p-10 text-white'>
            <div className='max-w-4xl mx-auto'>
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-3xl font-bold'>Your Shopping Cart</h2>
                    <button 
                        onClick={clearCart}
                        className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition duration-200'
                    >
                        Clear Cart
                    </button>
                </div>
                
                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Cart Items */}
                    <div className='md:col-span-2'>
                        <div className='space-y-4'>
                            {cartItems.map(item => (
                                <CartCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                    
                    {/* Cart Summary */}
                    <div className='bg-gray-900 p-6 rounded-lg h-fit'>
                        <h3 className='text-xl font-semibold mb-4'>Order Summary</h3>
                        <div className='space-y-3'>
                            <div className='flex justify-between'>
                                <span className='text-gray-300'>Total Items:</span>
                                <span className='font-semibold'>{totalQuantity}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-gray-300'>Subtotal:</span>
                                <span className='font-semibold'>R{getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span className='text-gray-300'>Shipping:</span>
                                <span className='font-semibold'>Free</span>
                            </div>
                            <hr className='border-gray-600' />
                            <div className='flex justify-between text-lg font-bold'>
                                <span>Total:</span>
                                <span>R{getTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>
                        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-6 transition duration-200'>
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
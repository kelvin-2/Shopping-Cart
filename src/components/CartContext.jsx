import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();
// This will hold the cart data and functions to manage it

export function CartProvider({ children }) { // Fixed: "childern" → "children"
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemExists = cartItems.find((i) => i.id === item.id);

        if (itemExists) {
            // Update the quantity if item already exists
            const updateItems = cartItems.map(i =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            setCartItems(updateItems);
        } else {
            // Add new item with quantity 1
            setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    // Get total quantity of all items in cart
    const getTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Get total price of all items in cart
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const cartCount = cartItems.length; // Number of unique items in cart
    const totalQuantity = getTotalQuantity(); // Total quantity of all items

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            cartCount,
            totalQuantity,
            removeFromCart,
            clearCart,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
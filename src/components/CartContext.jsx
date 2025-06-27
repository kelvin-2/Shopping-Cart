import React ,{createContext , useContext ,useState} from 'react';

const CartContext =createContext();
//this will hold the cart data and functions  to manage it 

export function CartProvider({childern}){
    const [cartItems,setCartItems]= useState([]);

    const addToCart =(item) => {
        const itemExists = cartItems.find((i) => i.id === item.id);

        if(itemExists){
             // Update the quantity if item already exists
            const updateItems =cartItems.map(i =>
                i.id===item.id ?{...i ,quantity: i.quantity +1} :i
            );
            setCartItems(updateItems);
        }else{
            // Add new item with quantity 1
            setCartItems(prevItems => [...prevItems, {...item,quantity:1}]);
        }
    };
    const clearCart = () => {
        setCartItems([]);
    };      

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };
      

    const cartCount = cartItems.length; //the amount of thing in the carts 

    return (
        <CartContext.Provider value = {{cartItems,addToCart,cartCount,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart (){
    return useContext(CartContext);
}
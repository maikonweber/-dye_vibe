import { createContext, useEffect, useState, useContext} from 'react';
import {parseCookies, setCookie} from 'nookies';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [cart, setCart] = useState([]);
    const auth = 'authetication'

function handleAddtoCart(url, name , price) {
    const itemObject =  { url , name , price}
    setCart({...cart, itemObject})
}

function handleRemoveItemFromCart(clickedItemIndex) {
    const filteredCart = cart.filter((item, index) => index !== clickedItemIndex);
    setCart(filteredCart);
}

function clearCart() {
    setCart([]);
}

    
    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        
    }, []);

    return (
        <AuthContext.Provider value={{cart, handleAddtoCart, handleRemoveItemFromCart, clearCart}}>
            {children}
        </AuthContext.Provider>
    );
}
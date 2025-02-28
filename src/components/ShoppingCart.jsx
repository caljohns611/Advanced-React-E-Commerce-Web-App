import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './CartSlice';

const ShoppingCart = () => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.map((item) => (
                <div key={item.id} className='cart-item'>
                    <img src={item.image} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            ))}
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ${totalItemsPrice.toFixed(2)}</h3>
            <button onClick={() => { dispatch(clearCart()); sessionStorage.clear(); }}>Checkout</button>
        </div>
    );
};

export default ShoppingCart;
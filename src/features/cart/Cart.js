import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeItemQuantity } from './cartSlice';
import { calculateTotal, getCurrencySymbol } from '../../utilities/utilities';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const currencyFilter = useSelector((state) => state.currencyFilter);

    const onInputChangeHandler = (name, input) => {
        if (input === '') return;
        const newQuantity = Number(input);
        dispatch(changeItemQuantity({ name, newQuantity }));
    };

    const cartElements = [];
    for (let itemName in cart) {
        if (cart[itemName].quantity > 0) {
            cartElements.push(createCartItem(itemName));
        }
    }

    const total = calculateTotal(cart, currencyFilter);

    return (
        <div id="cart-container">
            <ul id="cart-items">
                {cartElements.length ? cartElements : 'Your cart is empty'}
            </ul>
            <h3 className="total">
                Total <span className="total-value">
          {getCurrencySymbol(currencyFilter)}{total} {currencyFilter}
        </span>
            </h3>
        </div>
    );

    function createCartItem(name) {
        const item = cart[name];
        return (
            <li key={name}>
                <p>{name}</p>
                <select
                    className="item-quantity"
                    value={item.quantity}
                    onChange={(e) => {
                        onInputChangeHandler(name, e.target.value);
                    }}
                >
                    {[...Array(100).keys()].map((_, index) => (
                        <option key={index} value={index}>
                            {index}
                        </option>
                    ))}
                </select>
            </li>
        );
    }
};

export default Cart;

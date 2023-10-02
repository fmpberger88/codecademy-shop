import React from 'react';
import { useSelector } from 'react-redux';

import Inventory from "./features/inventory/Inventory";
import CurrencyFilter from "./features/currencyFilter/CurrencyFilter";
import Cart from "./features/cart/Cart";

export const App = () => {
    const state = useSelector(state => state);
    const { inventory, currencyFilter, cart } = state;

    return (
        <div>
            <CurrencyFilter
                currencyFilter={currencyFilter}
            />
            <Inventory
                inventory={inventory}
                currencyFilter={currencyFilter}
            />
            <Cart
                cart={cart}
                currencyFilter={currencyFilter}
            />
        </div>
    );
};

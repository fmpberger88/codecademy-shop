import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../cart/cartSlice';
import { loadData } from './inventorySlice';
import { inventoryData} from "../../data";
import { calculatePrice, getCurrencySymbol } from '../../utilities/utilities';

const Inventory = () => {
    const dispatch = useDispatch();
    const inventory = useSelector((state) => state.inventory);
    const currencyFilter = useSelector((state) => state.currencyFilter);

    useEffect(() => {
        dispatch(loadData(inventoryData));  // Wir verwenden inventoryData direkt hier, da es in Ihrer vorherigen Implementierung auch so war.
    }, [dispatch]);

    const onClickHandler = (inventoryItem) => {
        dispatch(addItem(inventoryItem));
    };

    if (inventory.length === 0) {
        return <p>Sorry, no products are currently available...</p>;
    }

    return (
        <ul id="inventory-container">
            {inventory.map((item) => {
                const { price, name, img } = item;
                const displayPrice = calculatePrice(price, currencyFilter);
                return (
                    <li key={name} className="item">
                        <img src={img} alt="" />
                        <h3>{name}</h3>
                        <h3>
                            {getCurrencySymbol(currencyFilter)}
                            {displayPrice.toFixed(2)} {currencyFilter}
                        </h3>
                        <button onClick={() => onClickHandler(item)} className="add-to-cart-button">
                            Add to Cart
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Inventory;

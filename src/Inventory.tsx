import React from 'react';
import './Inventory.css';
import { Item } from './types/item';

export type InventoryProps = {
    items: Item[]
}

export const Inventory = ({items}: InventoryProps) => {
    return (
        <section className='inventory-wrapper'>
            <ul className='inventory'>
                {items.map((item) => 
                    <li key={item.id} className='item'>
                        <img src={item.iconUrl} />
                        {item.quantity && <span className='item-quantity'>{item.quantity}</span>}
                    </li>
                )}
            </ul>
        </section>
    );
}
import { useState } from "react";
import { Inventory } from "./Inventory";
import { Item } from "./types/item";
import DivineRapierImg from './assets/Divine_Rapier_icon.webp';
import TangoImg from './assets/Tango_icon.webp';
import './App.css';
import { generateId } from "./libs/generateId";

const tango: Item = {id: 'tango-' + generateId(), name: 'tango', iconUrl: TangoImg, quantity: 12};

const createRapier = (): Item => ({
    id: 'divine-rapier-' + generateId(),
    name: 'divine rapier',
    iconUrl: DivineRapierImg
});

export const App = () => {
    const [items, setItems] = useState<Item[]>([tango]);

    // Why doesn't this one work?
    // const addItem = () => {
    //     items.push(createRapier());
    // };

    // What is the problem here?
    // const addItem = () => {
    //     items.push(createRapier());
    //     setItems(items);
    // };

    // Why immutability is important in React?
    // const addItem = () => {
    //     items.push(createRapier());
    //     setItems([...items]);
    // };
    
    // What's the difference between this and the previous one?
    const addItem = () => setItems((state) => [...state, createRapier()]);

    const clearInventory = () => setItems([]);

    return <section className="app">
        <Inventory items={items}/>
        <footer>
            <button type='button' onClick={addItem}>Add item</button>
            <button type='button' onClick={clearInventory}>Clear Inventory</button>
        </footer>
    </section>
}
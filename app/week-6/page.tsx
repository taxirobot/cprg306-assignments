"use client";
import { useState } from "react"
import { ItemList } from "./item-list"
import { NewItem } from "./new-item"
import itemsData from "./items.json" with {type: "JSON"}

export default function Page() {
    var [items, setItems] = useState (itemsData);
    const handleAddItem = (item) => {
        alert (`${item.name}`)
        const newItems = [...items, {id: item.id, name: item.name, quantity: item.quantity, category: item.category}]
        setItems(newItems);
    }

    return (
        <main className="mx-122 my-3">
            <h1 className="font-bold text-2xl py-1">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <ItemList items={items}></ItemList>
        </main>
    )
}
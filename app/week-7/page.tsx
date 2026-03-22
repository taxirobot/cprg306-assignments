"use client";
import { useState } from "react"
import { ItemList } from "./item-list"
import { NewItem } from "./new-item"
import { MealIdeas} from "./meal-ideas"
import itemsData from "./items.json" with {type: "JSON"}

export default function Page() {
    var [items, setItems] = useState (itemsData);
    var [selectedItemName, setSelectedItemName] = useState()
    const handleAddItem = (item) => {
        alert (`${item.name}`)
        const newItems = [...items, {id: item.id, name: item.name, quantity: item.quantity, category: item.category}]
        setItems(newItems);
    }
    const handleItemSelect = (item) => {    
        var name = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

        const itemName = name.split(",")
        setSelectedItemName(itemName[0])
    }

    return (
        <main className="my-3 mx-auto w-2/3">
            <h1 className="font-bold text-2xl py-1">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem}></NewItem>
            <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
            <MealIdeas ingredient={selectedItemName}></MealIdeas>
        </main>
    )
}
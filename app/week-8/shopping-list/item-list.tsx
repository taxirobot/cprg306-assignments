"use client";
import { Item } from "./item"
import { useState } from "react"

export function ItemList({items, onItemSelect}) {
    var [sortBy, setSortBy] = useState ("name");
    const itemsData = [...items]


    const sorting = (a, b) => {
        var orderA;
        var orderB;

        if (sortBy == "name") {
            orderA = a.name.toUpperCase(); // ignore upper and lowercase
            orderB = b.name.toUpperCase(); // ignore upper and lowercase
        }

        if (sortBy == "category") {
            orderA = a.category.toUpperCase(); // ignore upper and lowercase
            orderB = b.category.toUpperCase(); // ignore upper and lowercase
        }

        if (orderA < orderB) {
            return -1;
        } 
        if (orderA > orderB) {  
            return 1;
        }
        // names must be equal
        return 0;
    }

    return (
        <main>
            <p className="flex flex-row gap-2">
                <button onClick={() => setSortBy("category")} disabled={sortBy == "category"} 
                    className="flex px-2 bg-blue-500 hover:bg-blue-700 rounded self-center font-bold disabled:bg-gray-400">
                        Sort by category</button>
                <button onClick={() => setSortBy("name")} disabled={sortBy == "name"}
                    className="flex px-2 bg-blue-500 hover:bg-blue-700 rounded self-center font-bold disabled:bg-gray-400">
                        Sort by name</button>
            </p>

            <ul>
                {itemsData.sort(sorting).map((item, index) => (
                    <Item key={index} name={item.name} quantity={item.quantity} category={item.category} onSelect={() => onItemSelect(item)}></Item>
                ))}
            
            </ul>
        </main>
    );

}
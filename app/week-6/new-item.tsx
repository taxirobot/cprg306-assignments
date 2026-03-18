"use client";
import { useState } from "react";
import { Item } from "../week-3/item";

export function NewItem({onAddItem}) {
    var [name, setName] = useState("");
    var [quantity, setQuantity] = useState(1);
    var [category, setCategory] = useState("produce");
    var [nameTouched, setNameTouched] = useState(false)

    const updateName = (event) => setName(event.target.value);

    const updateNameTouched = () => setNameTouched(true);

    const updateQuantity = (event) => setQuantity(event.target.value);

    const updateCategory = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        if (!name || name.length < 2) {
            alert("Name needs to be at least 2 characters")
            return;
        }

        event.preventDefault();
        let item = {name: name, quantity: quantity, category: category}
        console.log(item.name);
        onAddItem(item);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col my-10 gap-2 bg-neutral-800 rounded-lg p-5">
            <p className="font-bold">
                Name: 
                <input  type="text" value={name} onChange={updateName} onBlur={updateNameTouched} required 
                className={`${(name == "") && (nameTouched == true) ? 'border border-red-600' : ''} mx-2 rounded font-normal`}/>
            </p>
            {((name == "") && (nameTouched == true)) && <p className="bg-red-600 rounded px-1 w-fit">Item needs a name</p>}
            <p className="font-bold">
                Quantity:
                <input type="number" min={1} max={99} value={quantity} onChange={updateQuantity} required className="mx-2 rounded font-normal"/>
            </p>
            <p className="font-bold">
                Category: 
                <select value={category} onChange={updateCategory} className="bg-neutral-800 mx-2 rounded font-normal">
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="Dry Goods">Dry Goods</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Snacks">Snacks</option>
                    <option value="Household">Household</option>
                    <option value="Other">Other</option>
                </select>
            </p>
            <input type="submit" value="Submit" disabled={name == ""} className="bg-blue-500 hover:bg-blue-700 rounded w-20 self-center font-bold disabled:bg-gray-400 disabled:cursor-not-allowed" />
        </form>
    )
}
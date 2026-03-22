export function Item({name, quantity, category, onSelect}) {  
    return (
        <li className="border border-white rounded p-2 my-2 hover:bg-blue-500" onClick={onSelect}>{name}<br/>
        Quantity: {quantity}<br/>
        <p className="capitalize">Category: {category}</p></li>
    )
}
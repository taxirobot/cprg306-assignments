export function Item({name, quantity, category}) {  
    return (
        <li className="border border-white rounded p-2 my-2">{name}<br/>
        Quantity: {quantity}<br/>
        <p className="capitalize">Category: {category}</p></li>
    )
}
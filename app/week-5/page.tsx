import {ItemList} from "./item-list"

export default function Page() {
    return (
        <main className="my-3 mx-auto w-2/3">
            <h1 className="font-bold text-2xl py-1">
                Shopping List
            </h1>
            <ItemList></ItemList>
        </main>
    )
}
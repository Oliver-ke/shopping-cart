import { createContext, JSX, useContext } from "solid-js";
import { SetStoreFunction, createStore } from 'solid-js/store';
import { Item } from "../typeDefs/Items";


type CartContextValue ={
    items: Item[];
    setItems: SetStoreFunction<Item[]>
}

const CartContext = createContext<CartContextValue>()

type CartContextProviderProps = {
    children: JSX.Element
}

function CartContextProvider(props: CartContextProviderProps ): JSX.Element{
    const [items, setItems] = createStore<Item[]>([])
    return (
        <CartContext.Provider value={{ items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

const useCartStore = () => useContext(CartContext)

export {
    CartContext,
    CartContextProvider,
    useCartStore
}
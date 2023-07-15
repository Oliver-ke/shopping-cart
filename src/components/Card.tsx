import { JSX } from 'solid-js';
import { formatCurrency } from '../utils/money';
import { Item } from '../typeDefs/Items';
import { useCartStore } from '../context/CartContext';

interface ICard {
    item: Item
    style?: string
}

export default function Card(props:ICard): JSX.Element{
    const store = useCartStore()

    function addItem(){
        const alreadyExist = store?.items.find((p) => p.id === props.item.id)

        if(alreadyExist){
            store?.setItems((p) => p.id === props.item.id, 'quantity',( cty) => cty ? cty + 1: 1)
            return
        }
        
        store?.setItems([...store.items, props.item])
    }
   
    return(
    <div class={`bg-white rounded-sm shadow-ms w-80 ${props.style}`}>
        <img  class="h-40 w-full object-cover" src={props.item.image} alt={props.item?.name}/>
        <div class="bg-white p-4 text-left rounded-sm shadow-ms">
        <h2 class="text-slate-700 dark:text-slate-500">{props.item?.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas ab laborum quia nisi temporibus.</p>
        <div class="grid gap-2 grid-cols-2 grid-rows-2 mt-2">
             <h2 class="text-slate-700 dark:text-slate-500">{formatCurrency({amount:props.item?.price})}</h2>
           <div class='text-primary cursor-pointer' onClick={() => addItem()}>
            Add to Cart
            </div> 
        </div>
        <button class="btn">View details   <strong class="ml-4">&#8594</strong></button>
        </div>
    </div>
    )
}
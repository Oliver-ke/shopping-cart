import { JSX } from 'solid-js';
import { formatCurrency } from '../utils/money';
import { Item } from '../typeDefs/Items';

interface ICard {
    item: Item
    style?: string
}

export default function Card({item, style}:ICard): JSX.Element{
   
    return(
    <div class={`bg-white rounded-sm shadow-ms w-80 ${style}`}>
        <img  class="h-40 w-full object-cover" src={item.image} alt={item?.name}/>
        <div class="bg-white p-4 text-left rounded-sm shadow-ms">
        <h2 class="text-slate-700 dark:text-slate-500">{item?.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas ab laborum quia nisi temporibus.</p>
        <div class="grid gap-2 grid-cols-2 grid-rows-2 mt-2">
             <h2 class="text-slate-700 dark:text-slate-500">{formatCurrency({amount:item?.price})}</h2>
           <div class='text-primary cursor-pointer' onClick={() => {}}>
            Add to Cart
            </div> 
        </div>
        <button class="btn">View details   <strong class="ml-4">&#8594</strong></button>
        </div>
    </div>
    )
}
import { JSX } from 'solid-js';
import { Item } from '../typeDefs/Items';
import { formatCurrency } from '../utils/money';



function CartPage(): JSX.Element {
    const data: any[] = []

  const incrementCount = (item: Item) => {

  };

  const decrementCount = (item: Item) => {
  };

  const deleteItem = (item: Item) => {
  };

  const calculateTotalItemCount = () => {
    return 5
  };

  const calculateTotalAmount = () => {
    return 200
  };

  return (
    <div class="text-center">
  <h1 class="text-3xl font-bold mb-8">Cart</h1>
  {data.length === 0 ? (
    <p class="text-gray-500 text-lg">Your cart is empty.</p>
  ) : (
    <>
      <ul class="mb-8">
        {data.map(item => (
          <li class="flex items-center mb-4">
            <span class="flex-1 text-lg font-medium">{item.name}</span>
            <span class="mr-4 text-lg">${item.price}</span>
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded-lg mr-2"
              onClick={() => incrementCount(item)}
            >
              +
            </button>
            <span class="mr-2 text-lg">{item.quantity}</span>
            <button
              class="px-4 py-2 bg-red-500 text-white rounded-lg mr-2"
              onClick={() => decrementCount(item)}
            >
              -
            </button>
            <button
              class="px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => deleteItem(item)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p class="text-lg mb-4">
        Total Items: {calculateTotalItemCount()}
      </p>
      <p class="text-xl font-bold">
        Total Amount: {formatCurrency({amount:calculateTotalAmount()})}
      </p>
    </>
  )}
</div>


  );
}

export default CartPage
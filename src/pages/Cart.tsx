import { For, JSX } from "solid-js";
import { Item } from "../typeDefs/Items";
import { formatCurrency } from "../utils/money";
import { useCartStore } from "../context/CartContext";

function CartPage(): JSX.Element {
  const store = useCartStore();

  const incrementCount = (item: Item) => {
    store?.setItems((prev) =>
      prev?.map((p) =>
        p.id === item.id && (p.quantity || 0) > 1
          ? { ...p, quantity: (p.quantity || 0) + 1 }
          : p
      )
    );
  };

  const decrementCount = (item: Item) => {
    store?.setItems((prev) =>
      prev?.map((p) =>
        p.id === item.id && (p.quantity || 0) > 1
          ? { ...p, quantity: (p.quantity || 0) - 1 }
          : p
      )
    );
  };

  const deleteItem = (item: Item) => {
    store?.setItems((prev) => prev.filter((t) => t.id !== item.id));
  };

  const calculateTotalItemCount = () => {
    return store?.items.reduce((a, c) => a + (c?.quantity || 0), 0);
  };

  const calculateTotalAmount = () => {
    return store?.items.reduce(
      (total, item) => total + item.price * (item.quantity || 0),
      0
    );
  };

  return (
    <div class="text-center">
      <h1 class="text-3xl font-bold mb-8">Cart</h1>
      {store?.items.length === 0 ? (
        <p class="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <ul class="mb-8">
            <For each={store?.items}>
              {(item) => (
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
              )}
            </For>
          </ul>
          <p class="text-lg mb-4">Total Items: {calculateTotalItemCount()}</p>
          <p class="text-xl font-bold">
            Total Amount: {formatCurrency({ amount: calculateTotalAmount() })}
          </p>
        </>
      )}
    </div>
  );
}

export default CartPage;

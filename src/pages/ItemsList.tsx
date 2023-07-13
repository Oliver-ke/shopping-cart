import { For, JSX } from "solid-js";
import Card from "../components/Card";
import data from "../context/data/cartData";

function ItemsList(): JSX.Element {
  return (
    <div class="container m-auto">
      <div class="grid grid-cols-4 gap-5 my-4">
        <For each={data}>{(item) => <Card item={item} />}</For>
      </div>
    </div>
  );
}

export default ItemsList;

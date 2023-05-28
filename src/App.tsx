import { JSX } from 'solid-js';
import ItemsList from './pages/ItemsList';
import {  Route, Routes, A } from "@solidjs/router";
import CartPage from './pages/Cart';
import { useCartStore } from './context/CartContext';

function App(): JSX.Element {

  console.log("called")

  const store = useCartStore()

  const quantity = () => {
    return store?.items.reduce((a, c) => a + (c?.quantity || 0), 0)
  }

  return (
   <div class="container m-auto">
    <header class='flex justify-between'>
      <div class='flex justify-between w-80'>
        <h1 class="text-primary ">Code Jam</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
      </div>
      
    </header>
      <Routes>
        <Route path="/" component={ItemsList} />
        <Route path="/cart" component={CartPage} /> 
      </Routes>
   </div>
  );
}

export default App;




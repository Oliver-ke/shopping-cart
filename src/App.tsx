import { JSX } from 'solid-js';
import ItemsList from './pages/ItemsList';
import {  Route, Routes, A } from "@solidjs/router";
import CartPage from './pages/Cart';

function App(): JSX.Element {

  return (
   <div class="container m-auto">
    <header class='flex justify-between'>
      <div class='flex justify-between w-80'>
        <h1 class="text-primary ">Code Jam</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart ({/*quantity */ 5})</A>
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




import Header from "./components/Header";
import CartContextProvider from "./store/cart-context";
import FoodList from "./components/food-list/FoodList";

function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <FoodList />
      </CartContextProvider>
    </>
  );
}

export default App;

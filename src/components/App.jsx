import Greeting from "./Greeting";
import OrderStatus from "./OrderStatus";
import ShoppingList from "./ShoppingList";


function App() {
  
  return (
    <div className="App">
      <Greeting name="John Smith" />
      <ShoppingList
        items={[
          { id: 1, name: "Apple" },
          { id: 2, name: "Orange" },
          { id: 3, name: "Peach" },
        ]}
      />
      <OrderStatus orderId="34512" status="Доставлено" />
      <OrderStatus orderId="15432" status="Отгружен" />
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem{...item} cart={cart} setCart={setCart} total={total} setTotal={setTotal} /> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        {Object.keys(cart).map((key, index) => <div>{cart[key]}x {key}</div>)}

        <h1>Total: ${(total).toFixed(2)}</h1>
      </div>
    </div>

  );
};

export default App;

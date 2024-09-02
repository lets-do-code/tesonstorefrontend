import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import ShoppingCarts from "./components/AddToCart/ShoppingCarts";
import axios from "axios";
import Home from "./screens/Home";


function App() {

  const [apiData, setApiData] = useState([]);
  const [cart, setCart] = useState([]);

  // const host = "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  const host = "http://localhost:8000/api/getallproduct"

  // Api response
  const getdata = async () => {
    try {
      const response = await axios.get(host);
      console.log(response.data.products)
      setApiData(response.data.products);
      // setApiData(response.data);
    } catch (err) {
      console.log("Error: " + err);
    }
  }



  // Add Prdduct in the Shopping Cart

  const addToCart = (item) => {

    const getItemQuantityFromApiRespose = apiData.find(product => product._id === item._id);





    const existingItem = cart.find(cartItem => cartItem._id === getItemQuantityFromApiRespose._id);

    if (existingItem) {
      if (existingItem.quantity + 1 > getItemQuantityFromApiRespose.quantity) {
        alert("Please choose another product");
        return;
      }
      setCart(
        cart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };


  // Remove accourance from cart

  const removeItemFromCart = (item) => {
    console.log(item)

    if (item.quantity === 1) {
      handleRemoveItem(item._id)
    }

    else {
      setCart(
        cart.map(cartItem =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }


  }


  // Remove Product from Shopping cart

  const handleRemoveItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem._id !== itemId));
    alert("Product removed successfully")

  };



  // Get Initial Data from API  
  useEffect(() => {
    getdata()
  }, []);

  return (
    <div className="md:h-screen md:overflow-hidden" >
      <Header cart={cart} setCart={setCart} />

      <div className="max-w-[1280px] mx-auto ">

        <Routes>

          <Route path="/" element={<Home apiData={apiData} cart={cart} setCart={setCart} onAddToCart={addToCart} />} />

          <Route path="/addtocart" element={<ShoppingCarts cart={cart} onAddToCart={addToCart} removeItemFromCart={removeItemFromCart} handleRemoveItem={handleRemoveItem} />} />
        </Routes>

      </div>

    </div>
  );
}

export default App;
